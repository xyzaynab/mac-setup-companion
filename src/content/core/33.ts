import type { Unit } from "@/lib/workbench/content-types";

export const chapter33: Unit = {
  id: "ch-33",
  source: "core",
  chapter: "33",
  title: "Personal automations on Tahoe",
  phase: "Automation",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "A trigger decides when something runs; a processor decides what it actually does. Keep these two concerns in genuinely separate pieces, connected deliberately, rather than building one large monolithic automation that mixes both.",
        },
        {
          kind: "p",
          text: "Tahoe supports Mac personal-automation triggers including Folder, File, Time of Day, External Drive, Display, App, Focus, and Stage Manager events. The exact set of available trigger choices differs somewhat from what's offered on mobile devices, since some triggers are meaningful only on a Mac. Test the processor Shortcut thoroughly on its own first, exactly as described in chapters 15 and 31, then connect its Tahoe trigger only once you already trust the processor's behavior in isolation.",
        },
        {
          kind: "ul",
          items: [
            "Trigger choice — Useful design / important boundary",
            "Folder arrival — Route a narrow, well-understood class of newly completed files. Do not treat mere arrival in the folder as proof a download has actually finished completely.",
            "File modification — Refresh a derived output file when its source changes. Keep that output in a separate location so it doesn't loop back and re-trigger the same rule on itself.",
            "Time of Day — Recheck a review queue, or generate a standing inbox report. This kind of trigger can and will revisit files you've already looked at before.",
            "External Drive — Open a specific project's folder, or start a verified import plan, once the expected drive is actually available and mounted.",
            "Display or Focus — Open the right tools for a specific work context. Avoid a trigger that repeatedly resets the user's current, active work state every time it fires.",
          ],
        },
      ],
    },
    {
      id: "recipe-a-weekly-review-not-a-deletion-rule",
      type: "try",
      title: "Recipe: a weekly review, not a deletion rule",
      body: [
        {
          kind: "p",
          text: "Create **Review inbox**. Get the intended folder's actual current contents. Restrict the candidates using your chosen, explicit date policy. Show the resulting candidates, or at minimum a count, rather than acting on them silently. Keep this first version entirely read-only while you're still building trust in it. Attach a Time of Day trigger for a time your Mac is normally actually in active use, and inspect whatever run-confirmation settings the trigger editor offers — start with confirmation required if that option exists, and only remove it once you trust the rule's behavior.",
        },
        {
          kind: "p",
          text: 'After several genuinely successful, observed runs, consider adding a separate follow-up action that moves the selected candidates into a visible Review Downloads folder for you to look through. Leave the actual final keep-or-delete decision explicit and manual, made by you, always. A notification that plainly states "12 files available to review" is meaningfully more useful and more trustworthy than one that silently empties a folder on your behalf without ever telling you what it did.',
        },
      ],
    },
    {
      id: "engineer-for-repetition",
      type: "try",
      title: "Engineer for repetition",
      body: [
        {
          kind: "p",
          text: "Assume any given event can be received more than once by the system, and assume any given run can be interrupted or stop partway through for reasons outside your control. Use deterministic, predictable output names, explicitly check for an already-existing output before creating a duplicate, and skip work that's already genuinely complete where that's detectable. This property — rerunning the same task never creates an ever-growing pile of duplicate results — is called idempotence, and it is worth explicitly designing for in any automation you intend to trust running unattended.",
        },
        {
          kind: "p",
          text: "Test scheduled behavior specifically while your Mac is asleep, locked, or offline, since these are exactly the states an unattended trigger is most likely to actually encounter in practice. An interactive dialog box left in an automation's path can silently stall an otherwise fully unattended run indefinitely — nobody is there to click it, and the automation simply never completes.",
        },
        {
          kind: "note",
          text: "**SIMPLEST USEFUL CONFIGURATION —** One folder trigger for a narrow, obvious class of incoming files; one scheduled, read-only review; and one manual filing Quick Action for everything else. These three solve genuinely different timing problems (immediate arrival, periodic review, and on-demand human judgment) and they can share the same underlying processor Shortcut without needing to be merged into one large automation.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [What's new in Shortcuts 26](https://support.apple.com/en-us/117626), March 26, 2026; accessed September 6, 2026.",
        },
      ],
    },
  ],
};
