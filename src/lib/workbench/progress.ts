import { useSyncExternalStore } from "react";
import { isRequiredStep, type Unit } from "./content-types";

const KEY = "msc.progress.v1";

export type StepState = "done" | "skipped";

export type Position = { unitId: string; step: number };

export type ProgressState = {
  steps: Record<string, StepState>;
  notes: Record<string, string>;
  /** Last visited unit of any kind. Kept for generic resume UI. */
  last: Position | null;
  /** Last visited CORE chapter step. Companions never touch this. */
  lastCore: Position | null;
  ready: boolean;
};

const EMPTY: ProgressState = { steps: {}, notes: {}, last: null, lastCore: null, ready: false };

let state: ProgressState = EMPTY;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const stepKey = (unitId: string, stepId: string) => `${unitId}::${stepId}`;

/** Core chapter unit ids are exactly `ch-NN`. */
export function isCoreUnitId(unitId: string | undefined | null): boolean {
  return !!unitId && /^ch-\d{2}$/.test(unitId);
}

/**
 * Migrate a persisted payload into the current shape without losing data.
 * If `lastCore` is absent but the legacy `last` points at a core chapter,
 * seed `lastCore` from it; otherwise leave it null.
 */
export function migrateProgress(parsed: Partial<ProgressState>): ProgressState {
  const last = parsed.last ?? null;
  const lastCore = parsed.lastCore ?? (last && isCoreUnitId(last.unitId) ? last : null);
  return {
    steps: parsed.steps ?? {},
    notes: parsed.notes ?? {},
    last,
    lastCore,
    ready: true,
  };
}

function hydrate() {
  if (state.ready || typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    state = migrateProgress(raw ? (JSON.parse(raw) as Partial<ProgressState>) : {});
  } catch {
    state = { ...EMPTY, ready: true };
  }
  emit();
}

function set(next: Partial<ProgressState>) {
  state = { ...state, ...next };
  try {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        steps: state.steps,
        notes: state.notes,
        last: state.last,
        lastCore: state.lastCore,
      }),
    );
  } catch {
    /* storage unavailable */
  }
  emit();
}

const subscribe = (l: () => void) => {
  hydrate();
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useProgress(): ProgressState {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => EMPTY,
  );
}

export const progressActions = {
  setStep(unitId: string, stepId: string, value: StepState | null) {
    const steps = { ...state.steps };
    const k = stepKey(unitId, stepId);
    if (value === null) delete steps[k];
    else steps[k] = value;
    set({ steps });
  },
  toggleDone(unitId: string, stepId: string) {
    const current = state.steps[stepKey(unitId, stepId)];
    progressActions.setStep(unitId, stepId, current === "done" ? null : "done");
  },
  setNote(unitId: string, stepId: string, note: string) {
    set({ notes: { ...state.notes, [stepKey(unitId, stepId)]: note } });
  },
  setLast(unitId: string, step: number) {
    const core = isCoreUnitId(unitId);
    const sameLast = state.last?.unitId === unitId && state.last.step === step;
    const sameCore = !core || (state.lastCore?.unitId === unitId && state.lastCore.step === step);
    if (sameLast && sameCore) return;
    set({
      last: { unitId, step },
      lastCore: core ? { unitId, step } : state.lastCore,
    });
  },
  resetUnit(unitId: string) {
    const steps = { ...state.steps };
    const notes = { ...state.notes };
    for (const k of Object.keys(steps)) if (k.startsWith(`${unitId}::`)) delete steps[k];
    for (const k of Object.keys(notes)) if (k.startsWith(`${unitId}::`)) delete notes[k];
    set({ steps, notes });
  },
};

/**
 * Progress counts required steps only. Optional reference steps keep their own
 * state but never create false incompletion.
 */
export function unitStats(unit: Unit, p: ProgressState) {
  const required = unit.steps.filter(isRequiredStep);
  const total = required.length;
  let done = 0;
  let skipped = 0;
  for (const s of required) {
    const v = p.steps[stepKey(unit.id, s.id)];
    if (v === "done") done++;
    else if (v === "skipped") skipped++;
  }
  return {
    total,
    done,
    skipped,
    pct: total ? Math.round((done / total) * 100) : 0,
    complete: total > 0 && done === total,
    optionalTotal: unit.steps.length - total,
  };
}

/** First step not yet done or skipped, else the last step. */
export function nextStepIndex(unit: Unit, p: ProgressState) {
  const i = unit.steps.findIndex((s) => !p.steps[stepKey(unit.id, s.id)]);
  return i === -1 ? Math.max(unit.steps.length - 1, 0) : i;
}
