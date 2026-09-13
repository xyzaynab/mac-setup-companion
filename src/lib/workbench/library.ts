import { CORE_UNITS, PHASES } from "@/content/manual";
import { COMPANION_UNITS, START_HERE } from "@/content/companions";
import type { Unit } from "./content-types";
import { isCoreUnitId, unitStats, type ProgressState } from "./progress";

export const UNITS: Unit[] = [START_HERE, ...CORE_UNITS, ...COMPANION_UNITS.filter((u) => u.id !== START_HERE.id)];

export const CORE = CORE_UNITS;
export const COMPANIONS = COMPANION_UNITS.filter((u) => u.id !== START_HERE.id);

export function getUnit(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}

export function corePhases() {
  return PHASES.map((phase) => ({ phase, units: CORE.filter((u) => u.phase === phase) })).filter(
    (g) => g.units.length > 0,
  );
}

export function companionsFor(unit: Unit): Unit[] {
  return (unit.companions ?? []).map(getUnit).filter((u): u is Unit => !!u && u.id !== unit.id);
}

/** Units that actually have loaded source steps, in reading order. */
export function populatedUnits(): Unit[] {
  return UNITS.filter((u) => u.status === "populated" && u.steps.length > 0);
}

export function populatedCoreUnits(): Unit[] {
  return CORE.filter((u) => u.status === "populated" && u.steps.length > 0);
}

/** First core chapter — the entry point of the primary execution path. */
export const FIRST_CORE_UNIT = CORE[0]!;

/** The next core chapter in reading order, populated or pending. */
export function nextCoreUnit(unit: Unit): Unit | undefined {
  if (!isCoreUnitId(unit.id)) return undefined;
  const i = CORE.findIndex((u) => u.id === unit.id);
  if (i === -1) return undefined;
  return CORE[i + 1];
}

/** Core-only aggregate progress. Companion completions never count here. */
export function coreSummary(p: ProgressState) {
  const populated = populatedCoreUnits();
  let done = 0;
  let total = 0;
  for (const u of populated) {
    const s = unitStats(u, p);
    done += s.done;
    total += s.total;
  }
  return {
    done,
    total,
    pct: total ? Math.round((done / total) * 100) : 0,
    chaptersWithSource: populated.length,
    chapterCount: CORE.length,
  };
}

export function unitLabel(unit: Unit) {
  return unit.chapter ? `${unit.chapter}. ${unit.title}` : unit.title;
}
