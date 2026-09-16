import type { Unit } from "@/lib/workbench/content-types";

export const chapter09: Unit = {
  id: "ch-09",
  source: "core",
  chapter: "09",
  title: "Searchability, end to end",
  phase: "Search and retrieval",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "This chapter connects the pieces from 06–08 into one map of how search and indexing actually work on current macOS, so the diagnostic steps in chapters 10–11 make sense before you need them under pressure.",
        },
      ],
    },
    {
      id: "the-indexing-pipeline-in-plain-terms",
      type: "orient",
      title: "The indexing pipeline, in plain terms",
      body: [
        {
          kind: "p",
          text: "Spotlight maintains a local index built from three broad kinds of information about each file: its metadata (name, kind, dates, tags, comments, and dozens of other attributes), its extracted text content where a format supports extraction, and — for images and PDFs containing scanned pages — text recognized through on-device OCR (Live Text). Finder search and Spotlight both query this same underlying index; they are two interfaces onto one system, not two separate search engines. This is why a file missing from Spotlight is also missing from a Finder contents search, and why fixing one fixes the other.",
        },
      ],
    },
    {
      id: "file-names-versus-file-contents-versus-ocr-derived-text",
      type: "orient",
      title: "File names versus file contents versus OCR-derived text",
      body: [
        {
          kind: "ul",
          items: [
            "**Filenames** are always indexed if the file itself is indexed at all — this is the fastest and most reliable search dimension.",
            "**File contents** are indexed only for formats macOS knows how to extract text from: plain text, RTF, most Office and iWork formats, PDFs with an actual text layer, HTML, and others. A PDF that is a scanned image with no text layer has no contents to extract until OCR runs.",
            "**OCR-derived text** (Live Text) is generated for images and scanned PDF pages. Recognizing text on screen in Preview (chapter 18) is a different action from that text being permanently written into a searchable index — the two can be out of sync, especially for older files captured before your current macOS version's OCR quality improvements.",
          ],
        },
      ],
    },
    {
      id: "tags-comments-dates-and-other-metadata-as-search-dimensi",
      type: "orient",
      title: "Tags, comments, dates, and other metadata as search dimensions",
      body: [
        {
          kind: "p",
          text: "Every tag, Spotlight comment, and standard date field (created, modified, last opened) is itself indexed and searchable via Finder's criteria rows (chapter 06) or a typed metadata query. This is why a well-tagged file is more reliably retrievable than one you are relying on content search alone to surface — metadata search does not depend on text extraction succeeding at all.",
        },
      ],
    },
    {
      id: "icloud-drive-and-downloaded-versus-cloud-only-files",
      type: "orient",
      title: "iCloud Drive and downloaded-versus-cloud-only files",
      body: [
        {
          kind: "p",
          text: 'A file optimized out of local storage (see chapter 21) still shows a filename-based placeholder in Finder, and its known metadata may still be searchable, but its contents are not searchable until the file is actually downloaded. This is a common, quiet cause of "the file is right there but the search that should find its contents doesn\'t."',
        },
      ],
    },
    {
      id: "external-drive-indexing-excluded-locations-and-privacy-s",
      type: "orient",
      title: "External-drive indexing, excluded locations, and privacy settings",
      body: [
        {
          kind: "p",
          text: "An external drive is indexed by default once connected and mounted, unless you have explicitly excluded it. System Settings > Spotlight has two relevant controls: the categories of information Spotlight indexes system-wide, and Search Privacy, a list of specific folders and volumes excluded from indexing entirely. An excluded folder will never appear in Spotlight or a Finder contents search regardless of any other setting — check this list before any deeper diagnostic when a whole drive or folder seems invisible to search.",
        },
      ],
    },
    {
      id: "common-reasons-files-do-not-appear-in-search-a-consolida",
      type: "orient",
      title: "Common reasons files do not appear in search — a consolidated list",
      body: [
        {
          kind: "ol",
          items: [
            'Wrong search scope in Finder (chapter 06) — the file exists but the folder or "This Mac" toggle excludes it.',
            "The folder or volume is in Search Privacy exclusions.",
            "The file is cloud-only and not downloaded, so its content is unextracted.",
            "The format has no supported text extraction (some proprietary or unusual file types).",
            "A scanned PDF or image has not been OCR'd, or OCR failed on a low-quality scan.",
            "The index itself is incomplete after a recent macOS update, large data change, or interrupted indexing.",
            "The file's permissions prevent the indexing process from reading it.",
            "You are testing in a third-party search tool that maintains its own separate index or scope, unrelated to Spotlight's state.",
          ],
        },
        {
          kind: "p",
          text: "Chapters 10 and 11 turn this list into an ordered diagnostic and repair sequence.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** A well-named file with accurate tags is retrievable even when content extraction fails entirely. This is the practical argument for the filename and tagging discipline in chapters 02–05: metadata search is the fallback that content search cannot always provide.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [About Spotlight indexing and search results](https://support.apple.com/en-us/102266), August 25, 2026; [Spotlight exclusions](https://support.apple.com/guide/mac-help/spotlight-privacy-settings-mchl854fa2a1/mac); [iCloud status](https://support.apple.com/guide/icloud/icd6f5327d?viewlocale=en_US). Consolidated diagnostic list is editorial synthesis built from the cited documentation, checked September 8, 2026.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
