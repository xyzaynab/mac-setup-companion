import type { Unit } from "@/lib/workbench/content-types";

export const chapter06: Unit = {
  id: "ch-06",
  source: "core",
  chapter: "06",
  title: "Finder search — make the query visible",
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
          text: "Use Finder when you need a result set you can inspect and act on, rather than a single quick answer.",
        },
      ],
    },
    {
      id: "build-a-reproducible-search",
      type: "do",
      title: "Build a reproducible search",
      body: [
        {
          kind: "p",
          text: 'Open the intended folder, press Command-F, and check the scope shown above the results. Choose that folder or This Mac deliberately — a search in the wrong scope can look exactly like missing data, since Finder shows zero results either way. Add criteria with the `+` button; use "Other…" in the criteria dropdown to expose additional metadata attributes beyond the default few (file size, creation date, last opened date, and dozens more are available there).',
        },
        {
          kind: "p",
          text: 'Try **Kind is PDF** with **Name contains receipt**. If the filename is unknown, search contents using a distinctive phrase instead. A filename search and a contents search answer different questions — one asks "what is this file called," the other asks "what does this file say" — and an empty result from one does not mean the file does not exist; it means that particular question had no match.',
        },
        {
          kind: "p",
          text: 'Finder supports metadata queries and Boolean AND, OR, and NOT logic through its criteria rows (each added row narrows by default; the "Any/All" toggle above the results controls whether rows combine with AND or OR). For a complicated query, visible criteria rows are easier to debug than a long typed expression would be. Start with one positive condition, confirm a known match appears, then add each refinement separately so you can see exactly which row caused a match to disappear.',
        },
      ],
    },
    {
      id: "file-names-versus-file-contents-versus-metadata-three-di",
      type: "orient",
      title: "File names versus file contents versus metadata: three different searches",
      body: [
        {
          kind: "ul",
          items: [
            "You want to match on… — Use this criterion — What it will and won't find",
            "The filename itself — Name contains / begins with / ends with — Fast, exact on the name text; ignores what's inside the file entirely.",
            'Words inside the document — Contents (the default "search this Mac" text box) — Depends on the file having extracted, indexed text — see chapter 09.',
            'Descriptive attributes — Kind, Date, Size, Tags, and "Other" metadata fields — Structured facts about the file, not its content.',
          ],
        },
      ],
    },
    {
      id: "worked-example-reviewed-materials-for-a-project",
      type: "try",
      title: "Worked example: reviewed materials for a project",
      body: [
        {
          kind: "p",
          text: 'Start inside a project folder. Search for PDFs. Add the Review tag token to answer "Which project PDFs need checking?" Remove the project-folder restriction (broaden scope to This Mac) if you want the same queue across every project rather than one at a time. Add a recent-modification filter only if recency is actually part of the question you\'re asking — an older document that has not been touched in months can still genuinely need review, and a date filter will silently hide it.',
        },
        {
          kind: "p",
          text: 'Before saving the query, create two test files that should match and one that should not. If you accidentally require both "PDF" and "image" in the same row set to All, no file may satisfy the query — a useful check for exactly this kind of self-contradicting criteria. Decide explicitly whether your criteria mean all conditions must hold or any condition is sufficient; the toggle above the results controls this and is easy to overlook.',
        },
      ],
    },
    {
      id: "search-results-are-live-originals",
      type: "try",
      title: "Search results are live originals",
      body: [
        {
          kind: "p",
          text: 'Use Space to inspect matches and reveal their enclosing folders (Command-R, or the contextual "Show Original" if the item is itself a search result entry) before a bulk move. A query can collect unrelated projects together into one results list; batch actions taken on that list affect the selected source files themselves, not copies. Deleting a search result is not simply removing it from a temporary list — it deletes the actual file, wherever it lives.',
        },
        {
          kind: "note",
          text: "**AUTOMATE THIS —** Select the verified result set, then run a Quick Action on that selection. This keeps the search criteria visible and your processing scope deliberate. Save the query as a Smart Folder (chapter 08) when you will reuse it.",
        },
        {
          kind: "note",
          text: '**TRY THIS NOW —** In any folder, press Command-F, set the criterion to Kind is PDF, and look at the scope indicator above the results. Switch it between the folder and "This Mac" and watch the result count change — that\'s the exact mechanism behind most "why can\'t Finder find this" surprises.',
        },
        {
          kind: "p",
          text: "Sources: Apple, [Narrow Finder results](https://support.apple.com/guide/mac-help/narrow-a-search-in-the-finder-mchlp1157/mac). Undated; accessed September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
