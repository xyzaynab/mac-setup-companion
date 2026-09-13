import { describe, expect, it } from "vitest";
import { isCoreUnitId, migrateProgress, type ProgressState } from "./progress";
import { coreSummary, nextCoreUnit } from "./library";
import { CORE_UNITS } from "@/content/manual";

const base = (over: Partial<ProgressState> = {}): ProgressState => ({
  steps: {},
  notes: {},
  last: null,
  lastCore: null,
  ready: true,
  ...over,
});

describe("core unit ids", () => {
  it("recognises core chapter ids only", () => {
    expect(isCoreUnitId("ch-00")).toBe(true);
    expect(isCoreUnitId("ch-40")).toBe(true);
    expect(isCoreUnitId("start-here")).toBe(false);
    expect(isCoreUnitId("search-flow")).toBe(false);
  });
});

describe("migrateProgress", () => {
  it("seeds lastCore from a legacy core `last`", () => {
    const s = migrateProgress({ last: { unitId: "ch-02", step: 3 }, steps: { "ch-02::a": "done" } });
    expect(s.lastCore).toEqual({ unitId: "ch-02", step: 3 });
    expect(s.last).toEqual({ unitId: "ch-02", step: 3 });
    expect(s.steps["ch-02::a"]).toBe("done");
  });

  it("leaves lastCore null when legacy `last` is a companion", () => {
    const s = migrateProgress({ last: { unitId: "start-here", step: 1 } });
    expect(s.lastCore).toBeNull();
    expect(s.last).toEqual({ unitId: "start-here", step: 1 });
  });

  it("preserves an existing lastCore and existing notes", () => {
    const s = migrateProgress({
      last: { unitId: "start-here", step: 0 },
      lastCore: { unitId: "ch-01", step: 2 },
      notes: { "ch-01::x": "hello" },
    });
    expect(s.lastCore).toEqual({ unitId: "ch-01", step: 2 });
    expect(s.notes["ch-01::x"]).toBe("hello");
  });

  it("defaults to an empty, ready state", () => {
    const s = migrateProgress({});
    expect(s).toEqual(base());
  });
});

describe("coreSummary", () => {
  it("counts only populated core units, ignoring companion completions", () => {
    const populated = CORE_UNITS.filter((u) => u.status === "populated");
    const total = populated.reduce((n, u) => n + u.steps.length, 0);
    const first = populated[0]!;

    const withCompanionDone = base({
      steps: { "start-here::orient": "done", "search-flow::known-file": "done" },
    });
    expect(coreSummary(withCompanionDone)).toMatchObject({ done: 0, total, pct: 0 });

    const withCoreDone = base({
      steps: {
        "start-here::orient": "done",
        [`${first.id}::${first.steps[0]!.id}`]: "done",
      },
    });
    expect(coreSummary(withCoreDone).done).toBe(1);
    expect(coreSummary(withCoreDone).chaptersWithSource).toBe(populated.length);
  });
});

describe("nextCoreUnit", () => {
  it("walks the core chapters sequentially", () => {
    expect(nextCoreUnit(CORE_UNITS[0]!)?.id).toBe("ch-01");
    expect(nextCoreUnit(CORE_UNITS[1]!)?.id).toBe("ch-02");
    expect(nextCoreUnit(CORE_UNITS[2]!)?.id).toBe("ch-03");
  });

  it("returns undefined past the last chapter and for companions", () => {
    expect(nextCoreUnit(CORE_UNITS[CORE_UNITS.length - 1]!)).toBeUndefined();
    expect(nextCoreUnit({ id: "start-here", source: "start", title: "x", status: "populated", steps: [] })).toBeUndefined();
  });
});
