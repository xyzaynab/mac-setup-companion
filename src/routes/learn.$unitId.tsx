import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Blocks } from "@/components/workbench/Blocks";
import { PendingNotice, ProgressBar, Shell, SourceBadge } from "@/components/workbench/Shell";
import { companionsFor, getUnit, nextCoreUnit, unitLabel } from "@/lib/workbench/library";
import { STEP_TYPE_LABEL, isRequiredStep } from "@/lib/workbench/content-types";
import { nextStepIndex, progressActions, stepKey, unitStats, useProgress } from "@/lib/workbench/progress";

export const Route = createFileRoute("/learn/$unitId")({
  validateSearch: (search: Record<string, unknown>) => ({
    step: Math.max(0, Number(search["step"]) || 0),
  }),
  head: () => ({
    meta: [
      { title: "Focus mode — Mac Setup Companion" },
      {
        name: "description",
        content: "One actionable macOS step at a time, with notes, completion state and troubleshooting help.",
      },
      { property: "og:title", content: "Focus mode — Mac Setup Companion" },
      { property: "og:description", content: "Work the macOS manual one step at a time." },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  const { unitId } = Route.useParams();
  const { step } = Route.useSearch();
  const navigate = useNavigate();
  const p = useProgress();
  const [help, setHelp] = useState(false);

  const unit = getUnit(unitId);
  const index = unit ? Math.min(step, Math.max(unit.steps.length - 1, 0)) : 0;
  const current = unit?.steps[index];

  useEffect(() => {
    if (unit && current) progressActions.setLast(unit.id, index);
  }, [unit, current, index]);

  if (!unit) {
    return (
      <Shell>
        <p className="text-sm text-muted-foreground">That section does not exist.</p>
        <Link to="/" className="mt-3 inline-block text-sm text-primary">
          Back to dashboard
        </Link>
      </Shell>
    );
  }

  const stats = unitStats(unit, p);
  const companions = companionsFor(unit);
  const go = (i: number) => navigate({ to: "/learn/$unitId", params: { unitId: unit.id }, search: { step: i } });

  if (!current) {
    return (
      <Shell>
        <Header unit={unit} />
        <PendingNotice unit={unit} />
        <Companions units={companions} />
      </Shell>
    );
  }

  const nextUnit = nextCoreUnit(unit);
  const key = stepKey(unit.id, current.id);
  const stepState = p.steps[key];
  const note = p.notes[key] ?? "";

  return (
    <Shell>
      <Header unit={unit} />

      <div className="mt-4 max-w-[66ch]">
        <ProgressBar pct={stats.pct} />
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          Step {index + 1} of {unit.steps.length} · {stats.done} done
          {stats.skipped > 0 ? ` · ${stats.skipped} skipped` : ""}
        </p>
      </div>

      <div className="mt-7 grid gap-8 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {current.type ? STEP_TYPE_LABEL[current.type] : "Step"}
            {!isRequiredStep(current) && <span className="ml-2 font-normal normal-case tracking-normal italic">optional reference — not counted in progress</span>}
          </p>
          <h2 className="mt-1.5 text-[20px] font-semibold leading-snug tracking-tight">{current.title}</h2>
          {current.lead && <p className="mt-1 text-[13px] text-muted-foreground">{current.lead}</p>}
          <div className="mt-4">
            <Blocks blocks={current.body} />
          </div>

          <div className="mt-7 max-w-[66ch]">
            <label htmlFor="note" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Notes for this step <span className="font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              id="note"
              rows={3}
              value={note}
              onChange={(e) => progressActions.setNote(unit.id, current.id, e.target.value)}
              placeholder="Only if useful: a convention you settled, an unexpected result, a setting you changed, something to revisit."
              className="mt-2 w-full resize-y border border-border bg-input px-3 py-2 text-[13px] leading-relaxed outline-none focus:border-ring"
            />
          </div>

          <div className="mt-6 flex max-w-[66ch] flex-wrap items-center gap-2 border-t border-border pt-4">
            <button
              disabled={index === 0}
              onClick={() => go(index - 1)}
              className="border border-border px-3 py-1.5 text-[13px] hover:bg-secondary disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={() => progressActions.toggleDone(unit.id, current.id)}
              className={`border px-3 py-1.5 text-[13px] ${
                stepState === "done" ? "border-success text-success" : "border-border hover:bg-secondary"
              }`}
            >
              {stepState === "done" ? "Completed" : "Mark complete"}
            </button>
            <button
              onClick={() => {
                progressActions.setStep(unit.id, current.id, stepState === "skipped" ? null : "skipped");
                if (index < unit.steps.length - 1) go(index + 1);
              }}
              className="border border-border px-3 py-1.5 text-[13px] text-muted-foreground hover:bg-secondary"
            >
              Skip for now
            </button>
            <button
              onClick={() => setHelp((h) => !h)}
              className="border border-border px-3 py-1.5 text-[13px] text-violet hover:bg-secondary"
            >
              I need help
            </button>
            {index < unit.steps.length - 1 ? (
              <button
                onClick={() => go(index + 1)}
                className="ml-auto bg-primary px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground hover:opacity-90"
              >
                Next
              </button>
            ) : nextUnit ? (
              <Link
                to="/learn/$unitId"
                params={{ unitId: nextUnit.id }}
                search={{ step: 0 }}
                className="ml-auto bg-primary px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground hover:opacity-90"
              >
                Continue to Chapter {nextUnit.chapter}
              </Link>
            ) : (
              <Link
                to="/"
                className="ml-auto bg-primary px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground hover:opacity-90"
              >
                Finish section
              </Link>
            )}
          </div>

          {help && (
            <div className="mt-5 max-w-[66ch] border border-border bg-surface px-4 py-4">
              <p className="text-[12px] text-muted-foreground">
                Troubleshooting companions for this part of the manual:
              </p>
              <Companions units={companions.length ? companions : []} inline />
              {companions.length === 0 && (
                <p className="mt-2 text-[13px] text-muted-foreground">
                  No companion sheet is mapped to this chapter yet. Re-read the step, then record what actually
                  happened in your notes before changing anything else.
                </p>
              )}
            </div>
          )}
        </div>

        <nav className="hidden xl:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            In this section
          </p>
          <div className="mt-2 space-y-px">
            {unit.steps.map((s, i) => {
              const st = p.steps[stepKey(unit.id, s.id)];
              return (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  className={`flex w-full items-start gap-2 px-2 py-1 text-left text-[12px] leading-snug ${
                    i === index ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full ${
                      st === "done" ? "bg-success" : st === "skipped" ? "bg-violet" : "bg-border-strong"
                    }`}
                  />
                  <span className="truncate">
                    {s.title}
                    {!isRequiredStep(s) && <span className="text-muted-foreground italic"> · optional</span>}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              if (confirm(`Reset progress and notes for "${unit.title}"?`)) progressActions.resetUnit(unit.id);
            }}
            className="mt-4 px-2 text-[11px] text-muted-foreground hover:text-destructive"
          >
            Reset this section
          </button>
        </nav>
      </div>
    </Shell>
  );
}

function Header({ unit }: { unit: ReturnType<typeof getUnit> & object }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <SourceBadge source={unit.source} />
        {unit.phase && <span className="text-[11px] text-muted-foreground">{unit.phase}</span>}
      </div>
      <h1 className="mt-2 text-[15px] font-medium text-muted-foreground">{unitLabel(unit)}</h1>
      {unit.summary && <p className="mt-1 max-w-[66ch] text-[13px] text-muted-foreground">{unit.summary}</p>}
    </div>
  );
}

function Companions({ units, inline }: { units: ReturnType<typeof companionsFor>; inline?: boolean }) {
  const p = useProgress();
  if (!units.length) return null;
  return (
    <div className={inline ? "mt-3 space-y-1" : "mt-7 max-w-[66ch] space-y-1"}>
      {!inline && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet">Companion sheets</p>
      )}
      {units.map((u) => (
        <Link
          key={u.id}
          to="/learn/$unitId"
          params={{ unitId: u.id }}
          search={{ step: nextStepIndex(u, p) }}
          className="block border border-border px-3 py-2 text-[13px] hover:bg-secondary"
        >
          {u.title}
          {u.summary && <span className="mt-0.5 block text-[11px] text-muted-foreground">{u.summary}</span>}
        </Link>
      ))}
    </div>
  );
}
