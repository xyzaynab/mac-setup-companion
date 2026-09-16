import type { Unit } from "@/lib/workbench/content-types";

export const chapter38: Unit = {
  id: "ch-38",
  source: "core",
  chapter: "38",
  title: "Automation ideas, worked in full",
  phase: "Automation",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Every idea below states exactly what triggers it, exactly what it changes, what could realistically go wrong, a safe way to test it, and how to undo or recover from a mistake. None of them deletes a file without an explicit, separate review stage first — that's a deliberate, consistent policy throughout this manual, not an omission.",
        },
      ],
    },
    {
      id: "keep-downloads-organized-without-accidentally-deleting-a",
      type: "try",
      title: "Keep Downloads organized without accidentally deleting anything important",
      body: [
        {
          kind: "p",
          text: "**Trigger:** Folder arrival in Downloads, for a narrow, well-defined class of files (chapter 15). **Changes:** moves matching files to a named destination folder; nothing else. **Could go wrong:** a partially-downloaded file gets moved mid-transfer and becomes corrupted; an overly broad name-matching pattern catches an unrelated file it shouldn't have. **Safe test:** run against copies in a dedicated test inbox first (chapter 15's recipe), never against your real Downloads folder on the first attempt. **Undo:** keep the original filename unchanged during the move itself, so a simple manual move back is always sufficient to reverse it if needed.",
        },
      ],
    },
    {
      id: "keep-the-desktop-usable",
      type: "orient",
      title: "Keep the Desktop usable",
      body: [
        {
          kind: "p",
          text: "**Trigger:** manual Quick Action, or a Time of Day review (chapter 33) — deliberately not an unattended folder trigger, since the Desktop routinely holds files you're actively using in the moment. **Changes:** moves selected, chosen items to a dated review folder; nothing is deleted at this stage. **Could go wrong:** a file an open app currently depends on gets moved out from under that app mid-use. **Safe test:** select only files you're confident are already fully inactive; explicitly leave anything with a visibly open application window untouched. **Undo:** the dated review folder retains the original filenames, so manually moving items back is always simple and complete.",
        },
      ],
    },
    {
      id: "route-screenshots",
      type: "do",
      title: "Route screenshots",
      body: [
        {
          kind: "p",
          text: "**Trigger:** Folder arrival at the Desktop, filtered specifically to the standard screenshot filename pattern (chapter 17). **Changes:** moves matching files to a dedicated Screenshots folder. **Could go wrong:** a non-screenshot PNG that happens to share a similar name gets caught by an overly loose pattern. **Safe test:** verify against three known, real screenshots plus one deliberately similarly-named but unrelated file, and confirm only the actual screenshots are matched. **Undo:** files retain their original names throughout, so this is a simple manual move back if needed.",
        },
      ],
    },
    {
      id: "rename-files-consistently",
      type: "orient",
      title: "Rename files consistently",
      body: [
        {
          kind: "p",
          text: "**Trigger:** manual Quick Action (chapter 32), specifically not automatic — naming decisions generally benefit from an explicit human glance before being finalized. **Changes:** applies a consistent naming pattern to selected files. **Could go wrong:** a renamed file breaks another app or script that specifically depended on its old, original filename. **Safe test:** preview the exact proposed new names before committing to the actual rename, every single time. **Undo:** Finder's Rename command's own history, or a kept log of old-name-to-new-name mappings, supports manually reversing a rename if needed.",
        },
      ],
    },
    {
      id: "assign-tags-based-on-context",
      type: "orient",
      title: "Assign tags based on context",
      body: [
        {
          kind: "p",
          text: "**Trigger:** Hazel content or name matching (chapter 16), or a manual Shortcut (chapter 31). **Changes:** adds a named tag; does not, and should not, remove unrelated existing tags in the process. **Could go wrong:** an overly broad matching pattern applies a specific tag too liberally, to files it doesn't actually belong on. **Safe test:** run in preview/dry-run mode first, and inspect the specific matched set before enabling live tag application. **Undo:** manually remove the incorrectly applied tag from the small number of specific affected files.",
        },
      ],
    },
    {
      id: "convert-or-combine-pdfs",
      type: "orient",
      title: "Convert or combine PDFs",
      body: [
        {
          kind: "p",
          text: "**Trigger:** manual Quick Action or Shortcut (chapter 19, 31) — deliberately not automatic, since page order and final page count genuinely need a human check before the result is trusted. **Changes:** creates a new combined or converted file; the original source files are left untouched. **Could go wrong:** pages combine in an unintended order, or a resulting file becomes unexpectedly, unusably large. **Safe test:** verify the resulting page count and page order by actually opening and checking the output, every time, before deleting or discarding any of the originals. **Undo:** originals remain fully untouched throughout, so simply discard the new, incorrect output and try again.",
        },
      ],
    },
    {
      id: "extract-text-with-ocr",
      type: "orient",
      title: "Extract text with OCR",
      body: [
        {
          kind: "p",
          text: "**Trigger:** manual Quick Action (chapter 18) — review remains genuinely necessary here, since OCR output can contain real recognition errors. **Changes:** creates a companion text file; the original image or PDF is left untouched. **Could go wrong:** the recognized text contains meaningful errors (wrong dates, wrong names, wrong amounts) that go unnoticed and get relied upon anyway. **Safe test:** review the actual extracted text against the source image directly before saving or using it for anything downstream. **Undo:** delete the companion text file; the original source image or PDF was never modified in the first place.",
        },
      ],
    },
    {
      id: "move-files-after-review",
      type: "orient",
      title: "Move files after review",
      body: [
        {
          kind: "p",
          text: "**Trigger:** manual, following an explicit review step (chapters 14, 33) — by design, not automatic. **Changes:** relocates specifically reviewed files to their permanent home. **Could go wrong:** a file gets filed into the wrong project folder by mistake. **Safe test:** double-check the specific destination before confirming the move, every time. **Undo:** Finder's own Move to Trash and Put Back functions support reversing a recent, mistaken move quickly.",
        },
      ],
    },
    {
      id: "surface-files-that-still-require-action",
      type: "orient",
      title: "Surface files that still require action",
      body: [
        {
          kind: "p",
          text: "**Trigger:** Time of Day review (chapter 33), scoped specifically to your Review tag or a Review-scoped Smart Folder (chapter 08). **Changes:** displays a list or count; nothing is moved or altered by this step alone. **Could go wrong:** essentially nothing — this is read-only by design, and that's precisely the point of keeping it that way. **Safe test:** not strictly needed, given the read-only design, but confirm the count itself looks correct against what you'd expect before trusting it going forward. **Undo:** not applicable — no state changes as a result of this automation.",
        },
      ],
    },
    {
      id: "create-review-queues",
      type: "do",
      title: "Create review queues",
      body: [
        {
          kind: "p",
          text: "**Trigger:** as above, or a Folder-arrival trigger that explicitly adds newly arrived items to a tracked list rather than moving those items anywhere. **Changes:** builds or updates a list (a note, a saved search, a Smart Folder) — again, files are not relocated by this step. **Could go wrong:** the queue silently grows without ever actually being reviewed, quietly becoming useless. **Safe test:** check that new, known test items actually appear in the queue as expected. **Undo:** clear or reset the queue itself; the underlying files were never altered by this step regardless.",
        },
      ],
    },
    {
      id: "find-unusually-large-or-old-files",
      type: "orient",
      title: "Find unusually large or old files",
      body: [
        {
          kind: "p",
          text: "**Trigger:** manual Smart Folder (chapter 08), or a scheduled, read-only Time of Day report (chapter 33). **Changes:** displays a list only; nothing is deleted, moved, or otherwise altered by this step. **Could go wrong:** essentially nothing, again by the same read-only design as above. **Safe test:** verify the size or age threshold you've chosen actually returns a genuinely sensible, expected result on your real files before relying on the list. **Undo:** not applicable.",
        },
      ],
    },
    {
      id: "separate-temporary-intake-from-permanent-storage",
      type: "try",
      title: "Separate temporary intake from permanent storage",
      body: [
        {
          kind: "p",
          text: "**Trigger:** the structural choice described fully in chapter 14 — an inbox, a workspace, an action queue, and a permanent archive as four genuinely distinct locations. **Changes:** this is a structural, organizational decision more than a single triggered automation event. **Could go wrong:** the four roles gradually blur back together over time if the review habit that keeps them distinct is allowed to lapse. **Safe test:** the weekly review itself (chapter 14) is the ongoing test that keeps this structure actually working as intended. **Undo:** not applicable — this is an ongoing organizational practice, not a one-time, reversible action.",
        },
        {
          kind: "caution",
          text: "**LIMITATION —** None of these fourteen ideas, individually or combined, replaces an actual backup strategy (chapter 21). Automation that reliably organizes your files is not the same thing as automation that reliably protects them from loss.",
        },
        {
          kind: "p",
          text: "Sources: Component techniques are covered fully, with their own individual citations, in the specific chapters referenced above. This catalog itself is original synthesis for this edition.",
        },
      ],
    },
  ],
};
