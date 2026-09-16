import type { Unit } from "@/lib/workbench/content-types";

export const chapter21: Unit = {
  id: "ch-21",
  source: "core",
  chapter: "21",
  title: "iCloud — location, availability, recovery",
  phase: "Across devices",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Choose sync intentionally; then choose which synced files must remain locally available regardless of network conditions.",
        },
        {
          kind: "p",
          text: 'In Tahoe, open System Settings > your name > iCloud > Drive. "Sync this Mac" enables iCloud Drive generally; "Desktop & Documents Folders" expands its scope specifically to those two locations. You can use a dedicated folder inside iCloud Drive without also synchronizing your entire Desktop and Documents — these are independent toggles, and turning one on does not require turning on the other.',
        },
        {
          kind: "p",
          text: "Turning Desktop & Documents Folders off does not automatically bring all the previously-synced files back into newly created local folders in their place. Apple's own guidance states the existing files remain in iCloud Drive, and new, separate local Desktop and Documents folders are created going forward. Check both locations — the iCloud Drive copy and the new local folder — before assuming a file has moved somewhere it hasn't, and before changing organization rules that assume one or the other location.",
        },
      ],
    },
    {
      id: "choose-a-working-set",
      type: "decision",
      title: "Choose a working set",
      body: [
        {
          kind: "p",
          text: "Optimize Mac Storage allows local copies to be removed automatically when disk space is needed, replaced by a cloud-only placeholder that shows the filename but not the content locally. Keep Downloaded pins specific selected files or folders for guaranteed local availability regardless of storage pressure. Use it deliberately for the project you are actively searching or processing offline, then verify the relevant files actually open with the network deliberately disabled before relying on them during travel — don't discover a gap in your offline set at the airport.",
        },
        {
          kind: "p",
          text: 'The Mac\'s local `~/Downloads` folder and a folder literally named "Downloads" that you might create inside iCloud Drive are two different, unrelated locations that happen to share a common name — this is a frequent, genuinely confusing source of "I know I downloaded this, where is it." Check the actual download destination setting in each browser you use and on each device — saving something "on the iPad" may mean iCloud Drive, or it may mean the iPad\'s local "On My iPad" storage, and only the former is an iCloud sync location that will also appear on this Mac.',
        },
      ],
    },
    {
      id: "sync-is-not-a-complete-backup-plan",
      type: "orient",
      title: "Sync is not a complete backup plan",
      body: [
        {
          kind: "p",
          text: "Sync propagates changes, including deletions — if you delete a file from iCloud Drive on one device, that deletion propagates to every other device signed into the same account, which is precisely the behavior that makes sync alone an inadequate substitute for backup. Keep an independent backup for recovery from a mistaken change or deletion, not just from device loss. Time Machine backs up locally present data; do not assume a cloud-only placeholder file means the document's complete bytes are safely captured in a Time Machine backup — a placeholder is, by definition, mostly absent locally until downloaded, and what Time Machine cannot see locally, it cannot back up.",
        },
        {
          kind: "p",
          text: "For a genuinely separate local copy of iCloud material — one that will not track further changes to the original — use an explicit copy-and-paste operation (Command-C, then Command-V at the destination) rather than a move. Moving an item out of iCloud Drive removes it from that synced location across every device, not just this Mac; that is a relocation, not a duplication, and it is easy to do by accident with a drag that you intended as a copy.",
        },
        {
          kind: "note",
          text: "**AUTOMATE THIS —** Point any content-processing rule at a known, already-downloaded working folder, not directly at raw iCloud Drive paths that may contain cloud-only placeholders. Sync completion, local download completion, Spotlight indexing, and rule execution are four separate states that can each lag behind the others — successful arrival of a green checkmark in the sidebar does not prove all four have finished.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Desktop and Documents sync](https://support.apple.com/en-us/108931), July 27, 2026, and [turning it off](https://support.apple.com/guide/icloud/turn-off-desktop-and-documents-icd6a2b6bfb0/icloud), April 3, 2026; [Keep items downloaded](https://support.apple.com/guide/icloud/keep-files-offline-icd6a2b6bfb0/icloud), [copy iCloud information](https://support.apple.com/guide/icloud/back-up-and-recover-your-data-mmfba0996a/icloud), [Time Machine](https://support.apple.com/en-us/104984), July 6, 2026. Other guides undated, checked September 6, 2026.",
        },
      ],
    },
  ],
};
