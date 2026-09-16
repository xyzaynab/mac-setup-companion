import type { Unit } from "@/lib/workbench/content-types";

export const chapter17: Unit = {
  id: "ch-17",
  source: "core",
  chapter: "17",
  title: "Screenshots — capture with an exit path",
  phase: "Capture and preview",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Decide whether you need a temporary paste, a retained source file, or an annotated sharing copy before you press the capture keys — the choice determines which shortcut to use.",
        },
        {
          kind: "ul",
          items: [
            "Capture — Operation",
            "Entire display — Command-Shift-3",
            "Selected region — Command-Shift-4; drag the region",
            "A window — Command-Shift-4, then Space; click the window. Option omits the drop shadow.",
            "Toolbar and recording — Command-Shift-5; choose capture/recording, timer, and destination",
            "Clipboard instead of a file — Add Control to any of the still-screenshot combinations above",
          ],
        },
        {
          kind: "p",
          text: "Use the Screenshot toolbar's Options > Save to > Other Location to choose a real, dedicated screenshots folder instead of the Desktop default — create that folder first so it appears as a valid destination. Escape cancels an in-progress capture cleanly, discarding it. A MacBook Air has no Touch Bar, so the legacy Touch Bar screenshot shortcut some older guides mention adds no useful step for this hardware.",
        },
      ],
    },
    {
      id: "choose-the-least-lasting-capture-that-serves-you",
      type: "decision",
      title: "Choose the least lasting capture that serves you",
      body: [
        {
          kind: "p",
          text: 'For "show someone this error right now," a clipboard capture (adding Control to the shortcut) avoids creating a file you never actually needed to keep. For reference material or a record, save a file and give it real context: the source app or subject, a date, and a short note on what the image demonstrates — a filename like `Screenshot 2026-09-08 at 3.42.11 PM.png` tells you nothing six months later. For something you will annotate or redact before sharing, keep the original untouched and create a clearly named sharing copy, so the unmarked original remains available if you need it again.',
        },
        {
          kind: "p",
          text: "A screenshot of a web page captures pixels only — it lacks the original page's live links and text structure. Add the source URL to a companion note when provenance matters later. Capture the error text as actual typed text too, alongside the image, if you expect to search for it or paste it somewhere later — an image alone is not text-searchable without a further OCR step (chapter 18).",
        },
      ],
    },
    {
      id: "triage-with-a-visual-view",
      type: "try",
      title: "Triage with a visual view",
      body: [
        {
          kind: "p",
          text: "Use Gallery view or Quick Look to inspect a batch of recent captures quickly — Gallery's larger thumbnails make it much easier to distinguish similar-looking screenshots than a list of timestamp filenames does. Route useful captures to the relevant project folder, or keep them in a dedicated Screenshots folder with a meaningful filename and an optional Review tag. Do not automatically declare screenshots disposable just because they're old — a screenshot documenting a bug, a setting, or a design reference can remain useful indefinitely regardless of its age.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Capture > Preview Live Text > useful filename > project folder > search. Add the Extract screenshot text Quick Action (chapter 18) if extracting the text becomes a repeated manual step. A folder watcher (chapter 15's pattern, applied to a Screenshots destination) can route known captures automatically once you trust the naming pattern.",
        },
        {
          kind: "note",
          text: "**TRY THIS NOW —** Press Command-Shift-4, drag a small region, then immediately press Space in Quick Look on the resulting thumbnail (it appears briefly in the corner) — you can markup, delete, or file it before it ever touches your Desktop permanently.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Screenshots and screen recordings](https://support.apple.com/guide/mac-help/take-a-screenshot-or-screen-recording-mh26782/mac) and [keyboard shortcuts](https://support.apple.com/en-us/102650), March 10, 2026. Screenshot guide undated; checked September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["downloads-flow"],
};
