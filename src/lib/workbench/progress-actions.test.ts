import { describe, expect, it } from "vitest";
import {
  setStepState,
  visitPosition,
  type ProgressState,
} from "./progress";

const baseline = (): ProgressState => ({
  steps: { "ch-00::how-to-use": "done" },
  notes: { "ch-00::how-to-use": "keep this" },
  last: { unitId: "ch-00", step: 1 },
  lastCore: { unitId: "ch-00", step: 1 },
  ready: true,
});

describe("visitPosition", () => {
  it("preserves lastCore when visiting a companion", () => {
    const next = visitPosition(baseline(), "search-flow", 2);

    expect(next.last).toEqual({ unitId: "search-flow", step: 2 });
    expect(next.lastCore).toEqual({ unitId: "ch-00", step: 1 });
    expect(next.steps).toEqual({ "ch-00::how-to-use": "done" });
    expect(next.notes).toEqual({ "ch-00::how-to-use": "keep this" });
  });

  it("updates last and lastCore when visiting a core chapter", () => {
    const next = visitPosition(baseline(), "ch-03", 0);

    expect(next.last).toEqual({ unitId: "ch-03", step: 0 });
    expect(next.lastCore).toEqual({ unitId: "ch-03", step: 0 });
  });

  it("does not change completion when navigating", () => {
    const before = baseline();
    const next = visitPosition(before, "ch-01", 3);

    expect(next.steps).toEqual(before.steps);
  });
});

describe("setStepState", () => {
  it("changes only the explicitly selected completion", () => {
    const before = baseline();
    const next = setStepState(before, "ch-01", "four-questions", "done");

    expect(next.steps).toEqual({
      "ch-00::how-to-use": "done",
      "ch-01::four-questions": "done",
    });
    expect(next.last).toEqual(before.last);
    expect(next.lastCore).toEqual(before.lastCore);
    expect(next.notes).toEqual(before.notes);
  });
});
