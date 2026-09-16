import type { Unit } from "@/lib/workbench/content-types";

export const chapter01: Unit = {
  id: "ch-01",
  source: "core",
  chapter: "01",
  title: "The connected system",
  phase: "Foundations",
  status: "populated",
  steps: [
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
          kind: "p",
          text: "One receipt passes through every layer in turn. Each line below is a distinct layer doing its own job.",
        },
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
};
