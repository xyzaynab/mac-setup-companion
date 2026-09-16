import { describe, expect, it } from "vitest";
import { CORE_UNITS } from "./manual";
import { COMPANION_UNITS } from "./companions";

describe("protected core content", () => {
  it("keeps Chapters 00 through 02 and their steps in canonical order", () => {
    expect(
      CORE_UNITS.slice(0, 3).map((unit) => ({
        id: unit.id,
        chapter: unit.chapter,
        title: unit.title,
        stepIds: unit.steps.map((step) => step.id),
      })),
    ).toEqual([
      {
        id: "ch-00",
        chapter: "00",
        title: "How to use this manual — reading routes",
        stepIds: ["how-to-use", "minimal-base", "reading-routes"],
      },
      {
        id: "ch-01",
        chapter: "01",
        title: "The connected system",
        stepIds: ["four-questions", "one-file", "where-meaning-lives", "roles-distinct"],
      },
      {
        id: "ch-02",
        chapter: "02",
        title: "Finder as your work surface",
        stepIds: [
          "new-window-extensions",
          "path-status-bar",
          "sidebar",
          "views-by-job",
          "go-to-folder",
          "move-vs-copy",
          "batch-rename",
          "inspect-one-file",
          "downloads-by-kind",
          "quick-action-seam",
        ],
      },
    ]);
  });

  it("keeps the restored Chapter 01 receipt sequence verbatim", () => {
    const receipt = CORE_UNITS[1]!.steps.find((step) => step.id === "one-file")!;
    const ordered = receipt.body.find((block) => block.kind === "ol");

    expect(ordered).toEqual({
      kind: "ol",
      items: [
        "A receipt arrives as a PDF in Downloads.",
        "Inspect it with Space.",
        "Rename it with the seller and date.",
        "Move it to Receipts.",
        "A Review tag marks its temporary state.",
        "A saved search gathers Review-tagged PDFs across projects.",
        "Remove Review after checking it; the file stays in its permanent folder.",
        "Later, a selected-file Shortcut can prepare a copy for sharing.",
      ],
    });
  });

  it("keeps the original optional references excluded from progress", () => {
    expect(
      CORE_UNITS.slice(0, 3).flatMap((unit) =>
        unit.steps
          .filter((step) => step.requiredForProgress === false)
          .map((step) => `${unit.id}::${step.id}`),
      ),
    ).toEqual(["ch-00::reading-routes", "ch-02::batch-rename", "ch-02::quick-action-seam"]);
  });
});

describe("complete core manual", () => {
  it("contains all 41 populated chapters in canonical order", () => {
    expect(CORE_UNITS).toHaveLength(41);
    expect(CORE_UNITS.map((unit) => unit.chapter)).toEqual(
      Array.from({ length: 41 }, (_, index) => String(index).padStart(2, "0")),
    );
    expect(CORE_UNITS.every((unit) => unit.status === "populated")).toBe(true);
    expect(CORE_UNITS.every((unit) => unit.steps.length > 0)).toBe(true);
    expect(
      CORE_UNITS.every((unit) => unit.steps.some((step) => step.requiredForProgress !== false)),
    ).toBe(true);
  });

  it("uses unique unit ids and unique step ids within every chapter", () => {
    const unitIds = CORE_UNITS.map((unit) => unit.id);
    expect(new Set(unitIds).size).toBe(unitIds.length);

    for (const unit of CORE_UNITS) {
      const stepIds = unit.steps.map((step) => step.id);
      expect(new Set(stepIds).size, unit.id).toBe(stepIds.length);
    }
  });
});

describe("complete source library", () => {
  it("has no pending companion source", () => {
    expect(COMPANION_UNITS.filter((unit) => unit.status === "pending")).toEqual([]);
  });

  it("resolves every contextual companion id", () => {
    const ids = new Set(COMPANION_UNITS.map((unit) => unit.id));
    const unresolved = CORE_UNITS.flatMap((unit) =>
      (unit.companions ?? [])
        .filter((companionId) => !ids.has(companionId))
        .map((companionId) => `${unit.id}::${companionId}`),
    );

    expect(unresolved).toEqual([]);
  });
});
