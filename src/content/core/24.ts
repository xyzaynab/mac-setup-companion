import type { Unit } from "@/lib/workbench/content-types";

export const chapter24: Unit = {
  id: "ch-24",
  source: "core",
  chapter: "24",
  title: "Stage Manager — work in small sets",
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
          text: "The useful idea is a visible active task with a small number of other recent tasks available at the edge of the screen, one click away — not a wholesale replacement for every other window system.",
        },
        {
          kind: "p",
          text: "Stage Manager brings the active app or group forward while recently used sets sit in a strip along the side. Turn it on through Control Center or Desktop & Dock settings. To group windows, bring the main window forward, then drag another window from the recent-app strip into the center to join it. Remove a window from a group by dragging it back out toward the strip. Its own settings control recent-app strip visibility, whether Desktop items are also shown, and whether an app's several windows appear together as one tile or separately, one at a time — check the edge-reveal setting when a recently used app seems to have disappeared, since a hidden strip is a common cause of that specific confusion.",
        },
      ],
    },
    {
      id: "what-workspace-problem-it-addresses",
      type: "orient",
      title: "What workspace problem it addresses",
      body: [
        {
          kind: "p",
          text: "A 13-inch laptop display often cannot show every app you're using at a comfortably readable size simultaneously — that's the actual problem Stage Manager targets. A group such as \"Preview plus Notes\" can hold your current document comparison front and center while a browser task recedes to the strip without fully closing or minimizing, keeping a visual route back to that recent work without it competing for screen space right now.",
        },
      ],
    },
    {
      id: "app-groups-limited-screen-space-and-interaction-with-oth",
      type: "orient",
      title: "App groups, limited screen space, and interaction with other layers",
      body: [
        {
          kind: "p",
          text: "Groups are built by hand, by dragging a window from the strip into the active area — macOS does not infer which windows should group together automatically based on their content or subject. On a MacBook Air's 13-inch screen specifically, keep groups genuinely small (two windows is often the practical sweet spot) — a group of four or five windows on this screen size usually just recreates the original small-screen crowding problem Stage Manager was meant to solve, only now hidden behind one extra click.",
        },
        {
          kind: "p",
          text: "Stage Manager interacts with the ordinary Desktop: the Desktop remains a place where files continue to exist even while Stage Manager's recede-and-focus visual behavior hides other windows from view — clicking the visible wallpaper area can reveal the Desktop according to your Desktop & Dock setting for that behavior. It interacts with Mission Control (still the overview and navigation tool for everything, Stage Manager included) and with Spaces (each Space can maintain its own independent Stage Manager state if you use both together). Full-screen apps and window tiling both continue to work as expected inside a single Stage Manager group.",
        },
      ],
    },
    {
      id: "external-display-behavior",
      type: "orient",
      title: "External-display behavior",
      body: [
        {
          kind: "p",
          text: "With separate Spaces per display enabled in Displays settings, each connected display can maintain its own independent Stage Manager groups — useful specifically when you dock this MacBook Air and want the external display to hold a stable arrangement genuinely independent of what you're doing on the laptop screen itself in that same moment.",
        },
      ],
    },
    {
      id: "when-it-is-useful-and-when-something-else-is-better",
      type: "orient",
      title: "When it is useful, and when something else is better",
      body: [
        {
          kind: "p",
          text: "Useful: frequent switching between a small number of visual task groups on a display too small to show them all readably at once — the exact situation a 13-inch laptop screen produces constantly. Ordinary overlapping windows are better if you frequently drag content directly between many different apps rather than switching attention between a small number of fixed groups — Stage Manager's grouping model adds friction to that particular drag-heavy workflow rather than removing it. Spaces are better for broader separation of context (work versus personal, for instance) than for the tighter, more frequent task-switching Stage Manager targets.",
        },
      ],
    },
    {
      id: "a-concrete-decision-model-and-one-recommended-starter-co",
      type: "decision",
      title: "A concrete decision model and one recommended starter configuration",
      body: [
        {
          kind: "p",
          text: "Ask: am I switching between a *small, stable* set of task groups throughout the day (Stage Manager), or do I need *broad separation* between contexts (Spaces), or do I mostly just need *two things visible side by side, right now* (tiling)? These three questions are not mutually exclusive, but usually one dominates for a given person's actual daily pattern.",
        },
        {
          kind: "p",
          text: "**Recommended starter configuration for a 13-inch screen:** leave Stage Manager off initially and use tiling plus Mission Control for one week of ordinary work. Turn Stage Manager on only if you specifically notice unrelated windows repeatedly obstructing the two or three things you actually need visible — and when you do turn it on, start with exactly one deliberately-built group (your single most common pairing) rather than trying to reorganize your entire workflow around it on day one.",
        },
        {
          kind: "note",
          text: "**DECISION —** Use Stage Manager if switching between a few small, stable visual task groups genuinely helps your specific workflow. Use Spaces for broader separation between contexts that don't need to switch as frequently. Use ordinary tiled windows if you mainly need one document beside one reference. Combining Stage Manager with Spaces and tiling, as described above, is optional — never a requirement for using any one of them well on its own.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Organize the desktop with Stage Manager](https://support.apple.com/guide/mac-help/organize-windows-stage-manager-mchl76bd9720/mac). Undated; accessed September 6, 2026. [Desktop reveal behavior](https://support.apple.com/guide/mac-help/change-desktop-dock-settings-mchl1cdc8a2c/mac) and [full-screen apps](https://support.apple.com/guide/mac-help/use-full-screen-mchlp1103/mac). Undated; accessed September 6, 2026. Decision model and starter configuration are editorial recommendations built from documented behavior.",
        },
      ],
    },
  ],
};
