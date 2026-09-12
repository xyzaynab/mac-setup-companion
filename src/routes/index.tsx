import { createFileRoute, Link } from "@tanstack/react-router";
import { ProgressBar, Shell, SourceBadge } from "@/components/workbench/Shell";
import { CORE, COMPANIONS, corePhases, getUnit, populatedUnits, unitLabel } from "@/lib/workbench/library";
import { START_HERE } from "@/content/companions";
import { nextStepIndex, unitStats, useProgress } from "@/lib/workbench/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mac Setup Companion — work the macOS manual, step by step" },
      {
        name: "description",
        content:
          "An execution layer over A Connected macOS Working Manual: one actionable step at a time, with notes and progress kept locally in your browser.",
      },
      { property: "og:title", content: "Mac Setup Companion — work the macOS manual, step by step" },
      {
        property: "og:description",
        content: "Continue setup where you left off: core manual chapters 00–40 plus focused companions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const p = useProgress();
  const resumeUnit = (p.last && getUnit(p.last.unitId)) || START_HERE;
  const resumeStep = p.last?.unitId === resumeUnit.id ? p.last.step : nextStepIndex(resumeUnit, p);
  const current = resumeUnit.steps[Math.min(resumeStep, Math.max(resumeUnit.steps.length - 1, 0))];

  const loaded = populatedUnits();
  const totalSteps = loaded.reduce((n, u) => n + u.steps.length, 0);
  const doneSteps = loaded.reduce((n, u) => n + unitStats(u, p).done, 0);
  const overall = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;

  return (
    <Shell>
      <section className="max-w-[70ch]">
        <h1 className="text-[19px] font-semibold tracking-tight">Continue setup</h1>
        <div className="mt-3 border border-border bg-surface px-5 py-4">
          <SourceBadge source={resumeUnit.source} />
          <p className="mt-2.5 text-[13px] text-muted-foreground">{unitLabel(resumeUnit)}</p>
          <p className="mt-1 text-base font-medium leading-snug">
            {current ? current.title : "Source content to be loaded"}
          </p>
          {current?.lead && <p className="mt-1 text-[13px] text-muted-foreground">{current.lead}</p>}
          <div className="mt-4 flex items-center gap-3">
            <Link
              to="/learn/$unitId"
              params={{ unitId: resumeUnit.id }}
              search={{ step: resumeStep }}
              className="bg-primary px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {p.last ? "Continue" : "Begin"}
            </Link>
            <Link to="/reference" className="text-[13px] text-muted-foreground hover:text-foreground">
              Reference mode
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <ProgressBar pct={overall} />
          <p className="mt-1.5 text-[12px] text-muted-foreground">
            {doneSteps} of {totalSteps} loaded steps complete · {CORE.filter((u) => u.status === "populated").length}{" "}
            of {CORE.length} core chapters have source text
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Companions
        </h2>
        <div className="mt-3 divide-y divide-border border-y border-border">
          {[START_HERE, ...COMPANIONS].map((u) => {
            const s = unitStats(u, p);
            return (
              <Link
                key={u.id}
                to="/learn/$unitId"
                params={{ unitId: u.id }}
                className="flex items-baseline gap-3 px-1 py-2.5 text-[13px] hover:bg-secondary"
              >
                <span className="min-w-0 flex-1 truncate">{u.title}</span>
                <span className="text-[11px] text-muted-foreground">
                  {u.status === "pending" ? "source pending" : `${s.done}/${s.total}`}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Core Manual 00–40
        </h2>
        <div className="mt-3 space-y-6">
          {corePhases().map((g) => (
            <div key={g.phase}>
              <p className="text-[12px] text-muted-foreground">{g.phase}</p>
              <div className="mt-1.5 divide-y divide-border border-y border-border">
                {g.units.map((u) => {
                  const s = unitStats(u, p);
                  return (
                    <Link
                      key={u.id}
                      to="/learn/$unitId"
                      params={{ unitId: u.id }}
                      className="flex items-baseline gap-3 px-1 py-2 text-[13px] hover:bg-secondary"
                    >
                      <span className="w-6 shrink-0 tabular-nums text-muted-foreground">{u.chapter}</span>
                      <span className="min-w-0 flex-1 truncate">{u.title}</span>
                      <span className="text-[11px] text-muted-foreground">
                        {u.status === "pending" ? "source pending" : `${s.done}/${s.total}`}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
