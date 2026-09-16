import type { Unit } from "@/lib/workbench/content-types";

export const chapter19: Unit = {
  id: "ch-19",
  source: "core",
  chapter: "19",
  title: "Quick Look and Preview",
  phase: "Capture and preview",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "try",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Inspect with the lightest tool; move into an editor only when the file needs a deliberate, retained change.",
        },
        {
          kind: "p",
          text: 'Quick Look opens a selected file with Space. Depending on format, it offers previews and some actions such as Markup or trimming, directly from the preview panel without opening a full app. Select several items at once to inspect a set in sequence with the arrow keys. Use it whenever the question is simply "is this the right file?" before opening another app and adding another window you\'ll need to close.',
        },
        {
          kind: "p",
          text: "Preview is the sustained workspace for PDF and image inspection, markup, and supported edits. It can annotate PDFs, fill supported interactive form fields, and place a captured signature (chapter 27 of the original recipe pattern applies here too — capture your signature once, reuse it). It is not a general editor for rewriting the underlying PDF text itself; Preview edits visual layers and page structure, not the document's original text content.",
        },
      ],
    },
    {
      id: "a-practical-document-processing-sequence",
      type: "orient",
      title: "A practical document-processing sequence",
      body: [
        {
          kind: "p",
          text: "Duplicate an original (Command-D, or File > Duplicate) when you need a separate working copy — this keeps the source recoverable if the edit goes wrong. Open the copy in Preview and use the page thumbnail sidebar to inspect order. Rotate or rearrange pages where appropriate by dragging thumbnails. Add comments or a signature, then save and reopen the result to confirm it looks right. Verify the final page count, legibility of any small text, and the actual destination before sharing it onward.",
        },
        {
          kind: "p",
          text: "Combining several files into one PDF requires an explicit, deliberate order — a selection made in an arbitrary search-result order (chapter 06 warned about this) may not produce the sequence you actually intended. For any packet that matters, establish the order in a normal folder first, or deliberately reorder the pages inside the finished, combined PDF using the thumbnail sidebar.",
        },
      ],
    },
    {
      id: "annotations-flattening-and-redaction",
      type: "orient",
      title: "Annotations, flattening, and redaction",
      body: [
        {
          kind: "p",
          text: "Saved annotations may remain editable in the saved file, which is useful while you're still working on a document but risky for a document you intend to distribute as final. Apple's documented Print > Save as PDF route flattens annotations into the page itself, which can be useful for a final presentation copy but may also remove any interactivity (like fillable form fields) the original had. Keep the editable source file separate and intact for any future changes you might need to make.",
        },
        {
          kind: "p",
          text: "Use Preview's Redaction tool specifically for supported text redaction — a drawn black rectangle placed over text, or a cropped view that merely hides content visually, is not the same operation and does not remove the underlying data; text can often still be selected and copied out from underneath a drawn black box. Close and reopen the saved sharing copy and actually check it, including attempting to select the redacted text, before sending it anywhere. Complex confidentiality requirements (legal discovery, for instance) may need a dedicated, purpose-built PDF redaction workflow; do not assume flattening alone removes every trace of underlying sensitive information from a PDF's internal structure.",
        },
        {
          kind: "note",
          text: "**QUICK ACTION —** Finder's available PDF or image Quick Actions (rotate, flatten, quick markup) can reduce repeated manual conversion steps for common operations. Inspect the output once by hand before adding that action into a larger Shortcut that renames, files, or shares the result automatically — confirm it does what you expect before it runs unattended as part of something bigger.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [PDF page operations](https://support.apple.com/guide/preview/rearrange-delete-and-copy-pages-prvw457334ba/mac) and [annotation/redaction behavior](https://support.apple.com/guide/preview/annotate-a-pdf-prvw3517e1c4/mac). Undated, checked September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["supplemental"],
};
