import type { Unit } from "@/lib/workbench/content-types";

export const chapter26: Unit = {
  id: "ch-26",
  source: "core",
  chapter: "26",
  title: "Tiling and external displays",
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
          text: "Arrange the active work first; add another display or an additional workspace layer only once there's a clear, specific gain from doing so.",
        },
        {
          kind: "p",
          text: "Native tiling can be invoked by dragging a window to a screen edge, holding Option while dragging for more placement options, using the green window button's hover menu, or choosing Window > Move & Resize from the menu bar. Tiling settings in Desktop & Dock govern edge-drag behavior and the margins between tiled windows. An individual app's own minimum window size can limit exactly how the arrangement is allowed to divide the screen — not every pairing of two apps can tile down to an even 50/50 split if one of them refuses to shrink that far.",
        },
        {
          kind: "p",
          text: "A tiled window still occupies the ordinary Desktop area, alongside any other visible windows; full screen instead creates an entirely distinct full-screen workspace of its own. Split View pairs two specifically supported apps together within that same full-screen style. Use ordinary tiled windows instead of full screen or Split View whenever you still need occasional, casual access to nearby Desktop items or other flexible additional windows that a full-screen space would otherwise hide from view entirely.",
        },
      ],
    },
    {
      id: "with-an-external-display",
      type: "try",
      title: "With an external display",
      body: [
        {
          kind: "p",
          text: "Check the arrangement in Displays settings so that pointer movement between the laptop screen and the external display corresponds correctly to their actual physical placement on your desk — an unmatched arrangement makes the cursor jump in an unintuitive direction crossing the boundary. Choose a readable scaling setting deliberately, rather than automatically choosing whichever option shows the largest possible desktop area — a scaling level that fits the most content is not the same as one that's comfortable to actually read at your typical viewing distance. A 13-inch MacBook Air's external-display support limits (resolution, refresh rate, and how many simultaneous external displays are supported) depend on the exact model, chip generation, and whether the lid is open or closed at the time; identify your specific model's documented limits before buying hardware for a multi-monitor setup.",
        },
        {
          kind: "p",
          text: 'With "Displays have separate Spaces" enabled (Mission Control settings), each connected display maintains its own independent space context — this same setting is also required for Stage Manager to maintain independent per-display groups, as chapter 24 notes. A larger external display may reduce your practical need for hiding groups or windows at all: keep a reference visible permanently on one screen while using ordinary flexible working windows on the other.',
        },
        {
          kind: "p",
          text: "Unplugging a display changes the available layout immediately and can scatter windows in ways that are hard to predict in advance — test that specific transition once deliberately, rather than assuming an elaborate multi-display arrangement will gracefully collapse back onto the single laptop screen. A Shortcut that simply opens the right files and apps can still remain useful in that scenario even when a precise window-placement recipe doesn't survive the transition intact — see chapter 23's note on the difference between opening the right things and restoring an exact layout.",
        },
      ],
    },
    {
      id: "when-to-add-a-third-party-window-utility",
      type: "decision",
      title: "When to add a third-party window utility",
      body: [
        {
          kind: "p",
          text: "Use the native layout tools for at least a week of genuinely real work first, deliberately, before reaching for anything else. A third-party tiling utility becomes worth its own settings and its own keyboard shortcuts to learn specifically if you repeatedly need a precise arrangement or a specific keyboard-driven behavior the built-in controls genuinely don't provide — snapping to a custom grid finer than native tiling offers, for instance. Do not install a second tiling tool merely because an older guide, written before native tiling existed on this scale, predates and therefore doesn't mention Apple's now-current built-in option.",
        },
        {
          kind: "note",
          text: '**AUTOMATIC TRIGGER —** Tahoe provides a Display-connection personal-automation trigger, and the 26.4 update added a "Set Multitasking Mode" action usable within that automation. A reasonable desk-start automation could open your project folder and its associated tools specifically when a known display connects. Keep any layout-restoration logic in that automation separate and clearly scoped from the app-opening logic, and specifically test what happens on repeated connect/disconnect cycles so a loose trigger doesn\'t reopen the same set of apps and windows every single time you briefly unplug and replug the same cable.',
        },
        {
          kind: "p",
          text: "Sources: Apple, [Tile windows](https://support.apple.com/guide/mac-help/tile-windows-mchl6dbc935e/mac), [tiling settings](https://support.apple.com/guide/mac-help/change-desktop-dock-settings-mchl1cdc8a2c/mac), and [Split View](https://support.apple.com/guide/mac-help/use-full-screen-split-view-mchlp1177/mac). Undated; accessed September 6, 2026. [Stage Manager](https://support.apple.com/guide/mac-help/organize-windows-stage-manager-mchl76bd9720/mac) and [Shortcuts updates](https://support.apple.com/en-us/117626), March 26, 2026. Hardware limits are intentionally left model-specific — check your exact configuration.",
        },
      ],
    },
  ],
};
