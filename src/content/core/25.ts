import type { Unit } from "@/lib/workbench/content-types";

export const chapter25: Unit = {
  id: "ch-25",
  source: "core",
  chapter: "25",
  title: "Spaces and Mission Control",
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
          text: "Spaces keep contexts apart; Mission Control helps you find and move among them once you have more than one.",
        },
        {
          kind: "p",
          text: "Open Mission Control with Control-Up or the Mission Control key, if your keyboard has one assigned to it. Create an additional Desktop using the `+` control that appears in the spaces strip along the top. Move a window into a different space by dragging it directly onto the target space's thumbnail within Mission Control. Control-Left and Control-Right switch spaces directly without opening the full Mission Control view; trackpad swipe gestures for the same action depend on your configured finger count in Trackpad settings.",
        },
        {
          kind: "p",
          text: "Dock > an app's contextual menu > Options > Assign To can bind that app to one specific Desktop, or make it available across every desktop instead of just one. Full-screen apps and Split View pairs also appear as their own entries in the Mission Control spaces area, alongside your ordinary Desktops. Closing a Desktop (via Mission Control) does not quit every app that had windows open there — those apps and windows relocate rather than disappearing.",
        },
      ],
    },
    {
      id: "build-a-location-you-can-remember",
      type: "try",
      title: "Build a location you can remember",
      body: [
        {
          kind: "p",
          text: "Try Desktop 1 for current work and Desktop 2 specifically for communication apps (Mail, Messages) — a deliberately small, memorable split rather than an elaborate many-space system. Keep the total number small enough that switching between them has an obvious, clear destination in your head; beyond three or four spaces, most people stop being able to reliably predict which space holds what. If a predictable left-to-right ordering genuinely helps you navigate, check Mission Control's own option for automatically rearranging spaces by most recent use, and turn that off if it's working against your mental map rather than for it.",
        },
        {
          kind: "p",
          text: "Be cautious about assigning a multipurpose browser to a single fixed Space if different browser windows in practice serve genuinely different projects — window-level placement (leaving the browser generally available across every space) may suit that mixed use better than a rigid app-level assignment to one space. A separate desktop wallpaper can serve as a helpful visual cue for which Desktop you're currently on, but the files on your actual Desktop folder are not separate per-space archives — there remains exactly one Desktop folder on disk regardless of how many virtual Desktops (Spaces) you've created to organize your windows.",
        },
      ],
    },
    {
      id: "recover-a-window-without-guessing",
      type: "orient",
      title: "Recover a window without guessing",
      body: [
        {
          kind: "p",
          text: "If an app is clearly still running (visible in the Dock, with an indicator light) but its window seems to have gone missing, open Mission Control and check its other spaces first, then check that specific app's own Window menu for a list of its open windows. Command-Tab switches between whole applications; it is not a comprehensive grid of every individual open window the way Mission Control is. A minimized or full-screen window may need one of these other, more specific navigation routes rather than a plain window-switch.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Use Mission Control as the overview, Spaces as broad fixed locations, and Stage Manager only where grouping specifically within one location genuinely helps. An app-opening Shortcut may activate an already-open window sitting in a different Space rather than creating a brand new window exactly where you currently expect one to appear — check which behavior you actually want before relying on a launch Shortcut as a substitute for manual navigation.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [keyboard shortcuts](https://support.apple.com/en-us/102650), March 10, 2026; [Spaces](https://support.apple.com/guide/mac-help/work-in-multiple-spaces-mh14112/mac). Other guides undated; checked September 6, 2026.",
        },
      ],
    },
  ],
};
