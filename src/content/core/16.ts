import type { Unit } from "@/lib/workbench/content-types";

export const chapter16: Unit = {
  id: "ch-16",
  source: "core",
  chapter: "16",
  title: "Hazel — when rules become substantial",
  phase: "Files in motion",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Add a file-rule engine when its inspection and maintenance tools save more recurring work than they cost to configure — not before.",
        },
        {
          kind: "p",
          text: "Hazel can evaluate names, tags, dates, content, and other attributes, then rename, tag, move, or invoke other automation as a consequence. Rules normally use the first match in order, and actions inside a matched rule run in the order you list them. Files are revisited on a schedule Hazel controls, so an age condition can become true later without you doing anything — a rule that says \"older than 14 days\" will correctly catch a file today that didn't match yesterday. Recursion into subfolders is explicit, not automatic — a rule watching a folder does not, by default, also watch that folder's subfolders unless you turn that on.",
        },
      ],
    },
    {
      id: "a-proposed-downloads-rule-order",
      type: "orient",
      title: "A proposed Downloads rule order",
      body: [
        {
          kind: "ul",
          items: [
            "Order — Rule and result",
            "1 — Keep here tag or folder: ignore. Preserve deliberate exceptions before any other rule gets a chance to act.",
            "2 — A verified receipt source/name/content combination: rename, add a semantic tag, move to Receipts.",
            "3 — A known screenshot naming pattern plus image type: move to Screenshots.",
            "4 — Older than your chosen review interval and not recently modified: move to Review Downloads.",
          ],
        },
        {
          kind: "p",
          text: 'Use 14 days only as an initial review interval you can change once you see how it fits your actual habits. In Move options, choose renaming on collision to preserve both files rather than silently overwriting one. Begin with copied test items and use Hazel\'s rule preview before enabling live runs. A rule matching the word "Total" alone, intending to catch financial documents, is too broad to justify automatically applying a financial classification — plenty of unrelated documents contain that word.',
        },
      ],
    },
    {
      id: "ocr-recovery-and-cost",
      type: "orient",
      title: "OCR, recovery, and cost",
      body: [
        {
          kind: "p",
          text: "Hazel can recognize text in images and PDFs for matching purposes, but it does not save that recognized text back into the file. Successful routing by Hazel therefore does not by itself prove the file gained Spotlight-searchable content — that is a separate step, covered in chapter 18. Hazel's Revert feature can reverse supported changes such as moves and renames; it cannot undo every downstream consequence — a script it triggered, an upload, a copy operation, or an import into another app are all outside what Revert can walk back.",
        },
        {
          kind: "p",
          text: "Hazel 6 is listed at a single-user, non-subscription license price on the developer's own site; check that current listing directly rather than treating a guide's quoted number as current, since software pricing changes without notice. The trial period is 14 days. Current release notes require macOS 13 or later; an older installation page states 12 as the minimum, so follow the newer release's stated requirement when in doubt about compatibility with your installed macOS version.",
        },
        {
          kind: "note",
          text: "**DECISION —** Use native Shortcuts (chapter 15) for a few clear triggers you can enumerate on one hand. Consider Hazel for many interacting rules, repeated content classification, time-based reevaluation of files that weren't relevant yesterday, and rule-oriented troubleshooting tools (a rule log, a dry-run preview) that Shortcuts does not natively provide. It is optional on Tahoe — nothing in this manual's core recommendations requires it.",
        },
        {
          kind: "p",
          text: "Sources: Noodlesoft, [Rule logic](https://www.noodlesoft.com/manual/hazel/rules/), [attributes](https://www.noodlesoft.com/manual/hazel/rules/conditions/), [actions](https://www.noodlesoft.com/manual/hazel/rules/actions/); [OCR attributes](https://www.noodlesoft.com/manual/hazel/rules/conditions/#ocr), [Revert limits](https://www.noodlesoft.com/manual/hazel/), [Hazel 6 FAQ](https://www.noodlesoft.com/), [trial](https://www.noodlesoft.com/), and [release notes](https://www.noodlesoft.com/hazel/release-notes/), February 18, 2026 entry. Other pages undated; checked September 6, 2026. Rule policy is a recommendation.",
        },
      ],
    },
  ],
  companions: ["downloads-flow"],
};
