import type { Unit } from "@/lib/workbench/content-types";

export const chapter10: Unit = {
  id: "ch-10",
  source: "core",
  chapter: "10",
  title: "Search diagnosis before repair",
  phase: "Search repair",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Missing results can mean a scope, availability, extraction, permission, or index problem — in that order of likelihood, and in that order of how invasive the fix should be.",
        },
      ],
    },
    {
      id: "establish-one-known-file",
      type: "orient",
      title: "Establish one known file",
      body: [
        {
          kind: "p",
          text: "Navigate to it directly in Finder. Confirm its real name, location, extension, and whether it opens. If it is in iCloud Drive, download it or use Keep Downloaded (chapter 21) for a working set that needs dependable offline access. Connect and unlock the relevant external drive before testing its contents.",
        },
        {
          kind: "p",
          text: 'Then search for its exact filename in the intended scope. Separately search for a distinctive phrase visible inside it. Record which test fails. This separates "the item is not being found" from "the item is found, but its contents are not searchable" — two different problems with two different fixes.',
        },
        {
          kind: "ul",
          items: [
            "Observation — Next useful check",
            "Finder shows it directly; search by name misses it — Scope, exclusions, local availability, and indexing.",
            "Name search works; a phrase search does not — Text layer, file format, extraction support, password protection.",
            "Local copy works; the cloud item does not — Download status, sync completion, provider behavior.",
            "Several files fail after an update — Indexing progress and completion before another reset.",
            "Only another app's search fails — That app's own scopes, ignore rules, index, and permissions.",
          ],
        },
      ],
    },
    {
      id: "check-settings-without-resetting-anything",
      type: "orient",
      title: "Check settings without resetting anything",
      body: [
        {
          kind: "p",
          text: "In System Settings > Spotlight, review the result categories (do you actually have the category containing your file enabled?) and Search Privacy (is the folder or drive on the exclusion list?). An excluded folder or disk will not behave like a normal indexed location no matter what else you check. Finder's own chosen search scope (chapter 06) is a separate, independent control from both of these settings.",
        },
        {
          kind: "p",
          text: "A visible cloud filename does not establish that every search tool can read its content — a placeholder file shows its name locally well before (or without) its contents being downloaded. Similarly, Live Text recognizing a sentence on screen in Preview does not prove a permanent searchable text layer was written into the file — on-screen recognition and saved, indexed text are related but separate capabilities (chapter 18 explains the distinction fully).",
        },
      ],
    },
    {
      id: "a-password-protected-or-encrypted-pdf-is-a-fifth-failure",
      type: "orient",
      title: "A password-protected or encrypted PDF is a fifth failure mode",
      body: [
        {
          kind: "p",
          text: "If a PDF requires a password to open, its content is very likely unindexed and unsearchable until it is unlocked, because the extraction process cannot read protected content any more than you can without the password. This is worth checking before assuming an index problem: try opening the file directly first.",
        },
        {
          kind: "note",
          text: "**RECOMMENDED TEST SET —** One local plain-text file, one PDF with genuinely selectable text, one image scan with no text layer, and one downloaded iCloud file. Give each a distinctive, memorable name. Use the same four examples to compare search tools so you can see precisely which failure an app you're evaluating actually fixes and which it does not touch.",
        },
        {
          kind: "note",
          text: "**DECISION POINT —** If your known-file tests all pass but a specific search you rely on still fails, the problem is more likely in that search's own criteria (chapter 06) than in the index. Fix the query before touching System Settings.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Spotlight exclusions](https://support.apple.com/guide/mac-help/spotlight-privacy-settings-mchl854fa2a1/mac), [result categories](https://support.apple.com/guide/mac-help/spotlight-settings-mchlp1004/mac), [iCloud status](https://support.apple.com/guide/icloud/icd6f5327d?viewlocale=en_US). Undated, accessed September 6, 2026. Diagnostic sequence is editorial synthesis.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
