import type { Unit } from "@/lib/workbench/content-types";

export const chapter27: Unit = {
  id: "ch-27",
  source: "core",
  chapter: "27",
  title: "Widgets, Focus, and visible controls",
  phase: "Windows and display",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Give recurring information a place to be seen, and frequent actions a place to be launched from, without either becoming visual clutter competing for your attention.",
        },
        {
          kind: "p",
          text: "Add widgets by Control-clicking the wallpaper and choosing Edit Widgets, or from within Notification Center. Edit a widget's own content when the source app offers that option — point a Reminders widget specifically at the one list you actually use daily, for instance, rather than leaving it on a default that doesn't match your real workflow. Desktop widgets are not new to Tahoe by themselves; Tahoe changes their visual presentation and the surrounding system (the Liquid Glass visual treatment introduced in 26.1, per Apple's own release notes) rather than introducing the underlying capability from scratch.",
        },
        {
          kind: "p",
          text: "Notification Center is genuinely useful specifically when windows usually cover the Desktop during your normal work — that's when you'd naturally reveal Notification Center between tasks rather than needing to see something on a bare Desktop you rarely look at directly. Desktop widgets work better specifically when you naturally do see that bare Desktop surface between tasks — these are two different placements suited to two different work styles, not a strictly better-or-worse choice. iPhone widgets can appear on the Mac under the right documented conditions (proximity, network, and iOS/macOS version requirements all apply), but some interactions with them still require picking up and using the iPhone app itself directly.",
        },
      ],
    },
    {
      id: "a-purposeful-visible-setup",
      type: "try",
      title: "A purposeful visible setup",
      body: [
        {
          kind: "p",
          text: "Try Calendar for your literal next appointment and exactly one Reminders list for the current day's actual tasks — that's a genuinely useful, glanceable setup. Keep a widget on screen only if it changes what you actually notice or do as a direct result of glancing at it; a display of many overdue items all at once can be considerably less useful in practice than one short, deliberately curated, currently-relevant list. This is a design choice you make, not a limit macOS itself imposes on you.",
        },
        {
          kind: "p",
          text: "Focus controls interruptions through allowed people, allowed apps, allowed schedules, and supported app-specific filters (for instance, hiding certain email accounts while a work Focus is active). It does not organize files and it does not enforce an actual work schedule by itself — it only manages notifications and, for apps that support Focus filters, some content visibility. Configure exactly which contacts and which notifications you still want to receive before relying on a Focus as your daily working state, so you don't miss something genuinely important while a broad Focus is active. Share Across Devices, if enabled, extends your current Focus state to your other signed-in devices automatically; decide deliberately whether that's actually desirable for how you use those devices.",
        },
      ],
    },
    {
      id: "connect-information-and-action-together",
      type: "try",
      title: "Connect information and action together",
      body: [
        {
          kind: "p",
          text: 'A "Start project" Shortcut can open both the relevant folder and the note you actually need in one launch. Put it in the menu bar or Control Center specifically if that\'s genuinely easier to reach reliably than a widget that a stack of windows will usually be covering anyway. Keep the visible label concrete and specific — "Start project" beats a vague "Work" that doesn\'t tell you what it will actually do when you click it. A "Stop" or "Return later" Shortcut could prompt for one quick next-step note and then open your designated review folder, without force-closing any unsaved work in the process.',
        },
        {
          kind: "note",
          text: "**SHORTCUT POSSIBILITY —** Focus can serve as an automation trigger as well as a manual setting you toggle by hand. Avoid building a loop where a Focus-triggered Shortcut itself repeatedly changes that same Focus state, which can produce confusing, hard-to-debug repeated triggering. Start with a manually launched project Shortcut, and only add the Focus-based trigger afterward, once you're confident it genuinely adds convenience rather than a new source of confusion.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Add and customize widgets](https://support.apple.com/guide/mac-help/add-widgets-mchl52d4bf5b/mac). Undated; accessed September 6, 2026. [Set up a Focus](https://support.apple.com/guide/mac-help/set-up-a-focus-mchl613dc6e7/mac). Undated; accessed September 6, 2026. [Shortcuts launch surfaces](https://support.apple.com/guide/shortcuts-mac/welcome/mac) and [Tahoe triggers](https://support.apple.com/en-us/117626), March 26, 2026. Recipes are editorial suggestions.",
        },
      ],
    },
  ],
  companions: ["supplemental"],
};
