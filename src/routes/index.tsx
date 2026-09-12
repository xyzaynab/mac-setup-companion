import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, ProgressBar } from "@/components/workbench/Shell";
import { actions, completionOf, getProgress, useWorkbench } from "@/lib/workbench/store";
import { CATEGORIES } from "@/lib/workbench/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mac Setup Workbench — guided macOS setup, step by step" },
      {
        name: "description",
        content:
          "Turn your local HTML macOS manuals into a guided workflow: one step at a time, with notes, progress and resume — all stored in your browser.",
      },
      { property: "og:title", content: "Mac Setup Workbench — guided macOS setup, step by step" },
      {
        property: "og:description",
        content: "A calm, local-first workbench that walks you through your own macOS setup guides.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { docs, progress, ready } = useWorkbench();

  const allSteps = docs.reduce((n, d) => n + d.steps.length, 0);
  const allDone = docs.reduce((n, d) => n + completionOf(d, progress).done, 0);
  const overall = allSteps ? Math.round((allDone / allSteps) * 100) : 0;

  if (ready && docs.length === 0) return <EmptyState />;

  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your setup workbench</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {docs.length} guide{docs.length === 1 ? "" : "s"} · {allDone} of {allSteps} steps done
          </p>
        </div>
        <Link
          to="/import"
          className="rounded-md border border-border bg-surface px-3.5 py-2 text-sm transition-colors hover:bg-surface-raised"
        >
          Import guides
        </Link>
      </div>

      <div className="mt-5">
        <ProgressBar pct={overall} />
      </div>

      <div className="mt-10 space-y-10">
        {CATEGORIES.filter((c) => docs.some((d) => d.category === c)).map((category) => (
          <section key={category}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {category}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {docs
                .filter((d) => d.category === category)
                .map((doc) => {
                  const { done, total, pct } = completionOf(doc, progress);
                  const p = getProgress(progress, doc.id);
                  const resumeIndex = Math.min(p.lastStepIndex, Math.max(total - 1, 0));
                  const started = done > 0 || p.lastStepIndex > 0;
                  const sections = doc.steps.filter((s) => s.level <= 2).length;
                  return (
                    <article key={doc.id} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="text-base font-medium leading-snug">{doc.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {sections} section{sections === 1 ? "" : "s"} · {total} steps · {doc.fileName}
                      </p>
                      <div className="mt-4">
                        <ProgressBar pct={pct} tone={pct === 100 ? "violet" : "primary"} />
                        <p className="mt-2 text-xs text-muted-foreground">
                          {pct === 100 ? "Completed" : `${pct}% complete`}
                          {started && pct < 100 && ` · next: ${doc.steps[resumeIndex]?.title ?? "step 1"}`}
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <Link
                          to="/guide/$docId"
                          params={{ docId: doc.id }}
                          search={{ step: resumeIndex }}
                          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          {started ? "Resume" : "Start"}
                        </Link>
                        <Link
                          to="/read/$docId"
                          params={{ docId: doc.id }}
                          className="rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
                        >
                          Read mode
                        </Link>
                        <button
                          onClick={() => {
                            if (confirm(`Remove "${doc.title}" and its notes?`)) actions.removeDoc(doc.id);
                          }}
                          className="ml-auto text-xs text-muted-foreground transition-colors hover:text-destructive"
                        >
                          Remove
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}

function EmptyState() {
  return (
    <Shell>
      <div className="mx-auto max-w-xl py-16 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Nothing imported yet</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Bring in the macOS setup and troubleshooting guides saved on your Mac. They are parsed here in the
          browser into a step-by-step workflow — no upload, no account, no database.
        </p>
        <Link
          to="/import"
          className="mt-7 inline-block rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Import your first guide
        </Link>
      </div>
    </Shell>
  );
}
