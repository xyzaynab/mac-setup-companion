import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { Shell, ProgressBar } from "@/components/workbench/Shell";
import { actions, getProgress, useWorkbench } from "@/lib/workbench/store";
import type { Doc, Step } from "@/lib/workbench/types";

export const Route = createFileRoute("/guide/$docId")({
  validateSearch: (search: Record<string, unknown>) => ({
    step: Math.max(0, Number(search["step"]) || 0),
  }),
  head: () => ({
    meta: [
      { title: "Guided walkthrough — Mac Setup Workbench" },
      {
        name: "description",
        content: "Work through one macOS setup step at a time with notes, completion state and resume.",
      },
      { property: "og:title", content: "Guided walkthrough — Mac Setup Workbench" },
      { property: "og:description", content: "One actionable macOS step at a time, tracked locally." },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  const { docId } = Route.useParams();
  const { step } = Route.useSearch();
  const navigate = useNavigate();
  const { docs, progress, ready } = useWorkbench();

  const doc = docs.find((d) => d.id === docId);
  const index = doc ? Math.min(step, doc.steps.length - 1) : 0;
  const current = doc?.steps[index];

  useEffect(() => {
    if (doc && current) actions.setLastStep(doc.id, index);
  }, [doc, current, index]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  if (!ready) return <Shell>{null}</Shell>;
  if (!doc || !current) return <MissingDoc />;

  const p = getProgress(progress, doc.id);
  const done = doc.steps.filter((s) => p.completed[s.id]).length;
  const pct = Math.round((done / doc.steps.length) * 100);
  const isDone = !!p.completed[current.id];

  const go = (i: number) =>
    navigate({ to: "/guide/$docId", params: { docId: doc.id }, search: { step: i } });

  return (
    <Shell>
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <Link to="/" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            ← Dashboard
          </Link>
          <h2 className="mt-3 text-sm font-semibold leading-snug">{doc.title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{doc.category}</p>
          <div className="mt-3">
            <ProgressBar pct={pct} />
            <p className="mt-1.5 text-xs text-muted-foreground">
              {done}/{doc.steps.length} steps
            </p>
          </div>
          <nav className="mt-5 max-h-[55vh] space-y-0.5 overflow-y-auto pr-1">
            {doc.steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                className={`flex w-full items-start gap-2 rounded-md py-1.5 pr-2 text-left text-xs leading-snug transition-colors ${
                  i === index ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ paddingLeft: `${0.5 + (s.level - 1) * 0.6}rem` }}
              >
                <span
                  className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                    p.completed[s.id] ? "bg-success" : i === index ? "bg-primary" : "bg-border-strong"
                  }`}
                />
                <span className="truncate">{s.title}</span>
              </button>
            ))}
          </nav>
          <button
            onClick={() => {
              if (confirm("Reset progress and notes for this guide?")) actions.resetDoc(doc.id);
            }}
            className="mt-5 text-xs text-muted-foreground transition-colors hover:text-destructive"
          >
            Reset progress
          </button>
        </aside>

        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>
              Step {index + 1} of {doc.steps.length}
            </span>
            {current.path.length > 0 && <span>· {current.path.join(" › ")}</span>}
          </div>
          <h1 className="mt-2 text-2xl font-semibold leading-tight tracking-tight">{current.title}</h1>

          <article
            className="doc-prose mt-6 max-w-[68ch]"
            dangerouslySetInnerHTML={{ __html: current.html || "<p>No extra detail in this section.</p>" }}
          />

          <RelatedTroubleshooting docs={docs} doc={doc} step={current} />

          <section className="mt-8 max-w-[68ch]">
            <label htmlFor="note" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Your notes for this step
            </label>
            <textarea
              id="note"
              value={p.notes[current.id] ?? ""}
              onChange={(e) => actions.setNote(doc.id, current.id, e.target.value)}
              rows={4}
              placeholder="What you changed, what to check later…"
              className="mt-2 w-full resize-y rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
            />
          </section>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-5">
            <button
              disabled={index === 0}
              onClick={() => go(index - 1)}
              className="rounded-md border border-border px-3.5 py-2 text-sm transition-colors hover:bg-secondary disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={() => actions.toggleStep(doc.id, current.id)}
              className={`rounded-md border px-3.5 py-2 text-sm transition-colors ${
                isDone
                  ? "border-success text-success"
                  : "border-border hover:bg-secondary"
              }`}
            >
              {isDone ? "✓ Done" : "Mark as done"}
            </button>
            {index < doc.steps.length - 1 ? (
              <button
                onClick={() => {
                  if (!isDone) actions.toggleStep(doc.id, current.id);
                  go(index + 1);
                }}
                className="ml-auto rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Next step
              </button>
            ) : (
              <Link
                to="/"
                onClick={() => {
                  if (!isDone) actions.toggleStep(doc.id, current.id);
                }}
                className="ml-auto rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Finish guide
              </Link>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
}

const STOP = new Set([
  "the","and","for","with","your","from","that","this","how","you","are","when","into","step","macos","mac","use","not","its","all","set","setup",
]);

function keywords(text: string) {
  return new Set(
    text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3 && !STOP.has(w)),
  );
}

function RelatedTroubleshooting({ docs, doc, step }: { docs: Doc[]; doc: Doc; step: Step }) {
  const related = useMemo(() => {
    const keys = keywords(`${step.title} ${step.path.join(" ")}`);
    if (!keys.size) return [];
    const out: { docId: string; docTitle: string; index: number; title: string; score: number }[] = [];
    for (const other of docs) {
      if (other.id === doc.id || !/troubleshoot/i.test(other.category)) continue;
      other.steps.forEach((s, i) => {
        const sk = keywords(s.title);
        let score = 0;
        sk.forEach((w) => {
          if (keys.has(w)) score++;
        });
        if (score > 0) out.push({ docId: other.id, docTitle: other.title, index: i, title: s.title, score });
      });
    }
    return out.sort((a, b) => b.score - a.score).slice(0, 3);
  }, [docs, doc.id, step]);

  if (!related.length) return null;

  return (
    <section className="mt-8 max-w-[68ch] rounded-lg border border-border bg-surface/60 p-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-violet">
        If something goes wrong here
      </h2>
      <ul className="mt-3 space-y-2">
        {related.map((r) => (
          <li key={`${r.docId}-${r.index}`}>
            <Link
              to="/guide/$docId"
              params={{ docId: r.docId }}
              search={{ step: r.index }}
              className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-violet"
            >
              {r.title}
            </Link>
            <span className="ml-2 text-xs text-muted-foreground">{r.docTitle}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MissingDoc() {
  return (
    <Shell>
      <div className="mx-auto max-w-md py-20 text-center">
        <h1 className="text-lg font-semibold">That guide isn't in this browser</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Guides live locally, so they need to be imported on each browser you use.
        </p>
        <Link
          to="/import"
          className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Go to import
        </Link>
      </div>
    </Shell>
  );
}
