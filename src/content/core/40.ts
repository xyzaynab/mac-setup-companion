import type { Unit } from "@/lib/workbench/content-types";

export const chapter40: Unit = {
  id: "ch-40",
  source: "core",
  chapter: "40",
  title: "Setup, upkeep, and what changed",
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
          text: "A useful configuration is one you can actually resume and understand without having to rebuild it from memory every time you come back to it — that's the real test, more than how sophisticated it is on paper.",
        },
      ],
    },
    {
      id: "the-first-useful-pass",
      type: "orient",
      title: "The first useful pass",
      body: [
        {
          kind: "ol",
          items: [
            "**Orient:** show Finder's path bar and filename extensions; pin your actual, real inbox and current project locations in the sidebar (chapter 02).",
            "**Retrieve:** locate one genuinely known file, both by its name and by a phrase inside it. Fix any demonstrated search issue you find before adding any further layers on top of it (chapters 06, 09–11).",
            "**Reduce new clutter:** set a real screenshot destination folder; use clipboard captures specifically when no retained file is actually needed (chapter 17).",
            "**Make one queue:** add the Review tag only where it's genuinely useful, then save the query you'll actually reopen and use (chapters 03, 08).",
            "**Automate exactly one repetition:** begin with selected files and copied test inputs; add a Tahoe trigger only once the underlying processor is genuinely dependable (chapters 15, 30–33).",
          ],
        },
      ],
    },
    {
      id: "a-light-maintenance-loop",
      type: "orient",
      title: "A light maintenance loop",
      body: [
        {
          kind: "p",
          text: "Review the visible inbox at whatever interval genuinely suits you — weekly is enough for most people (chapter 14). Inspect any skipped items and any unexpected destinations an automation produced. Retire a tag or a rule the moment it no longer answers a genuinely useful question for you. Test an actual file restore from whatever backup you're relying on, at least occasionally — a backup you've never tested restoring from is an assumption, not a safety net. Keep one brief note somewhere describing your watched folders, your automations' outputs, their exceptions, and how to disable each one — future you, six months from now, will not remember these details as clearly as you do today.",
        },
        {
          kind: "p",
          text: "Do not reorganize an entire archive at once merely to try out a new system. Use the next handful of real files that come your way instead. The best actual evidence that a system works is simply whether you can find those files again later, and whether you still understand what happened to them when you look back.",
        },
      ],
    },
    {
      id: "corrections-carried-forward-from-the-original-guide",
      type: "orient",
      title: "Corrections carried forward from the original guide",
      body: [
        {
          kind: "p",
          text: 'This edition preserves every correction already present in the original: the age-means-delete rule is replaced throughout with review-based handling, never silent deletion; blanket claims about OCR or search "always working" are replaced with the specific, separate recognition, saved-text, and indexing steps chapter 09 lays out; Tahoe\'s native personal automations and native window tiling are treated as the default starting point, with third-party tools positioned explicitly as optional additions; and iCloud sync scope, plus what specifically happens when you turn a sync setting off, is explained rather than assumed.',
        },
      ],
    },
    {
      id: "what-this-edition-adds",
      type: "orient",
      title: "What this edition adds",
      body: [
        {
          kind: "p",
          text: "The callout vocabulary is fully reconciled into eleven consistent labels (see the key at the front of this manual). Finder Tags, Downloads/Desktop organization, Stage Manager, and the overall search/indexing model each now receive the full depth this manual's own brief calls for — every sub-topic named in that brief is addressed somewhere in chapters 03–05, 09–14, and 24. Automation is treated as a layer running throughout the whole manual, not confined to one section — a new ladder (chapter 30) and a worked ideas catalog (chapter 38) tie the individual automation chapters together into one consistent model. A new cross-system-workflows chapter (29) makes explicit exactly where data and metadata do and do not carry across the pieces documented elsewhere in this manual.",
        },
      ],
    },
    {
      id: "evidence-and-practical-limits",
      type: "try",
      title: "Evidence and practical limits",
      body: [
        {
          kind: "p",
          text: "Research used Apple's own support and developer documentation, plus official product manuals, checked as of September 6–8, 2026. Recommendations and worked recipes throughout are editorial synthesis, not independent, published app benchmarks. The exact Mac model, its specific installed settings, and your own actual transfer routes were not individually inspected as part of this research — verify anything genuinely load-bearing against your own actual setup before depending on it. Automation examples throughout are illustrative builds; they were not installed or executed on macOS as part of this research. Undated sources are explicitly labeled as such; every link sits directly beside the specific claim it supports.",
        },
        {
          kind: "p",
          text: 'macOS Tahoe 26 (currently 26.6.2 as of this research) remains the current shipping release. Apple announced macOS 27 ("Golden Gate") at WWDC 2026, in beta at the time of this research and expected to ship in the usual autumn window; treat anything in this manual describing search, automation, or window-management behavior as accurate for Tahoe 26 specifically, and re-verify against Apple\'s own release notes once you actually update past it.',
        },
        {
          kind: "note",
          text: "**RETURN POINT —** If you only change exactly one thing after reading this manual, make the very next file you touch easy to find again: choose its real, permanent home, give it a genuinely useful name, and verify your usual search actually retrieves it. Everything else in this manual is optional depth built on top of that one habit.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [What's new in the updates for macOS Tahoe 26](https://support.apple.com/en-us/122868), checked September 8, 2026; MacRumors, [macOS 27 \"Golden Gate\"](https://www.macrumors.com/roundup/macos-27/), checked September 8, 2026. Original guide's corrections and evidence framing retained and extended.",
        },
      ],
    },
  ],
};
