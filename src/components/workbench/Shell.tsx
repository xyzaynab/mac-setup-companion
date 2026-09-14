import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { COMPANIONS, coreSummary, corePhases, unitLabel } from "@/lib/workbench/library";
import { SOURCE_LABEL, type SourceKind, type Unit } from "@/lib/workbench/content-types";
import { START_HERE } from "@/content/companions";
import { stepKey, unitStats, useProgress } from "@/lib/workbench/progress";

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background">
        <div className="flex h-11 items-center gap-3 px-4">
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded border border-border px-2 py-1 text-xs text-muted-foreground hover:text-foreground lg:hidden"
            aria-label="Toggle navigator"
          >
            Menu
          </button>
          <Link to="/" className="text-[13px] font-semibold tracking-tight">
            Mac Setup Companion
          </Link>
          <span className="hidden text-xs text-muted-foreground sm:block">
            MacBook Air: A Connected macOS Working Manual
          </span>
          <span className="ml-auto text-[11px] text-muted-foreground">Local only — no account</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <Navigator open={open} onNavigate={() => setOpen(false)} />
        <main className="min-w-0 flex-1 px-5 py-7 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

function Navigator({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const p = useProgress();
  const core = coreSummary(p);
  return (
    <aside
      className={`${
        open ? "block" : "hidden"
      } w-full shrink-0 border-b border-border px-3 py-4 text-[13px] lg:sticky lg:top-11 lg:block lg:h-[calc(100vh-2.75rem)] lg:w-64 lg:overflow-y-auto lg:border-b-0 lg:border-r`}
    >
      <NavGroup label={`Core Manual 00–40`}>
        {corePhases().map((g) => (
          <Phase key={g.phase} phase={g.phase} units={g.units} onNavigate={onNavigate} />
        ))}
      </NavGroup>

      <NavGroup label="Quick Start / Companions">
        <UnitLink unit={START_HERE} onNavigate={onNavigate} />
        {COMPANIONS.map((u) => (
          <UnitLink key={u.id} unit={u} onNavigate={onNavigate} />
        ))}
      </NavGroup>

      <NavGroup label="Reference">
        <NavItem to="/reference" onNavigate={onNavigate}>
          All source material
        </NavItem>
        <NavItem to="/import" onNavigate={onNavigate}>
          Import HTML source
        </NavItem>
      </NavGroup>

      <p className="mt-6 px-2 text-[11px] leading-relaxed text-muted-foreground">
        Core: {core.done} of {core.total} required steps · {core.chaptersWithSource} of {core.chapterCount} chapters loaded
      </p>

    </aside>
  );
}

function NavGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-5">
      <p className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <div className="space-y-px">{children}</div>
    </div>
  );
}

function Phase({ phase, units, onNavigate }: { phase: string; units: Unit[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-[12px] text-muted-foreground hover:bg-secondary hover:text-foreground"
      >
        <span className="w-2 text-[9px]">{open ? "▾" : "▸"}</span>
        <span className="truncate">{phase}</span>
        <span className="ml-auto text-[10px] tabular-nums">
          {units[0]?.chapter}–{units[units.length - 1]?.chapter}
        </span>
      </button>
      {open && (
        <div className="mb-1 ml-3 border-l border-border pl-1">
          {units.map((u) => (
            <UnitLink key={u.id} unit={u} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

function UnitLink({ unit, onNavigate }: { unit: Unit; onNavigate: () => void }) {
  const p = useProgress();
  const stats = unitStats(unit, p);
  return (
    <Link
      to="/learn/$unitId"
      params={{ unitId: unit.id }}
      onClick={onNavigate}
      className="flex items-start gap-2 rounded px-2 py-1 text-[12.5px] leading-snug text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "bg-secondary text-foreground" }}
    >
      <span
        className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full ${
          unit.status === "pending"
            ? "bg-border-strong"
            : stats.pct === 100
              ? "bg-success"
              : stats.done > 0
                ? "bg-primary"
                : "bg-border-strong"
        }`}
      />
      <span className="truncate">{unitLabel(unit)}</span>
    </Link>
  );
}

function NavItem({ to, children, onNavigate }: { to: string; children: ReactNode; onNavigate: () => void }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="block rounded px-2 py-1 text-[12.5px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "bg-secondary text-foreground" }}
    >
      {children}
    </Link>
  );
}

export function SourceBadge({ source }: { source: SourceKind }) {
  const tone =
    source === "core"
      ? "text-primary"
      : source === "supplemental" || source === "imported"
        ? "text-muted-foreground"
        : "text-violet";
  return (
    <span
      className={`inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] ${tone}`}
    >
      Source: {SOURCE_LABEL[source]}
    </span>
  );
}

export function ProgressBar({ pct, tone = "primary" }: { pct: number; tone?: "primary" | "violet" }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full transition-[width] duration-300 ${
          tone === "violet" ? "bg-violet" : "bg-primary"
        }`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function PendingNotice({ unit }: { unit: Unit }) {
  return (
    <div className="mt-6 max-w-[66ch] rounded border border-dashed border-border-strong px-4 py-5 text-sm text-muted-foreground">
      Source content to be loaded. This chapter keeps its exact title and position in the manual; its
      sections and steps will appear here once the source text for “{unit.title}” is added.
    </div>
  );
}

export function useStepState(unitId: string, stepId: string) {
  const p = useProgress();
  return p.steps[stepKey(unitId, stepId)];
}
