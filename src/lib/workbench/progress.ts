import { useSyncExternalStore } from "react";
import type { Unit } from "./content-types";

const KEY = "msc.progress.v1";

export type StepState = "done" | "skipped";

export type ProgressState = {
  steps: Record<string, StepState>;
  notes: Record<string, string>;
  last: { unitId: string; step: number } | null;
  ready: boolean;
};

const EMPTY: ProgressState = { steps: {}, notes: {}, last: null, ready: false };

let state: ProgressState = EMPTY;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const stepKey = (unitId: string, stepId: string) => `${unitId}::${stepId}`;

function hydrate() {
  if (state.ready || typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<ProgressState>) : {};
    state = {
      steps: parsed.steps ?? {},
      notes: parsed.notes ?? {},
      last: parsed.last ?? null,
      ready: true,
    };
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
      JSON.stringify({ steps: state.steps, notes: state.notes, last: state.last }),
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
    if (state.last?.unitId === unitId && state.last.step === step) return;
    set({ last: { unitId, step } });
  },
  resetUnit(unitId: string) {
    const steps = { ...state.steps };
    const notes = { ...state.notes };
    for (const k of Object.keys(steps)) if (k.startsWith(`${unitId}::`)) delete steps[k];
    for (const k of Object.keys(notes)) if (k.startsWith(`${unitId}::`)) delete notes[k];
    set({ steps, notes });
  },
};

export function unitStats(unit: Unit, p: ProgressState) {
  const total = unit.steps.length;
  let done = 0;
  let skipped = 0;
  for (const s of unit.steps) {
    const v = p.steps[stepKey(unit.id, s.id)];
    if (v === "done") done++;
    else if (v === "skipped") skipped++;
  }
  return { total, done, skipped, pct: total ? Math.round((done / total) * 100) : 0 };
}

/** First step not yet done or skipped, else the last step. */
export function nextStepIndex(unit: Unit, p: ProgressState) {
  const i = unit.steps.findIndex((s) => !p.steps[stepKey(unit.id, s.id)]);
  return i === -1 ? Math.max(unit.steps.length - 1, 0) : i;
}
