import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/workbench/Shell";
import { getProgress, useWorkbench } from "@/lib/workbench/store";

export const Route = createFileRoute("/read/$docId")({
  head: () => ({
    meta: [
      { title: "Reference mode — Mac Setup Workbench" },
      {
        name: "description",
        content: "Read a full imported macOS guide end to end, with your notes and completed steps in place.",
      },
      { property: "og:title", content: "Reference mode — Mac Setup Workbench" },
      { property: "og:description", content: "The whole guide in one calm, readable page." },
    ],
  }),
  component: ReadPage,
});

function ReadPage() {
  const { docId } = Route.useParams();
  const { docs, progress, ready } = useWorkbench();
  const doc = docs.find((d) => d.id === docId);

  if (!ready) return <Shell>{null}</Shell>;
  if (!doc)
    return (
      <Shell>
        <div className="py-20 text-center text-sm text-muted-foreground">
          This guide isn't imported in this browser.{" "}
          <Link to="/import" className="text-primary underline underline-offset-4">
            Import it
          </Link>
          .
        </div>
      </Shell>
    );

  const p = getProgress(progress, doc.id);

  return (
    <Shell>
      <div className="mx-auto max-w-[72ch]">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            ← Dashboard
          </Link>
          <Link
            to="/guide/$docId"
            params={{ docId: doc.id }}
            search={{ step: p.lastStepIndex }}
            className="rounded-md border border-border px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
          >
            Switch to guided mode
          </Link>
        </div>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight">{doc.title}</h1>
        <p className="mt-1 text-xs text-muted-foreground">
          {doc.category} · reference mode · {doc.steps.length} sections
        </p>

        <div className="mt-10 space-y-10">
          {doc.steps.map((s, i) => (
            <section key={s.id} id={s.id}>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-muted-foreground">{i + 1}</span>
                <h2
                  className="font-semibold leading-snug"
                  style={{ fontSize: `${Math.max(1, 1.45 - s.level * 0.12)}rem` }}
                >
                  {s.title}
                </h2>
                {p.completed[s.id] && <span className="text-xs text-success">done</span>}
              </div>
              <div className="doc-prose mt-2" dangerouslySetInnerHTML={{ __html: s.html }} />
              {p.notes[s.id] && (
                <p className="mt-3 whitespace-pre-wrap rounded-lg border-l-2 border-violet bg-surface/60 px-4 py-3 text-sm text-muted-foreground">
                  {p.notes[s.id]}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </Shell>
  );
}
