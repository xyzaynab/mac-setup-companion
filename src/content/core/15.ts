import type { Unit } from "@/lib/workbench/content-types";

export const chapter15: Unit = {
  id: "ch-15",
  source: "core",
  chapter: "15",
  title: "A native Downloads routing recipe",
  phase: "Files in motion",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "try",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Build one reusable processor, then attach a Tahoe trigger to it — this separation (chapter 30 names it explicitly) is what makes the recipe safe to test before it runs unattended.",
        },
      ],
    },
    {
      id: "start-in-a-test-inbox",
      type: "orient",
      title: "Start in a test inbox",
      body: [
        {
          kind: "p",
          text: "Create a small Incoming Test folder and a separate Review Images folder. Put copies of three completed PNG or JPEG files and one PDF in the test inbox. The first rule should route only images; the PDF should remain untouched. This is deliberately narrow so you can recognize a wrong result immediately rather than discovering it days later in your real Downloads folder.",
        },
        {
          kind: "p",
          text: "In Shortcuts, create **Route incoming images**. Accept Files input. Use Filter Files to retain the intended image types, then Repeat with Each to process matches individually. Feed the actual file variable (not a re-typed path) to Move File, targeting Review Images. Configure the available collision behavior to preserve existing items; if the exact collision behavior can't be guaranteed by the action's own settings, add an explicit check and report the collision and skip that file rather than risking an overwrite.",
        },
        {
          kind: "p",
          text: "Before moving anything, temporarily replace the move step with Quick Look or Show Result so you can inspect the proposed set without side effects. Restore the actual move step only after the proposed set is confirmed correct. End with a short notification or result count that tells you what happened — silent success is hard to distinguish from silent failure.",
        },
      ],
    },
    {
      id: "attach-the-event",
      type: "orient",
      title: "Attach the event",
      body: [
        {
          kind: "p",
          text: "On Tahoe, create a personal automation using the Folder trigger and choose Incoming Test. Have it run the existing processor, using the event's files as input where the trigger editor offers that option. Inspect the trigger editor's actual input and run settings before relying on them — confirm whether it asks for your confirmation before running, or runs silently, and start with confirmation enabled if that's offered. Verify behavior with a newly added, completed image file.",
        },
        {
          kind: "p",
          text: "An existing backlog and a future added-file event are two different tests. Run the same processor manually on the backlog first, after verifying it on the test inbox. When ready to use it on real Downloads, change the watched location deliberately; do not assume a test automation built against Incoming Test silently starts watching your real Downloads folder on its own.",
        },
      ],
    },
    {
      id: "add-one-protection-at-a-time",
      type: "try",
      title: "Add one protection at a time",
      body: [
        {
          kind: "p",
          text: "Keep output outside the watched source folder, so the processor's own output doesn't trigger itself again. Exclude folders, unsupported formats, and any file carrying the Keep here tag if your processor implements that check (chapter 05's exclusion pattern). Do not replace a completed-file handoff with a fixed delay that merely assumes a download has finished — a large file can still be actively downloading well past a short fixed wait, and moving a partially-downloaded file mid-transfer can corrupt it.",
        },
        {
          kind: "note",
          text: "**AUTOMATIC TRIGGER —** An added-file event does not recur just because the file becomes older; it fires once, at the moment of arrival. Use a separate Time of Day review (chapter 33) for age-based organization instead. Keep unrecognized items visible rather than silently discarding them, and leave automatic deletion out of the initial setup entirely — add it later, deliberately, only once you trust the rest of the pipeline.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Tahoe automation triggers](https://support.apple.com/en-us/117626), March 26, 2026, and [action connections](https://support.apple.com/guide/shortcuts-mac/connect-actions-apdF0D0EFC3-8F0B-4E68-A445-1E1000CB8AF6/mac). Recipe is a proposed build, not an installed or Mac-tested shortcut; exact action options depend on the installed release.",
        },
      ],
    },
  ],
  companions: ["downloads-flow"],
};
