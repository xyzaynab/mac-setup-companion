import type { Unit } from "@/lib/workbench/content-types";

export const chapter11: Unit = {
  id: "ch-11",
  source: "core",
  chapter: "11",
  title: "Repair a bounded search problem",
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
          text: "Reindex the affected location after basic checks; avoid repeated whole-disk resets, which cost hours and rarely fix a problem the targeted steps above didn't already catch.",
        },
        {
          kind: "p",
          text: "Apple explains that Spotlight maintains a local index and updates it after setup, software changes, and data changes. A large initial or rebuild index may take hours, and Apple's own guidance notes it can extend further depending on the amount of data involved. Power, idle time, and an internet connection (for cloud data that needs downloading before it can be indexed) can all help it complete faster.",
        },
        {
          kind: "p",
          text: "For a stubborn problem affecting a known folder, use Apple's documented rebuild route: System Settings > Spotlight > Search Privacy; add the affected folder or disk to the exclusion list, wait a few seconds for that change to register, then remove that same entry. Close Settings and allow reindexing to proceed in the background. Start with the smallest location that demonstrates the problem — a single folder, not an entire drive — so you are not waiting on a full-disk rebuild to fix an issue confined to one place.",
        },
      ],
    },
    {
      id: "check-the-result-rather-than-restarting-again",
      type: "orient",
      title: "Check the result rather than restarting again",
      body: [
        {
          kind: "p",
          text: "Return to your known filename and phrase tests from chapter 10. If filename search starts working but scanned-content search still does not, another rebuild is unlikely to manufacture the missing OCR text — that is a different problem addressed in chapter 18, not an indexing problem at all. If only a third-party tool's search fails while Spotlight itself now works, inspect that tool's own coverage and settings before rebuilding Spotlight's index again on the theory that the app must be reading stale data.",
        },
        {
          kind: "p",
          text: "An ownership or permissions error needs diagnosis at the affected location specifically — check Get Info's Sharing & Permissions section for the folder in question. Do not recursively change ownership of your entire home folder or system directories as a generic search fix; that is a disproportionate and risky action for what is usually a narrowly scoped problem, and can create new permissions problems elsewhere. An unreadable file, a disconnected external drive, an unsupported content extractor, and a genuinely broken index are four different problems requiring four different interventions — matching the right fix to the actual observed symptom (chapter 10's table) avoids wasted effort.",
        },
      ],
    },
    {
      id: "optional-read-only-terminal-checks",
      type: "orient",
      title: "Optional read-only Terminal checks",
      requiredForProgress: false,
      body: [
        {
          kind: "p",
          text: "These native command-line tools can expose what Spotlight currently knows about a specific file, without changing anything:",
        },
        {
          kind: "p",
          text: 'mdutil -s /\nmdls -name kMDItemUserTags "/path/to/test.pdf"\nmdls -name kMDItemTextContent "/path/to/test.pdf"',
        },
        {
          kind: "p",
          text: "Replace the example path by dragging your actual test file into Terminal after the command's trailing space, which inserts its correct path automatically. `mdutil -s /` reports the indexing status of the startup volume; `mdls` with a specific attribute name reports whether that piece of metadata is currently present for that one file. A missing metadata value from `mdls` is a useful clue, not by itself a complete diagnosis — it tells you what the index currently holds, not why.",
        },
        {
          kind: "p",
          text: "A missing metadata value is a clue, not a complete diagnosis on its own. Use the local manual pages, `man mdutil` and `man mdls`, for the exact behavior of the commands as installed on your specific macOS version — command options can change slightly between releases. No index-erasing Terminal command (such as a full `mdutil -E` erase-and-rebuild) is necessary for a first repair attempt; reserve that more disruptive option for a confirmed, persistent failure that the folder-exclusion method above did not resolve.",
        },
        {
          kind: "caution",
          text: "**AUTOMATE THIS —** Do not schedule routine reindexing. Schedule a review of the inbox folder if that helps you catch problems early (chapter 33), and reserve index repair specifically for a demonstrated search failure. Rebuilding repeatedly can actually prolong the period of incomplete results, since a rebuild in progress is itself a temporary state where some content is not yet searchable.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Search troubleshooting](https://support.apple.com/en-us/102266); native macOS command manuals are the installed-version reference. Commands are illustrative and were not run on a Mac in this research.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
