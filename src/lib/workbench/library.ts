import { CORE_UNITS, PHASES } from "@/content/manual";
import { COMPANION_UNITS, START_HERE } from "@/content/companions";
import type { Unit } from "./content-types";

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

export function unitLabel(unit: Unit) {
  return unit.chapter ? `${unit.chapter}. ${unit.title}` : unit.title;
}
