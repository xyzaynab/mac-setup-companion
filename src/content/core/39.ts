import type { Unit } from "@/lib/workbench/content-types";

export const chapter39: Unit = {
  id: "ch-39",
  source: "core",
  chapter: "39",
  title: "Three complete workflows",
  phase: "Workflows and upkeep",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "The same capabilities become considerably easier to actually understand once you follow one real file all the way through, start to finish, rather than studying each capability in isolation.",
        },
      ],
    },
    {
      id: "a-scan-you-can-find-later",
      type: "orient",
      title: "A scan you can find later",
      body: [
        {
          kind: "p",
          text: "Scan with iPhone directly into a chosen iCloud Drive inbox folder, or initiate the scan from the Mac side using Continuity (chapter 22). Verify the resulting file has actually arrived and opens correctly, locally, on the Mac. Inspect page order in Preview (chapter 19). Give it a genuinely useful, descriptive name and move it to its proper project folder. Apply the Review tag specifically if something in it still remains to be checked by you.",
        },
        {
          kind: "p",
          text: "If the document has no usable, selectable text at all, extract a text companion file or use a workflow that writes actual searchable text directly into the PDF itself (chapter 18). Test with a distinctive, memorable phrase to confirm the extraction genuinely worked. A Smart Folder (chapter 08) can display your standing Review queue; a Quick Action (chapter 19, 20) can prepare a sharing copy once you've finished inspecting it. Removing the Review tag clears the item from that queue without relocating the original file again.",
        },
      ],
    },
    {
      id: "a-screenshot-used-in-a-work-note",
      type: "orient",
      title: "A screenshot used in a work note",
      body: [
        {
          kind: "p",
          text: "Capture a specific region directly to a file if you need to retain the source image itself; open it in Preview and copy the relevant error text out using Live Text, or use the dedicated extraction Quick Action (chapter 17, 18). Add both that extracted text and the source image's filename into your actual work note, so the connection between the two remains traceable later. Save the image itself alongside the relevant project; tag it specifically only if doing so genuinely supports another useful view you'll actually use later, not simply out of habit.",
        },
        {
          kind: "p",
          text: "For a one-time message rather than a lasting record, capture directly to the clipboard instead of creating a file at all (chapter 17). The choice of destination made at capture time reduces later cleanup work considerably more effectively than creating a file by default and then adding a deletion rule for it afterward.",
        },
      ],
    },
    {
      id: "a-downloads-folder-that-remains-genuinely-understandable",
      type: "orient",
      title: "A Downloads folder that remains genuinely understandable",
      body: [
        {
          kind: "p",
          text: "A completed download arrives. A narrow, well-scoped Tahoe Folder automation (chapter 15) handles only a specific, predictable, well-understood class of file — nothing broader than that. Everything genuinely ambiguous remains visible in Downloads rather than being silently filed somewhere. A scheduled review (chapter 33) identifies older arrivals periodically. You select a batch from that review and use a Quick Action (chapter 32) to choose the correct project and either preserve the original names or add useful additional context to them.",
        },
        {
          kind: "p",
          text: "Add Hazel (chapter 16) only once the actual number and genuine complexity of your recurring rules justifies learning and maintaining its dedicated rule interface. Keep any known, deliberate exceptions (chapter 05's Keep here tag) checked ahead of your routing rules, not after them. Leave review folders themselves outside of any watched, automated source folder, so a review folder's own contents never accidentally get re-processed by the same rule that filed them there in the first place. Preserve both files, under distinct names, on any collision — never silently overwrite. A small, regular status report or notification is what makes automatic movement of your files actually discoverable and trustworthy, rather than a mysterious, invisible thing happening in the background.",
        },
        {
          kind: "note",
          text: "**CHECK THE CONNECTIONS —** For any workflow you build from this manual's pieces, ask explicitly: Which file is the actual original? Where do its bytes actually, physically live? Which label or tag changes, and when? What specifically starts the automation? What does success actually return or produce? If any one of these five answers is unclear to you, simplify that specific boundary before adding yet another tool or another layer on top of it.",
        },
        {
          kind: "p",
          text: "Sources: Capability references: Apple, [Continuity capture](https://support.apple.com/guide/mac-help/insert-a-photo-or-scanned-document-mchl5cd6d51e/mac), [Live Text](https://support.apple.com/guide/preview/copy-text-from-an-image-prvw6e896d95/mac), [Tahoe automation](https://support.apple.com/en-us/117626); Noodlesoft, [rules](https://www.noodlesoft.com/manual/hazel/rules/). Workflows are original synthesis; details and limitations are explained fully in the chapters referenced above.",
        },
      ],
    },
  ],
};
