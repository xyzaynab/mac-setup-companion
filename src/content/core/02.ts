import type { Unit } from "@/lib/workbench/content-types";

export const chapter02: Unit = {
  id: "ch-02",
  source: "core",
  chapter: "02",
  title: "Finder as your work surface",
  phase: "Foundations",
  status: "populated",
  steps: [
    {
      id: "new-window-extensions",
      type: "do",
      title: "Set Finder’s new-window location and show filename extensions",
      lead: "Configure Finder once instead of fighting its defaults each session.",
      body: [
        {
          kind: "p",
          text: "Open Finder → Settings.",
        },
        {
          kind: "ul",
          items: [
            "Choose a useful new-window location.",
            "Use your actual working folder rather than Recents.",
            "Show filename extensions.",
          ],
        },
        {
          kind: "verify",
          items: [
            "A newly opened Finder window begins in the location you selected.",
            "Filenames visibly show their extensions.",
          ],
        },
      ],
    },
    {
      id: "path-status-bar",
      type: "do",
      title: "Show the Path Bar and Status Bar",
      body: [
        {
          kind: "p",
          text: "Open Finder → View.",
        },
        {
          kind: "ul",
          items: ["Enable Path Bar.", "Enable Status Bar."],
        },
        {
          kind: "verify",
          items: [
            "The Path Bar shows the exact location of a file.",
            "The Status Bar shows item counts and free space.",
          ],
        },
      ],
    },
    {
      id: "sidebar",
      type: "do",
      title: "Pin the sidebar locations you actually use",
      body: [
        {
          kind: "ul",
          items: ["Pin the real inbox.", "Pin your current project folders."],
        },
        {
          kind: "p",
          text: "Removing a sidebar shortcut does not delete the files.",
        },
        {
          kind: "verify",
          items: [
            "Your chosen Downloads/inbox and current project folders are visible in the Finder sidebar.",
            "Those sidebar entries act as shortcuts that open the real folders.",
          ],
        },
      ],
    },
    {
      id: "views-by-job",
      type: "decision",
      title: "Choose folder views by job",
      lead: "Different views answer different questions; do not force one global view.",
      body: [
        {
          kind: "ul",
          items: [
            "List view (Command-2): dates, size, tags, and a sortable tag column.",
            "Column view (Command-3): hierarchy and ancestry.",
            "Gallery (Command-4): visually comparing captures.",
            "View → Show View Options: per-folder sorting and presentation.",
          ],
        },
      ],
    },
    {
      id: "go-to-folder",
      type: "try",
      title: "Practice Go to Folder",
      body: [
        {
          kind: "ol",
          items: [
            "Press Command-Shift-G.",
            "Type ~/Downloads.",
            "Press Command-Up to go to the parent folder.",
          ],
        },
        {
          kind: "p",
          text: "The ~ character means your home folder.",
        },
        {
          kind: "verify",
          items: [
            "You land in Downloads.",
            "Command-Up moves you one level up, to your home folder.",
          ],
        },
      ],
    },
    {
      id: "move-vs-copy",
      type: "try",
      title: "Practice move vs copy",
      body: [
        {
          kind: "ul",
          items: [
            "Command-C copies the file.",
            "Option-Command-V at the destination moves it.",
            "Command-V alone copies it.",
          ],
        },
        {
          kind: "caution",
          text: "While you are learning the difference, practise on a disposable file or a copy so a mistaken move costs nothing.",
        },
      ],
    },
    {
      id: "batch-rename",
      requiredForProgress: false,
      type: "reference",
      title: "Batch Rename",
      body: [
        {
          kind: "ul",
          items: ["Replace Text", "Add Text", "Format"],
        },
        {
          kind: "p",
          text: "Preview the result before committing, and test on copies first.",
        },
        {
          kind: "caution",
          text: "Do not rename media dependencies merely for tidiness because other apps or sites may depend on exact filenames.",
        },
      ],
    },
    {
      id: "inspect-one-file",
      type: "do",
      title: "Inspect one real file",
      body: [
        {
          kind: "ol",
          items: [
            "Select a file.",
            "Press Space.",
            "Decide whether it belongs here.",
            "Rename, tag, or move it as appropriate.",
            "Press Command-I only if you need more.",
          ],
        },
        {
          kind: "p",
          text: "Get Info can show the full path, exact size, creation date, modification date, and Spotlight comments.",
        },
        {
          kind: "caution",
          items: [
            "A Recent Items entry or a search result is another route to a file, not another stored copy.",
            "Deleting a Recent Items entry does not delete the file.",
            "Deleting a search result does delete the file.",
          ],
        },
      ],
    },
    {
      id: "downloads-by-kind",
      type: "try",
      title: "Inspect Downloads by Kind",
      body: [
        {
          kind: "p",
          text: "Open your Downloads folder, switch to List view, and click the Kind column header to sort. In under thirty seconds you can usually see which files are documents, which are disk images, and which are duplicates of an installer you already ran — a sort you cannot get from the Desktop’s icon grid.",
        },
      ],
    },
    {
      id: "quick-action-seam",
      requiredForProgress: false,
      type: "reference",
      title: "Know the Quick Action seam",
      lead: "Where Finder work hands off to automation — later, not now.",
      body: [
        {
          kind: "ul",
          items: [
            "Once the same transformation repeats on a Finder selection, use that selection as input to a Shortcut.",
            "Keep one-time judgments in Finder.",
            "Automate repeatable processing.",
          ],
        },
      ],
    },
  ],
  summary:
    "Finder can expose location, metadata, previews, and actions together — but only if you configure it once rather than fighting its defaults every session.",
  companions: ["downloads-flow"],
};
