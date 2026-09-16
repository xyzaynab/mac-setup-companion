import type { Unit } from "@/lib/workbench/content-types";

export const chapter07: Unit = {
  id: "ch-07",
  source: "core",
  chapter: "07",
  title: "Spotlight — retrieval and action",
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
          text: "Use Spotlight for a quick answer; move to Finder when you need sustained inspection or a saved, reusable query.",
        },
        {
          kind: "p",
          text: "Open Spotlight with Command-Space. In Tahoe, Command-1 narrows results to apps and Command-2 to files. You can scope a search to a specific app or a specific iCloud Drive folder by typing its name and pressing Tab to lock that scope; typing `/PDF` narrows by kind. Hold Command on a selected file result to see its enclosing location without leaving Spotlight.",
        },
        {
          kind: "p",
          text: 'For actions, use the Actions browse mode or Command-3. Search for a supported action, inspect its required input type, and assign a quick key if you will repeat it often. A quick key is an abbreviation interpreted inside Spotlight\'s own text field, not necessarily a system-wide keyboard shortcut you can trigger from anywhere — that distinction matters if you expect it to work outside Spotlight. Tahoe can also pass selected content directly into a Shortcut launched from Spotlight, which is the fastest route from "I have this text selected" to "run my automation on it."',
        },
      ],
    },
    {
      id: "when-a-launcher-becomes-useful",
      type: "orient",
      title: "When a launcher becomes useful",
      body: [
        {
          kind: "p",
          text: "The gain is reduced context switching: locate a file, open a project, or invoke a known transformation without navigating back through an app's own interface. The cost is remembering vocabulary — what to type, and what input the action will expect. Prefer Finder when filenames are similar to each other or you need to compare several versions side by side; Spotlight's single-result-at-a-time interaction is a poor fit for comparison tasks.",
        },
        {
          kind: "p",
          text: "Tahoe includes clipboard history inside Spotlight. Enable Clipboard Search only if the convenience genuinely suits what you routinely copy, and inspect the current settings for how long history is retained and how to clear it — clipboard history is a temporary retrieval convenience, not a recordkeeping system, and treating it as one risks losing something you assumed was saved. Universal Clipboard, covered in chapter 22, transfers recently copied content between your own devices; it is a related but distinct capability from Spotlight's local clipboard history.",
        },
      ],
    },
    {
      id: "improve-the-question-before-changing-the-tool",
      type: "orient",
      title: "Improve the question before changing the tool",
      body: [
        {
          kind: "p",
          text: 'If "invoice" returns too much, specify PDF, project, seller, or date alongside it. If it returns nothing, first locate one known file directly in Finder and diagnose whether the gap is a filename problem or a content problem (chapter 09 has the full diagnostic sequence). A new launcher app may change interaction speed without changing which information is actually indexed — installing Raycast or Alfred does not, by itself, make an unindexed PDF searchable.',
        },
        {
          kind: "note",
          text: '**SHORTCUT POSSIBILITY —** Give a frequently used Shortcut a clear, verb-based name such as "Prepare selected images." Find it through Spotlight before adding another hotkey to memorize — a well-named Shortcut is itself a fast retrieval mechanism.',
        },
        {
          kind: "caution",
          text: "**LIMITATION —** Spotlight's Actions mode only surfaces actions an app has explicitly registered as available there. An app you use daily may simply not expose any Spotlight action, and that is not a bug to troubleshoot — check the app's own settings for an \"enable Spotlight integration\" toggle before assuming something is broken.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Spotlight settings](https://support.apple.com/guide/mac-help/spotlight-settings-mchlp1004/mac) and [file-result location](https://support.apple.com/guide/mac-help/use-spotlight-mchlp1008/mac). Undated, accessed September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
