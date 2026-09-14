import { useSyncExternalStore } from "react";
import { emptyProgress, type Doc, type DocProgress, type Progress } from "./types";

const DOCS_KEY = "msw.docs.v1";
const PROGRESS_KEY = "msw.progress.v1";

type State = { docs: Doc[]; progress: Progress; ready: boolean };

let state: State = { docs: [], progress: {}, ready: false };
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function hydrate() {
  if (state.ready || typeof window === "undefined") return;
  state = {
    docs: read<Doc[]>(DOCS_KEY, []),
    progress: read<Progress>(PROGRESS_KEY, {}),
    ready: true,
  };
  emit();
}

function persist() {
  try {
    localStorage.setItem(DOCS_KEY, JSON.stringify(state.docs));
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress));
  } catch {
    /* storage full or unavailable */
  }
}

function set(next: Partial<State>) {
  state = { ...state, ...next };
  persist();
  emit();
}

const subscribe = (l: () => void) => {
  hydrate();
  listeners.add(l);
  return () => listeners.delete(l);
};

const SERVER: State = { docs: [], progress: {}, ready: false };

export function useWorkbench(): State {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => SERVER,
  );
}

export const actions = {
  addDocs(docs: Doc[]) {
    set({ docs: [...state.docs, ...docs] });
  },
  removeDoc(id: string) {
    const progress = { ...state.progress };
    delete progress[id];
    set({ docs: state.docs.filter((d) => d.id !== id), progress });
  },
  update(docId: string, fn: (p: DocProgress) => DocProgress) {
    const current = state.progress[docId] ?? emptyProgress();
    set({ progress: { ...state.progress, [docId]: { ...fn(current), updatedAt: Date.now() } } });
  },
  toggleStep(docId: string, stepId: string) {
    actions.update(docId, (p) => {
      const completed = { ...p.completed };
      if (completed[stepId]) delete completed[stepId];
      else completed[stepId] = true;
      return { ...p, completed };
    });
  },
  setNote(docId: string, stepId: string, note: string) {
    actions.update(docId, (p) => ({ ...p, notes: { ...p.notes, [stepId]: note } }));
  },
  setLastStep(docId: string, index: number) {
    actions.update(docId, (p) => (p.lastStepIndex === index ? p : { ...p, lastStepIndex: index }));
  },
  resetDoc(docId: string) {
    set({ progress: { ...state.progress, [docId]: emptyProgress() } });
  },
};

export function getProgress(progress: Progress, docId: string): DocProgress {
  return progress[docId] ?? emptyProgress();
}

export function completionOf(doc: Doc, progress: Progress) {
  const p = getProgress(progress, doc.id);
  const done = doc.steps.filter((s) => p.completed[s.id]).length;
  return {
    done,
    total: doc.steps.length,
    pct: doc.steps.length ? Math.round((done / doc.steps.length) * 100) : 0,
  };
}
