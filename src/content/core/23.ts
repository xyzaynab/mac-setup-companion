import type { Unit } from "@/lib/workbench/content-types";

export const chapter23: Unit = {
  id: "ch-23",
  source: "core",
  chapter: "23",
  title: "Windows — choose the problem to solve",
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
          text: "Arrangement, grouping, separation, and navigation are four different jobs, and macOS offers a different system tuned for each one.",
        },
        {
          kind: "ul",
          items: [
            "System — Intended job / useful default",
            "Ordinary windows — Flexible overlapping work. Best when you frequently drag content between many different apps.",
            "Tiling — Arrange visible windows without overlap. Start here for a document beside a reference.",
            "Stage Manager — Keep a small active set visible while other sets recede out of the way. Try it for frequent task switching on a small display.",
            "Spaces — Separate broader contexts into distinct desktops. Useful when focused work and open communication should occupy genuinely different places.",
            "Full screen / Split View — Dedicate a whole space to one app, or to one paired view. Useful for immersive or sustained single-task work.",
            "Mission Control — Find and navigate among windows and spaces. It is an overview tool, not a storage location for anything.",
          ],
        },
      ],
    },
    {
      id: "recommended-starting-configuration",
      type: "orient",
      title: "Recommended starting configuration",
      body: [
        {
          kind: "p",
          text: 'Start with one Desktop, native tiling, and Mission Control for navigation. Tile the active document beside its reference material — this alone solves the majority of "I keep switching between two things" friction on a 13-inch display without adding any new system to learn.',
        },
        {
          kind: "p",
          text: "Try Stage Manager specifically if unrelated windows keep obstructing task switching even after tiling the pair you actually care about. Add one additional Space only if you genuinely need broader context separation — a Space for focused work, a separate one for communication apps, for instance — rather than reaching for more workspace systems before establishing whether the simplest configuration already solves your actual problem.",
        },
      ],
    },
    {
      id: "can-they-work-together",
      type: "orient",
      title: "Can they work together?",
      body: [
        {
          kind: "p",
          text: "Yes, but give each layer a distinct reason for existing rather than turning every feature on simultaneously. A workable combination: Spaces for broad contexts (work versus communication), Stage Manager for small task groups within one of those contexts, and tiling for the specific active pair of windows within a group. Full-screen apps appear as their own separate spaces in this scheme and are found through Mission Control alongside your ordinary Spaces.",
        },
        {
          kind: "p",
          text: "The combined configuration also asks you to remember more state — which Space, which Stage Manager group, which tiled pair — and that memory cost is real. If locating a specific window becomes harder than simply tolerating a little overlap would have been, simplify. You gain little from enabling every workspace feature merely because it exists; each one you add is a system you now have to actively maintain a mental model of.",
        },
        {
          kind: "caution",
          text: '**AUTOMATE THIS —** Automate opening the relevant project folder and its associated apps together as a starting point (a simple Shortcut or a Folder Action, chapters 31 and 34). Exact reconstruction of a complex window layout — precise positions, precise groupings — is a separate, genuinely harder, app- and display-dependent problem; do not confuse "opening the right apps" with "restoring the exact window arrangement," which is a much higher bar that native automation does not reliably guarantee across every app.',
        },
        {
          kind: "p",
          text: "Sources: Apple, [Window management overview](https://support.apple.com/guide/mac-help/work-in-multiple-spaces-mh14112/mac), [tiling](https://support.apple.com/guide/mac-help/tile-windows-mchl6dbc935e/mac), [Spaces](https://support.apple.com/guide/mac-help/work-in-multiple-spaces-mh14112/mac). Undated; accessed September 6, 2026. Selection guidance is editorial.",
        },
      ],
    },
  ],
};
