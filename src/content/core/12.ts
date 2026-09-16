import type { Unit } from "@/lib/workbench/content-types";

export const chapter12: Unit = {
  id: "ch-12",
  source: "core",
  chapter: "12",
  title: "Choose a search supplement",
  phase: "Search repair",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Choose the search engine for the failure you actually have, then choose the interface that fits your workflow — in that order, not the reverse.",
        },
        {
          kind: "ul",
          items: [
            "Tool — Why add it / boundary",
            "Find Any File — Direct filesystem search for names and file properties, including external volumes, independent of the Spotlight index. Useful specifically when Spotlight misses a known file. PDF content search still depends on its optional Spotlight-backed results.",
            "EasyFind — Free, non-indexed search for names, tags, comments, and supported text content. Its content search does not decode PDFs or most modern Office formats.",
            "HoudahSpot — Detailed queries, metadata columns, content previews, and reusable search templates on top of the existing index. It depends on Spotlight indexing already having succeeded.",
            "Alfred — Keyboard-driven file access and a broader launcher/workflow platform. Its normal file search uses the macOS metadata index, same as Spotlight.",
            "Raycast v2 — Its own local filename index plus launcher actions. Optional content search uses Spotlight; coverage depends on Raycast's own scopes and ignore settings.",
            "DEVONthink — A separate document-management application with its own index, OCR pipeline, and full-text search across imported documents — not a Finder search supplement but a parallel filing system for material you deliberately import into it.",
            "Default Folder X — Enhances Save/Open dialogs system-wide with favorites, recent folders, and quick navigation. Solves a different problem than search: faster filing at the moment of saving, not retrieval after the fact.",
            "EagleFiler — A document and web-archive library tool similar in spirit to DEVONthink but lighter-weight; imports material into its own searchable library rather than searching your existing folder structure in place.",
          ],
        },
      ],
    },
    {
      id: "what-each-solves-and-what-it-does-not",
      type: "orient",
      title: "What each solves, and what it does not",
      body: [
        {
          kind: "p",
          text: "Find Any File and EasyFind solve the same core problem — a Spotlight-independent name and property search — at two different price points and two different content-search depths. HoudahSpot, Alfred, and Raycast all sit on top of the existing Spotlight index rather than replacing it, so none of them fixes a genuinely broken or incomplete index; they add interface convenience and richer query-building around an index that must already be healthy. DEVONthink and EagleFiler are a different category entirely: document libraries with their own OCR and indexing, useful if you want a dedicated archive separate from your ordinary Finder folders, not a supplement to Finder search. Default Folder X does not touch search at all — it speeds up the save/open moment, which is a filing problem, not a retrieval problem.",
        },
      ],
    },
    {
      id: "recommended-order",
      type: "orient",
      title: "Recommended order",
      body: [
        {
          kind: "p",
          text: "**First:** improve filenames, scopes, and local availability; repair a demonstrated native indexing fault using chapters 10–11. **Second:** add one independent fallback (Find Any File or EasyFind) if known files still disappear from indexed results after that repair. **Third:** add a richer query interface (HoudahSpot) or a keyboard launcher (Alfred or Raycast) only if comparing complex result sets, or fast keyboard-driven file access, is frequent, recurring work for you specifically.",
        },
        {
          kind: "p",
          text: "For this guide, Find Any File remains the modest paid fallback with explicit current-macOS support; EasyFind remains the free option, with a narrower content-search remit and no explicit compatibility statement verified in this research. Try your own test set (chapter 10) before relying on either for anything important.",
        },
        {
          kind: "p",
          text: 'HoudahSpot is useful when the question is "which PDFs match these words, these dates, and these locations?" repeatedly enough to justify a saved template. It is not the repair for absent Spotlight data — it will surface the same gap Spotlight has, just with a nicer interface around the gap. Choose Alfred or Raycast for the wider keyboard-driven workflow (app launching, calculations, clipboard, snippets) rather than installing either one solely to search files, which both macOS\'s own tools and the dedicated search apps above already do well.',
        },
        {
          kind: "note",
          text: "**KEY DISTINCTION —** Independent filename lookup (Find Any File, EasyFind) can recover a file's location without recovering searchable content. An offline-drive catalog feature (some of these tools can index a drive while it's disconnected) can remember that a file exists without making its actual bytes available until the drive is reconnected. Neither is a substitute for the other.",
        },
        {
          kind: "caution",
          text: "**LEAVE THIS FOR LATER —** Do not adopt more than one of these tools at once. Each adds its own settings, its own scope rules, and its own mental model to maintain. Trial one, decide, move on.",
        },
        {
          kind: "p",
          text: "Sources: Thomas Tempelmann, [Find Any File](https://www.tempel.org/FindAnyFile/); DEVONtechnologies, [EasyFind](https://www.devontechnologies.com/apps/freeware) and [content limits](https://www.devontechnologies.com/apps/freeware); Houdah Software, [HoudahSpot](https://www.houdah.com/houdahSpot/); Alfred, [index dependency](https://www.alfredapp.com/help/features/default-results/); Raycast, [v2 File Search](https://www.raycast.com/); DEVONtechnologies, [DEVONthink](https://www.devontechnologies.com/apps/devonthink); St. Clair Software, [Default Folder X](https://www.stclairsoft.com/DefaultFolderX/); C-Command, [EagleFiler](https://c-command.com/eaglefiler/). Other pages undated; checked September 6–8, 2026.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
