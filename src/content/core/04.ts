import type { Unit } from "@/lib/workbench/content-types";

export const chapter04: Unit = {
  id: "ch-04",
  source: "core",
  chapter: "04",
  title: "Tags — models and decisions",
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
          text: "Tags are most useful when a file genuinely belongs to more than one meaningful view at once. If a file only ever needs one view, a folder already answers that.",
        },
      ],
    },
    {
      id: "three-useful-models",
      type: "decision",
      title: "Three useful models",
      body: [
        {
          kind: "p",
          text: "**State across projects.** An application PDF and a design reference can both be Review while remaining in different folders. One review view spans them. Remove that state when the check is complete; it need not become a permanent Done tag that just accumulates.",
        },
        {
          kind: "p",
          text: "**Theme across formats.** A theme such as Typography can connect images, PDFs, and notes exported as files. This is useful when you return by subject rather than by project. It is less useful if a single Reference folder already answers the same question — check for that redundancy before creating a theme tag.",
        },
        {
          kind: "p",
          text: "**Temporary selection.** Mark a handful of files for a comparison or export, act on them, then remove the tag. This can avoid duplicate holding folders that exist only to gather files for one task. Use a descriptive label such as Portfolio candidates so you remember why the selection exists if you return to it after a break — a plain color with no name will not remind you of anything three weeks later.",
        },
      ],
    },
    {
      id: "keep-dimensions-independent",
      type: "orient",
      title: "Keep dimensions independent",
      body: [
        {
          kind: "p",
          text: 'Suppose a PDF is in Project Cedar/Receipts and tagged Review plus Reimbursable. The folder says which project owns it. Review is temporary; Reimbursable is an independent attribute that should outlive the review. Finishing the review should remove only Review, preserving the other tag — a filing rule or manual habit that clears "all tags" on completion will destroy information you wanted to keep.',
        },
        {
          kind: "p",
          text: "A tag placed on a folder labels that folder itself; do not design your system around automatic inheritance to all enclosed files, because macOS does not propagate a folder's tag onto items placed inside it afterward. Likewise, Notes tags and Reminders tags belong to their own app-specific systems. Identical spelling does not create a universal cross-app tag database — a Notes tag called Review and a Finder tag called Review are two unrelated pieces of metadata that happen to share a name, and neither app's search will find the other's.",
        },
        {
          kind: "ul",
          items: [
            "Prefer folders when… — Prefer tags when…",
            "A project must travel as a unit. — The same original belongs in several views.",
            "Collaborators need an obvious shared hierarchy. — You want a temporary queue across locations.",
            "A tool expects stable paths and dependencies. — You need an additional attribute beyond location.",
          ],
        },
        {
          kind: "note",
          text: "**SIMPLE SETUP —** Project folders plus one Review tag. Add a theme only after you repeatedly fail to retrieve something by folder and name. Avoid tagging the entire backlog before using the system — tag going forward, and only retroactively tag the specific older files a real task requires.",
        },
        {
          kind: "note",
          text: '**DECISION POINT —** If you find yourself creating a new tag for every project, you likely want a folder instead — that is a sign the "tag" is actually functioning as a home, not a cross-cutting label. If you find yourself unable to file something into a single folder without feeling like you are losing track of its other relevant contexts, that is the actual signal for a tag.',
        },
        {
          kind: "p",
          text: "Sources: Apple, [Finder](https://support.apple.com/guide/mac-help/welcome/mac), [Notes tags](https://support.apple.com/guide/notes/organize-notes-into-folders-apd4a740375e/mac). Undated, accessed September 6, 2026. Models and recommendations are editorial synthesis.",
        },
      ],
    },
  ],
};
