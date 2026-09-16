import type { Unit } from "@/lib/workbench/content-types";

export const chapter05: Unit = {
  id: "ch-05",
  source: "core",
  chapter: "05",
  title: "Tags — across devices and transfers",
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
          text: "Metadata is useful, but a file's meaning should remain recoverable without it — because metadata is exactly the part of a file most likely to be silently dropped by an intermediate system.",
        },
      ],
    },
    {
      id: "toolbar-contextual-menu-keyboard-and-drag-and-drop-acces",
      type: "reference",
      title: "Toolbar, contextual-menu, keyboard, and drag-and-drop access — a full reference",
      requiredForProgress: false,
      body: [
        {
          kind: "p",
          text: "You now have every access path for tags in one place:",
        },
        {
          kind: "ul",
          items: [
            "**Toolbar:** add a Tags button to the Finder toolbar (View > Customize Toolbar) for one-click access on a selection.",
            "**Contextual menu:** right-click (or Control-click) any file or selection and choose Tags.",
            "**Sidebar drag:** drag a file directly onto a tag's sidebar entry to apply it without opening a menu.",
            "**Keyboard:** Control-1 through Control-7 toggle your seven Favorite Tags on the current Finder selection; Control-0 removes all tags.",
            "**Save dialog:** many apps expose a Tags field in Save/Save As, applying the tag at creation time.",
            "**Get Info:** the Tags field in a file's Info window (Command-I) both shows and lets you edit tags — useful when you want to confirm a file's full tag set without opening a menu that only shows Favorites.",
          ],
        },
      ],
    },
    {
      id: "find-and-inspect-tagged-files",
      type: "orient",
      title: "Find and inspect tagged files",
      body: [
        {
          kind: "p",
          text: "Click a tag in the Finder sidebar, or type its name into Finder search and choose the tag suggestion that Finder proposes as you type. Add Kind or location criteria for a narrower result. A visible tag column (List view) makes batch review easier than opening Get Info file by file. Removing a sidebar entry, removing a tag from one file, and deleting a tag from your vocabulary are three different operations with three different scopes — confusing them is how people accidentally strip tags from files they meant to keep organized.",
        },
        {
          kind: "p",
          text: "On iPhone or iPad, use the Files app: open the location, touch and hold a file, and choose Tags. Browse includes tag-based views similar to the Finder sidebar. Use a sample file in iCloud Drive to check that your intended tags appear across your own devices before applying a large batch — small interface differences between platforms are easy to miss until you are staring at a tag that did not sync the way you expected.",
        },
      ],
    },
    {
      id: "transfer-is-a-separate-test",
      type: "orient",
      title: "Transfer is a separate test",
      body: [
        {
          kind: "p",
          text: "Finder metadata and file contents are separate things, and it is easy to assume a successful file transfer proves the metadata survived when it does not. An external filesystem (exFAT, for instance, used by many USB drives), a ZIP utility, a cloud provider other than iCloud, an email attachment flow, or a non-Mac recipient may not retain or expose the same metadata your Mac assigned. A successful content transfer alone does not prove the tag system survived the trip. Do not assume an iCloud tag view implies an identical interface on iCloud.com or on Windows — the Windows iCloud client and iCloud.com's web interface do not expose Finder tags the way the Files app or Finder does.",
        },
        {
          kind: "p",
          text: "**Practical test:** create a disposable file with two named tags, transfer it using your actual route (the specific drive, the specific cloud service, the specific ZIP tool), and inspect the destination on the receiving device. Repeat after a round trip if that is your workflow — tags can survive an outbound transfer but not a return trip through the same pipeline. For anything that must outlive a particular Mac or a particular tool version, use meaningful filenames and, for a real archive, a small companion manifest file (even a plain-text index) rather than relying on tags alone to carry essential information forward.",
        },
      ],
    },
    {
      id: "what-survives-what-does-not-a-compact-reference",
      type: "reference",
      title: "What survives, what does not — a compact reference",
      requiredForProgress: false,
      body: [
        {
          kind: "ul",
          items: [
            "Route — Tags likely to survive — Notes",
            "iCloud Drive, Mac to Mac (same account) — Yes — Native Apple sync path; verify with your own test file regardless.",
            "iCloud Drive viewed via Windows iCloud app — Partial/no — Interface differs from Finder; do not assume parity.",
            "AirDrop to another Mac — Often, but test — Depends on destination handling; treat as unverified until checked.",
            "ZIP archive, any platform — Usually not — ZIP is a content format; Finder tags are extended attributes most zip tools drop.",
            "Email attachment — No — Attachments are copies of file content, not the original file with its metadata.",
            "External drive formatted exFAT/FAT32 — No — These filesystems have no field for macOS extended attributes.",
            "External drive formatted APFS or Mac OS Extended — Yes — Apple-native filesystems preserve extended attributes including tags.",
          ],
        },
      ],
    },
    {
      id: "icloud-drive-iphone-ipad-and-external-drive-behavior",
      type: "orient",
      title: "iCloud Drive, iPhone/iPad, and external-drive behavior",
      body: [
        {
          kind: "p",
          text: "iCloud Drive is the sync path Apple documents for tags following a file across your own Apple devices signed into the same account. An external drive's tag support depends on its filesystem, shown above — always confirm the format in Finder's Get Info for the drive before relying on tags surviving a copy to it.",
        },
      ],
    },
    {
      id: "useful-organizational-models-and-a-recommended-starter-s",
      type: "decision",
      title: "Useful organizational models, and a recommended starter system",
      body: [
        {
          kind: "p",
          text: "Combine a small, named starter vocabulary (chapter 03's four tags are enough for most people) with the folder-versus-tag decision table from chapter 04. Add a tag only when an existing folder and filename genuinely cannot answer the question you are asking. Retire a tag the moment it stops answering a real recurring question — an unused tag is quiet clutter, not neutral.",
        },
      ],
    },
    {
      id: "extend-carefully",
      type: "orient",
      title: "Extend carefully",
      body: [
        {
          kind: "p",
          text: "Hazel can add and remove named tags; prefer that over a legacy color-label action when preserving multiple tags matters, since a color-label action in older automation tools can silently replace a file's entire tag set with a single color rather than adding to it. Advanced native scripts can use Foundation's `tagNames` resource property to read the existing name list, add or remove only the intended entry, and write back the merged set — this is the technique that avoids accidentally destroying unrelated tags a file already carried.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Review tag > Finder query > saved Smart Folder > optional Hazel monitoring. Begin with a real inbox folder if you want an easily bounded automation scope — a tag-only automation has to search your entire Mac, while a folder-scoped one only has to watch one place.",
        },
        {
          kind: "note",
          text: "**GO DEEPER —** If you maintain a large tag vocabulary across many collaborators, consider whether a shared external system (a project tracker, a shared spreadsheet) is actually a better fit than Finder tags, which are local metadata tied to your account and not natively shared with other users of the same files unless those files live in iCloud Drive under your account.",
        },
        {
          kind: "p",
          text: "Sources: Noodlesoft, [Actions](https://www.noodlesoft.com/manual/hazel/rules/actions/); Apple Developer, [tagNames](https://developer.apple.com/documentation/foundation/nsurl/1780166-tagnames). Undated; accessed September 6, 2026. Transfer test and survival table are recommendations based on documented filesystem and sync behavior, not independently verified for every combination.",
        },
      ],
    },
  ],
};
