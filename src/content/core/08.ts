import type { Unit } from "@/lib/workbench/content-types";

export const chapter08: Unit = {
  id: "ch-08",
  source: "core",
  chapter: "08",
  title: "Smart Folders — reusable views",
  phase: "Search and retrieval",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "A Smart Folder saves the question, not a second copy of the answer.",
        },
        {
          kind: "p",
          text: "Create one through Finder > File > New Smart Folder, build the criteria exactly as you would a Finder search (chapter 06 covers the mechanics), then Save and optionally add it to the sidebar. To revise it later, open it and choose Show Search Criteria from the action menu — this reopens the criteria-editing view rather than forcing you to rebuild the query from scratch. Matching results update automatically as the indexed files on disk change; you never manually refresh a Smart Folder.",
        },
        {
          kind: "p",
          text: "The saved search definition and the original files are two entirely separate things. Saving or backing up the `.savedSearch` definition file does not bundle the results it matches — moving that definition to another Mac only recreates the query, not the files it once matched there. Use a regular folder instead when you need a portable delivery package, a destination for incoming files, or a hierarchy an external app expects to find things in.",
        },
      ],
    },
    {
      id: "three-views-worth-testing",
      type: "orient",
      title: "Three views worth testing",
      body: [
        {
          kind: "ul",
          items: [
            "Suggested view — Question it answers",
            "Review PDFs — Which PDFs carry Review across the locations I intentionally search?",
            "Recent project changes — Which project files changed within the last seven days?",
            "Large downloads — Which large files in Downloads are worth inspecting for storage use?",
          ],
        },
        {
          kind: "p",
          text: 'Build only the view you actually expect to open. "Recent" is a retrieval convenience, not a completeness guarantee — an unchanged file can still be important, and a Smart Folder scoped to recency will never surface it. A broad Review view may mix unrelated work from several projects together; narrow it by folder scope if that makes the resulting decisions easier rather than harder.',
        },
      ],
    },
    {
      id: "from-view-to-processing",
      type: "orient",
      title: "From view to processing",
      body: [
        {
          kind: "p",
          text: "A Smart Folder has no built-in \"when a result appears, move it\" behavior merely because it is saved — it is a live query, not a trigger. You can select its results and run a Quick Action manually. Hazel can monitor a Smart Folder as an additional automation layer, but that layer may affect files in many different original locations at once, since a Smart Folder's results can span your whole Mac; Hazel's Smart Folder monitoring also cannot descend into subfolders or use subfile matching the way its native folder-watching can.",
        },
        {
          kind: "p",
          text: 'Start automation on a real folder first (chapter 15). Once the rule\'s behavior is understood and trusted, a saved search can become a deliberate cross-folder collection point for a later, more advanced rule. Do not watch the underlying `.savedSearch` file itself and expect a generic file-change trigger to mean "the query has a new result" — the definition file rarely changes even as the results it matches change constantly.',
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Tags define a queue; a Smart Folder displays it; a Quick Action processes the selection. A separate trigger (chapter 33) is required for genuinely unattended work — nothing here runs itself without one.",
        },
        {
          kind: "note",
          text: "**LEAVE THIS FOR LATER —** Nested Smart Folders (a Smart Folder whose scope is another Smart Folder) are technically possible in some configurations but add a layer of indirection that is rarely worth the confusion. Skip this until a specific recurring need justifies it.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Create or change a Smart Folder](https://support.apple.com/guide/mac-help/find-items-with-smart-folders-mchlp1122/mac). Undated; accessed September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
