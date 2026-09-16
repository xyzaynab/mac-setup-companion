import type { Unit } from "@/lib/workbench/content-types";

export const chapter03: Unit = {
  id: "ch-03",
  source: "core",
  chapter: "03",
  title: "Tags — configure the vocabulary",
  phase: "Tags",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "A tag's name carries its meaning. Color is an optional visual cue, not the meaning itself — this distinction is the single most common source of tag systems that decay into noise.",
        },
      ],
    },
    {
      id: "set-up-named-tags",
      type: "try",
      title: "Set up named tags",
      body: [
        {
          kind: "p",
          text: "Open Finder > Settings > Tags. Create a tag, edit its name, and choose a color or no color at all (a tag does not require a color to function). Select the sidebar checkbox for tags you want visible as one-click filters. Drag frequently used tags into Favorite Tags to expose them in the contextual menu; that area holds up to seven.",
        },
        {
          kind: "p",
          text: "Apply tags four ways: a file's contextual Tags submenu, the toolbar tag button (when shown in the toolbar), dragging a file directly onto a tag in the sidebar, or a supported app's Save dialog, which offers a Tags field alongside the filename at the moment of creation — the cheapest time to tag something, since you are already there. A file can carry several tags simultaneously; there is no limit that matters in practice. Apple documents Control-1 through Control-7 for toggling your seven favorite tags on the selected item, and Control-0 clears all tags from the selection. If a shortcut is intercepted by another system command (some Control-number combinations are claimed by Mission Control or input-source switching on certain configurations), use the contextual menu and check System Settings > Keyboard for conflicts before assuming the shortcut is broken.",
        },
      ],
    },
    {
      id: "creating-renaming-recoloring-hiding-and-deleting",
      type: "orient",
      title: "Creating, renaming, recoloring, hiding, and deleting",
      body: [
        {
          kind: "ul",
          items: [
            "**Create:** type a new name into the Tags field of any Save/Save As dialog, or add one directly in Finder > Settings > Tags.",
            "**Rename:** double-click the tag name in Settings > Tags, or in the sidebar. Renaming updates every file's tag everywhere at once — it is not a copy-and-relabel operation, and every file that carried the old name now carries the new one.",
            '**Recolor:** click the color swatch next to the tag in Settings > Tags and choose from the palette, or choose "None" for a colorless label.',
            "**Show/hide in sidebar:** the checkbox beside each tag in Settings > Tags. Hiding a tag from the sidebar does not remove it from any file — it only removes the one-click sidebar filter.",
            "**Delete a tag from your vocabulary:** select it in Settings > Tags and remove it. This un-tags every file that had it; it does not delete the files themselves. Removing a single tag from one specific file is different — do that from the file's own Tags contextual menu, leaving the vocabulary and every other file's tags untouched.",
          ],
        },
        {
          kind: "caution",
          text: '**LIMITATION —** Finder\'s Tags settings pane does not offer a "merge two tags into one" command. To consolidate two overlapping tags (say, `Receipt` and `Receipts`), find all files carrying the less-useful one via a Finder search, tag them with the one you are keeping, then delete the redundant tag from Settings.',
        },
      ],
    },
    {
      id: "a-starting-vocabulary-you-can-explain",
      type: "try",
      title: "A starting vocabulary you can explain",
      body: [
        {
          kind: "ul",
          items: [
            "Suggested tag — Meaning and visual cue",
            "Review — I want to inspect this again. Blue, if useful.",
            "Waiting — I am waiting for something outside this file. Purple.",
            "Reference — Useful across several projects. Gray or no color.",
            "Keep here — A deliberate exception to an automatic routing rule. No color needed.",
          ],
        },
        {
          kind: "p",
          text: 'These are examples, not required categories. Start with Review alone if that answers a recurring question. Before adding a tag, complete the sentence: "I will look for this tag when I want to…" If you cannot finish it, the tag may add work without improving retrieval.',
        },
        {
          kind: "p",
          text: "Use a short phrase instead of an unexplained color: Review tells you more than Blue. Several semantic tags may share a color; a palette is not a taxonomy. Conversely, you do not need seven tags simply because seven color slots exist — an empty color slot costs nothing, but an unused named tag is a small ongoing tax on every Tags menu you open.",
        },
        {
          kind: "note",
          text: "**AUTOMATE THIS —** Make Keep here an explicit exclusion in a filing rule. The rule should recognize that name, not infer your intent from a generic color. A label becomes useful when an actual search or action uses it — a tag nobody ever searches for or automates around is decoration.",
        },
        {
          kind: "note",
          text: "**TRY THIS NOW —** Tag one file Review right now from its contextual menu, then click the Review tag in the sidebar. You have just built the simplest possible saved view — the sidebar tag entry behaves like a live filter across your whole Mac.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Use tags to organize files](https://support.apple.com/guide/mac-help/use-tags-to-organize-files-mac-mchlp2409/mac). Undated, accessed September 6, 2026.",
        },
      ],
    },
  ],
};
