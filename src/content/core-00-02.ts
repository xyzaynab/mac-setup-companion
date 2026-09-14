import type { ContentStep } from "@/lib/workbench/content-types";

/**
 * Source-derived steps for core chapters 00–02.
 * Chapters without a key here stay `pending` with no steps.
 */
export const CORE_STEPS: Record<string, ContentStep[]> = {
  "00": [
    {
      id: "how-to-use",
      type: "orient",
      title: "How to use this manual",
      lead: "Read a chapter, try the thing, come back.",
      body: [
        {
          kind: "p",
          text: "The manual is long because the capabilities interact with each other, and understanding one in isolation can produce configurations that quietly conflict.",
        },
        {
          kind: "p",
          text: "You are not expected to read it start to finish before touching the Mac.",
        },
        {
          kind: "p",
          text: "Each chapter is a bounded reading unit: a heading, a plain-language summary, worked examples, and a closing callout.",
        },
        { kind: "note", text: "Read a chapter, try the thing, come back." },
      ],
    },
    {
      id: "minimal-base",
      type: "orient",
      title: "Know the minimal base",
      lead: "The conceptual base the rest of the manual layers on — not a checklist to build now.",
      body: [
        {
          kind: "p",
          text: "One inbox (Downloads), a few named project folders, one Review tag, one saved search built from that tag, and one selected-file Quick Action. Everything else in this manual is optional depth layered on that base. Add automatic routing only after you have watched a rule behave correctly on copies of your own files.",
        },
        {
          kind: "p",
          text: "This is the shape the later chapters assume, not work to complete in Chapter 00. You do not need to construct every part of it now; the chapters that follow build each piece in place.",
        },
      ],
    },
    {
      id: "reading-routes",
      requiredForProgress: false,
      type: "reference",
      title: "Other reading routes",
      lead: "Optional entry points if one problem is pressing. No forced branching.",
      body: [
        {
          kind: "details",
          summary: "Reading routes by symptom (optional)",
          blocks: [
            {
              kind: "ul",
              items: [
                "Files feel lost → 02, 03–05, 06, 10",
                "Desktop/Downloads accumulate → 14, 15, 38",
                "Windows disappear or multiply → 23, 24, 25",
                "Constant Mac/iPad movement → 21, 22, 39",
                "New to automation → 30, then 31; do not start with AppleScript or launchd",
              ],
            },
          ],
        },
      ],
    },
  ],

  "01": [
    {
      id: "four-questions",
      type: "orient",
      title: "Ask the four questions",
      lead: "Each question is answered by a different layer of macOS.",
      body: [
        {
          kind: "p",
          text: "Ask four questions of any file: Where is it? What does it mean? How do I find it? What should happen next? macOS answers each with a different layer, and confusing the layers is the most common source of “I did X but Y didn’t happen.”",
        },
        {
          kind: "ul",
          items: [
            "Storage — a real folder contains the file; local, iCloud, and external locations affect availability.",
            "Description — a useful filename travels with the document; tags add cross-folder meaning.",
            "Retrieval — Finder search and Spotlight find indexed information; Smart Folders preserve a query.",
            "Action — Quick Look inspects; Preview edits; a Quick Action or Shortcut processes input.",
            "Delivery — the Share Sheet hands content to another app; iCloud collaboration shares ongoing access.",
          ],
        },
      ],
    },
    {
      id: "one-file",
      type: "orient",
      title: "Follow one file through the system",
      lead: "The same receipt, passing through every layer.",
      body: [
        {
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
        },
      ],
    },
    {
      id: "where-meaning-lives",
      type: "decision",
      title: "Choose where meaning lives",
      lead: "Decide which layer carries which kind of meaning.",
      body: [
        {
          kind: "ul",
          items: [
            "Durable identity → filename.",
            "Stable ownership → folders.",
            "A second dimension, or temporary state → tags.",
            "Deadlines, reminders, next steps → task app.",
            "Task managers are not filesystem layers.",
          ],
        },
        {
          kind: "p",
          text: "If you already have a convention, record it in the notes on this step. If not, leave it blank and return after later chapters give you more evidence.",
        },
      ],
    },
    {
      id: "roles-distinct",
      type: "orient",
      title: "Keep the roles distinct",
      lead: "The closing rule of the chapter.",
      body: [
        {
          kind: "note",
          text: "Folder = home. Tag = label. Saved search = view. Automation = action. A view does not itself move or process files. A tag called Urgent does not schedule a reminder.",
        },
      ],
    },
  ],

  "02": [
    {
      id: "new-window-extensions",
      type: "do",
      title: "Set Finder’s new-window location and show filename extensions",
      lead: "Configure Finder once instead of fighting its defaults each session.",
      body: [
        { kind: "p", text: "Open Finder → Settings." },
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
        { kind: "p", text: "Open Finder → View." },
        { kind: "ul", items: ["Enable Path Bar.", "Enable Status Bar."] },
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
        { kind: "ul", items: ["Pin the real inbox.", "Pin your current project folders."] },
        { kind: "p", text: "Removing a sidebar shortcut does not delete the files." },
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
          items: ["Press Command-Shift-G.", "Type ~/Downloads.", "Press Command-Up to go to the parent folder."],
        },
        { kind: "p", text: "The ~ character means your home folder." },
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
        { kind: "ul", items: ["Replace Text", "Add Text", "Format"] },
        { kind: "p", text: "Preview the result before committing, and test on copies first." },
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
};

export const CORE_SUMMARIES: Record<string, string> = {
  "02": "Finder can expose location, metadata, previews, and actions together — but only if you configure it once rather than fighting its defaults every session.",
};
