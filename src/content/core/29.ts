import type { Unit } from "@/lib/workbench/content-types";

export const chapter29: Unit = {
  id: "ch-29",
  source: "core",
  chapter: "29",
  title: "Cross-system workflows",
  phase: "Automation",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "macOS is genuinely an interconnected system, not a collection of isolated settings you configure once and never think about together. This chapter makes five recurring workflows explicit, showing exactly where data, metadata, and actions carry across the capabilities covered in chapters 02–28 — and, just as importantly, where they do not.",
        },
        {
          kind: "p",
          text: "Tag → Finder search → Smart Folder → Shortcut or automation",
        },
        {
          kind: "p",
          text: "A tag (chapter 03) is a searchable attribute. A Finder search (chapter 06) can filter on it. A Smart Folder (chapter 08) saves that exact search as a reusable, live view. A Shortcut or Hazel rule (chapters 15, 16, 31) can act on the resulting selection. What carries across every step: the tag name itself. What does not carry across automatically: any action — nothing in this chain moves, renames, or deletes a file merely because it matches; every step past the Smart Folder requires an explicit trigger.",
        },
        {
          kind: "p",
          text: "Screenshot → capture → OCR or Live Text → rename and tag →\nroute to an appropriate folder → retrieve later through search",
        },
        {
          kind: "p",
          text: "A screenshot (chapter 17) is pixels only, with no inherent searchable text. Live Text or an OCR Shortcut (chapter 18) can extract that text into a companion file or your review process. A rename and a tag then make the file findable by name and by attribute even if content extraction is imperfect. Routing (chapter 15) places it in a stable, permanent home. What carries across: the extracted text, if you deliberately save it as a companion file. What does not carry: recognition on-screen in Preview does not, by itself, write anything permanent — that requires the explicit extraction step in the middle of this chain.",
        },
        {
          kind: "p",
          text: "Finder selection → contextual menu → Quick Action →\nShortcut, Service, or script",
        },
        {
          kind: "p",
          text: "A Finder selection (chapter 02) is a set of file references. A Quick Action or Service (chapters 19, 20) exposes an available transformation for that specific selection type. The receiving Shortcut, Service, or script (chapters 31, 32, 35, 36) determines what actually happens next. What carries across: the file references themselves, passed as the automation's actual input — not re-typed paths, not filenames alone. What does not carry: your intent. A Quick Action that appears in the menu tells you the input type matched; it does not confirm the action does what you assume it does until you've inspected its actual behavior once.",
        },
        {
          kind: "p",
          text: "iPhone or iPad capture → iCloud Drive, AirDrop, or Continuity →\nMac processing workflow",
        },
        {
          kind: "p",
          text: "A capture on iPhone or iPad (chapter 22) becomes available on the Mac through one of three distinct routes, each with different timing and reliability characteristics: iCloud Drive sync (subject to network and download-completion delays, chapter 21), AirDrop (near-instant but manual and proximity-dependent), or a direct Continuity import (initiated from the Mac side, returning synchronously to the calling app or folder). What carries across: the file itself, and whatever metadata the chosen route preserves — which is not guaranteed to be everything, per chapter 05's transfer-survival table. What does not carry: assume nothing about tags or comments surviving this specific hop until you've tested your specific route once with a disposable file.",
        },
        {
          kind: "p",
          text: "File → Quick Look or Preview → Quick Action → Share Sheet",
        },
        {
          kind: "p",
          text: "Inspection (chapter 19) with the lightest available tool, a targeted transformation via Quick Action (chapter 19, 20), then deliberate delivery via the Share Sheet (chapter 20). What carries across: the processed file, as the Share Sheet's actual input. What does not carry: any implicit assumption that the recipient's system can open, edit, or search the file the same way yours does — a font (chapter 28), an embedded tag (chapter 05), or an OCR text layer (chapter 18) may all behave differently once the file leaves your Mac.",
        },
        {
          kind: "p",
          text: "Download → temporary intake location → rename or classify →\nmove, tag, or archive → automatic cleanup or review",
        },
        {
          kind: "p",
          text: "This is the Downloads/Desktop model from chapter 14 in its most compact form: an arrival point, a decision (manual or via Hazel, chapter 16), a permanent home, and — only once the earlier steps are trustworthy — an optional scheduled review (chapter 33). What carries across: nothing should move automatically before this chain's middle \"decision\" step has actually happened for that specific file, whether that decision was made by you or by a rule you've tested and trust.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Every arrow in these six diagrams is a place where you can stop and inspect before continuing — Quick Look, a dry-run Shortcut result, a Hazel rule preview. Building toward full automation one verified arrow at a time is the difference between a workflow you trust and one you're hoping works.",
        },
        {
          kind: "p",
          text: "Sources: Capability references: Apple, [Continuity](https://support.apple.com/en-us/102184), [Live Text](https://support.apple.com/guide/preview/copy-text-from-an-image-prvw6e896d95/mac), [Tahoe automation](https://support.apple.com/en-us/117626); Noodlesoft, [rules](https://www.noodlesoft.com/manual/hazel/rules/). Workflows are original synthesis; component details are explained fully in the chapters cited above.",
        },
      ],
    },
  ],
};
