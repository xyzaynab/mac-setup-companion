import { describe, expect, it } from "vitest";
import { isCoreUnitId, migrateProgress, unitStats, type ProgressState } from "./progress";
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

describe("optional reference steps", () => {
  const ch = (id: string) => CORE_UNITS.find((u) => u.id === id)!;

  it("marks only the approved steps optional", () => {
    const optional = CORE_UNITS.flatMap((u) =>
      u.steps.filter((s) => s.requiredForProgress === false).map((s) => `${u.id}::${s.id}`),
    );
    expect(optional.sort()).toEqual(["ch-00::reading-routes", "ch-02::batch-rename", "ch-02::quick-action-seam"]);
  });

  it("excludes optional steps from unit totals", () => {
    const c0 = ch("ch-00");
    expect(unitStats(c0, base()).total).toBe(c0.steps.length - 1);
  });

  it("shows a chapter complete when every required step is done", () => {
    const c0 = ch("ch-00");
    const steps: Record<string, "done"> = {};
    for (const s of c0.steps) if (s.requiredForProgress !== false) steps[`${c0.id}::${s.id}`] = "done";
    const stats = unitStats(c0, base({ steps }));
    expect(stats.complete).toBe(true);
    expect(stats.pct).toBe(100);
  });

  it("keeps optional completions out of the core percentage", () => {
    const withOptional = base({ steps: { "ch-00::reading-routes": "done", "ch-02::batch-rename": "done" } });
    expect(coreSummary(withOptional).done).toBe(0);
  });
});
