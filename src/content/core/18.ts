import type { Unit } from "@/lib/workbench/content-types";

export const chapter18: Unit = {
  id: "ch-18",
  source: "core",
  chapter: "18",
  title: "Screenshot text — three distinct layers",
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
          text: "Reading text on screen, saving extracted text, and searching an index are three separate capabilities that are easy to conflate but behave independently.",
        },
      ],
    },
    {
      id: "manual-live-text-in-preview",
      type: "orient",
      title: "Manual: Live Text in Preview",
      body: [
        {
          kind: "p",
          text: "Open a clear image in Preview, point at recognizable text, and select it the way you'd select text in a document. Copy the selection or use the contextual actions appropriate to the recognized content (a phone number offers to call or add a contact; a URL offers to open it). If the image is blurry, rotated, stylized, or in an unsupported language, recognition may be incomplete or entirely absent.",
        },
        {
          kind: "p",
          text: "This can make a screenshot useful immediately without installing any capture app. It does not by itself establish that every image in every folder is indexed by its recognized text, or that a scanned PDF has thereby gained a permanent, searchable text layer — Live Text recognition in Preview is an on-demand, on-screen action, not automatically a permanent write to the file.",
        },
      ],
    },
    {
      id: "quick-action-extract-screenshot-text",
      type: "orient",
      title: "Quick Action: Extract screenshot text",
      body: [
        {
          kind: "p",
          text: "Create a Shortcut receiving Images from Finder. Use Repeat with Each so each image remains associated with its own individual output rather than concatenating everything together. For each item, use **Extract Text from Image**, then show the result for review before doing anything else with it. If no text is returned, stop processing that specific item and report it explicitly rather than naming an output file from an empty value, which would silently produce a misleadingly-named empty file.",
        },
        {
          kind: "p",
          text: "For repeatable retrieval, save the original image's base filename plus `.txt` beside the image, after you've reviewed the extracted text. Preserve existing files on a name collision rather than overwriting. Alternatively, copy the reviewed text to the clipboard instead if no retained companion file is actually needed for that particular capture.",
        },
        {
          kind: "p",
          text: "A text companion file makes the recognized words available to ordinary text-oriented search tools immediately. It does not embed that text inside the original screenshot or a PDF — the two files remain separate. Include a reference to the original filename inside the companion text file so you can check a search hit against the source image later.",
        },
      ],
    },
    {
      id: "automatic-classification-needs-another-check",
      type: "try",
      title: "Automatic classification needs another check",
      body: [
        {
          kind: "p",
          text: "OCR output can contain mistaken dates, names, or amounts — recognition is not infallible, especially on low-resolution or stylized text. Use it to suggest a subject or queue a document for human review, not as ground truth for an automated financial or legal classification. For an archive that actually requires searchable PDFs (not just a companion text file), use a workflow that writes an actual PDF text layer, then test that the written text is genuinely selectable and searchable in the saved output — don't assume success just because the OCR step itself completed without an error.",
        },
        {
          kind: "note",
          text: "**GO DEEPER —** Hazel's Contents matching (chapter 16) can recognize image text for rule-matching purposes without saving it anywhere. A separate OCR-to-text or OCR-to-searchable-PDF step is required whenever the actual goal is durable, permanently searchable content rather than one-time routing logic.",
        },
        {
          kind: "p",
          text: "Sources: Noodlesoft, [Text recognition behavior](https://www.noodlesoft.com/manual/hazel/rules/conditions/#ocr); Apple, [Shortcuts transformations](https://support.apple.com/guide/shortcuts-mac/welcome/mac). Undated, checked September 6, 2026. Shortcut recipe is illustrative and not Mac-tested.",
        },
      ],
    },
  ],
};
