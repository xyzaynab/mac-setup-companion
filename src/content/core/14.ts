import type { Unit } from "@/lib/workbench/content-types";

export const chapter14: Unit = {
  id: "ch-14",
  source: "core",
  chapter: "14",
  title: "Downloads and Desktop — define the jobs",
  phase: "Files in motion",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Organization works better when incoming, active, and retained files have different roles — and worse, reliably, when one folder is asked to be all three at once.",
        },
      ],
    },
    {
      id: "what-these-locations-are-best-used-for-and-why-they-beco",
      type: "orient",
      title: "What these locations are best used for, and why they become cluttered",
      body: [
        {
          kind: "p",
          text: 'Downloads is an arrival point: every browser download, most Mail and Messages attachment saves, and many AirDrop receptions land there by default. It becomes cluttered because it is a single shared inbox for every app on your Mac that needs somewhere to put a new file, with no automatic sorting. The Desktop becomes cluttered for a related but different reason: it is visually convenient (always one click away, always visible when other windows are minimized) so it accumulates both genuinely temporary items and files people mean to file "later" — a later that, without a deliberate review habit, never quite arrives.',
        },
      ],
    },
    {
      id: "four-roles-one-location-each",
      type: "orient",
      title: "Four roles, one location each",
      body: [
        {
          kind: "ul",
          items: [
            "Role — Definition — Where it should live",
            "Inbox — Arrival point for anything new, not yet decided — Downloads",
            "Temporary workspace — Currently active, will be filed or discarded soon — Desktop, or a dated Working folder",
            "Action queue — Needs a decision or a task before it's done — A visible Review folder, or a Review tag",
            "Permanent archive — Decided, stable, and named for retrieval — Documents/Projects, organized by project or area",
          ],
        },
        {
          kind: "p",
          text: "Conflating these is the actual source of most clutter complaints — a permanent reference document sitting in Downloads next to yesterday's installer next to a receipt you still need to check is not disorganized because you're careless, it's disorganized because one folder is doing four jobs at once.",
        },
      ],
    },
    {
      id: "how-files-arrive-browser-mail-messages-airdrop-screensho",
      type: "try",
      title: "How files arrive: browser, Mail, Messages, AirDrop, screenshots, Share Sheets",
      body: [
        {
          kind: "ul",
          items: [
            '**Browser downloads** default to Downloads unless you\'ve changed the browser\'s own download-location setting, which many browsers hide in an "advanced" or "downloads" preferences pane.',
            "**Mail attachments** you explicitly save go wherever you choose in the save dialog; Mail does not force Downloads, but many people default to it out of habit.",
            "**Messages attachments** received and saved similarly default based on your choice at save time, or an app setting for automatic saving.",
            "**AirDrop** received files land in Downloads by default on the Mac.",
            "**Screenshots** default to the Desktop unless redirected (chapter 17 covers this fully).",
            '**Share Sheet "Save"** actions from other apps typically default to Downloads or ask you to choose, depending on the source app.',
          ],
        },
        {
          kind: "p",
          text: "Recognizing this pattern is what makes automatic routing tractable: nearly everything arrives in one of exactly two places (Downloads or Desktop), which is why the routing recipe in chapter 15 only has to watch those two locations rather than the whole filesystem.",
        },
      ],
    },
    {
      id: "preventing-duplicate-copies",
      type: "orient",
      title: "Preventing duplicate copies",
      body: [
        {
          kind: "p",
          text: 'A duplicate usually appears because a file was downloaded twice (browser "download again" behavior, or a Mail attachment saved once from the message and once from a Quick Look preview) or because a copy operation (Command-C, Command-V) was used where a move was intended. Two habits prevent most duplication: check Downloads for an existing copy before re-downloading something, and use Option-Command-V (move) rather than Command-V (copy) when relocating a file you don\'t intend to keep in two places, as covered in chapter 02.',
        },
      ],
    },
    {
      id: "finder-views-sorting-grouping-tags-and-smart-folders-for",
      type: "orient",
      title: "Finder views, sorting, grouping, tags, and Smart Folders for legibility",
      body: [
        {
          kind: "p",
          text: "Sort Downloads by Date Added for a chronological arrival view, by Kind for grouping similar file types together, or by Size when storage use is the actual question. Finder's Group By (View menu) can cluster by Kind or Date without physically moving anything, which is useful for a fast visual triage pass. A Smart Folder scoped to Downloads with a size or age criterion (chapter 08) gives you a standing, reusable version of that same triage view.",
        },
      ],
    },
    {
      id: "a-minimal-setup-that-requires-little-maintenance",
      type: "orient",
      title: "A minimal setup that requires little maintenance",
      body: [
        {
          kind: "p",
          text: "Downloads as the sole inbox. A weekly five-minute manual pass: sort by Date Added, inspect anything new with Space, delete the obviously disposable (installers you've already run, duplicate downloads), and move the rest to its permanent home. No automation, no tags required. This is the right starting point for most readers.",
        },
      ],
    },
    {
      id: "a-more-capable-native-only-setup",
      type: "orient",
      title: "A more capable native-only setup",
      body: [
        {
          kind: "p",
          text: "Add the Review tag (chapter 03) for anything you inspect but can't immediately decide about, plus a Smart Folder or saved search scoped to `Review AND (Downloads OR Desktop)` so the action queue is visible as a single list regardless of which of the two inbox locations a file happens to be sitting in. Add a dated Working folder on the Desktop (or inside Documents) for active projects so the Desktop surface itself stays limited to truly current work rather than becoming a second, unmanaged inbox.",
        },
      ],
    },
    {
      id: "an-optional-advanced-automated-setup",
      type: "orient",
      title: "An optional advanced automated setup",
      requiredForProgress: false,
      body: [
        {
          kind: "p",
          text: "Layer Hazel rules (chapter 16) on top of the native setup: automatic classification of well-known file types (screenshots, common receipt patterns, software installers past their useful life), a time-based rule that surfaces anything older than a chosen review interval into a visible Review Downloads folder, and explicit exclusions for anything tagged Keep here (chapter 05) or already inside a folder you've marked as intentionally exempt.",
        },
      ],
    },
    {
      id: "which-setup-to-begin-with",
      type: "orient",
      title: "Which setup to begin with",
      body: [
        {
          kind: "p",
          text: 'Start with the minimal setup for at least two weeks before adding anything else. If the weekly pass consistently takes longer than about ten minutes, or you notice the same handful of file types requiring identical handling every single week, that is the actual signal to add the native tag-and-Smart-Folder layer. Only add Hazel once you can describe a specific recurring rule in one plain sentence — "move any PDF whose name starts with a specific project code into that project\'s Receipts folder" is a good candidate; "organize everything intelligently" is not a rule Hazel or anything else can implement.',
        },
      ],
    },
    {
      id: "a-safe-migration-plan-from-a-cluttered-starting-state",
      type: "orient",
      title: "A safe migration plan from a cluttered starting state",
      body: [
        {
          kind: "ol",
          items: [
            "**Do not delete anything yet.** Create a single dated holding folder, e.g. `Documents/Sorted 2026-09-08`.",
            '**Sort the existing Downloads folder by Kind**, and move obviously safe-to-discard items (installers already used, duplicate downloads confirmed identical) to the Trash — inspect each with Quick Look first, since "obviously" disposable is a judgment call worth actually making rather than assuming.',
            "**Move everything else, unsorted, into the dated holding folder** — this clears Downloads to a working inbox without permanently deciding anything yet.",
            "**Process the holding folder in small batches** (ten to twenty files at a session) using the inspection loop from chapter 02: rename, tag if useful, move to a permanent home.",
            "**Repeat the same three steps for the Desktop** once Downloads is under control, since tackling both simultaneously usually stalls the whole effort.",
            "**Only after both are cleared**, decide whether the native tag-and-Smart-Folder layer or Hazel automation is worth adding, using the criteria above.",
          ],
        },
      ],
    },
    {
      id: "a-brief-recurring-review-that-does-not-require-daily-per",
      type: "orient",
      title: "A brief recurring review that does not require daily perfection",
      body: [
        {
          kind: "p",
          text: "A weekly ten-minute pass — sort by date, inspect what's new, act on the action queue — is sufficient for nearly everyone. Daily perfection is not the goal and pursuing it is what causes most organizational systems to be abandoned within a month; a bounded weekly habit that you actually keep beats an ambitious daily one that you don't.",
        },
      ],
    },
    {
      id: "icloud-desktop-and-documents-storage-optimization-and-cr",
      type: "orient",
      title: "iCloud Desktop and Documents, storage optimization, and cross-device implications",
      body: [
        {
          kind: "p",
          text: "Turning on Desktop & Documents Folders sync (chapter 21) means both locations become iCloud Drive locations shared across every device signed into that iCloud account — a file placed on the Desktop of this MacBook Air can appear, given sync time, on another Mac's Desktop or in Files on an iPhone or iPad. Optimize Mac Storage can remove local copies of files you haven't used recently to save disk space, replacing them with a cloud-only placeholder; this is invisible in the Finder icon in older macOS versions but Tahoe shows a small cloud badge. A backup tool such as Time Machine backs up what is locally present — a cloud-only placeholder is not the same as a locally backed-up copy of the actual file content, which matters if you're relying on Time Machine as your safety net for Desktop and Documents content (chapter 21 covers this risk fully).",
        },
        {
          kind: "p",
          text: "External drives are unaffected by Desktop/Documents iCloud sync — files you deliberately move to an external drive leave the synced iCloud location and stop being covered by that sync, for better (freed iCloud storage) or worse (no longer available on your other devices) depending on your intent.",
        },
        {
          kind: "note",
          text: "**QUICK ACTION —** Clear selected Desktop items for later review: select only the files you want to park, choose a dated review destination, and move with collision protection enabled. Leave active app dependencies — files an open project or app expects to find on the Desktop — exactly where those apps expect them; moving a file an app has open can break that app's session.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [desktop organization](https://support.apple.com/guide/mac-help/organize-your-desktop-mchl85d1d966/mac) and [Desktop and Documents in iCloud](https://support.apple.com/en-us/108931), July 27, 2026. Other guide undated; checked September 6, 2026. Folder structure, tiered setups, and migration plan are recommendations, not documented Apple procedures.",
        },
      ],
    },
  ],
  companions: ["downloads-flow"],
};
