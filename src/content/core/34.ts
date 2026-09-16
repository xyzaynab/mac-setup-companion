import type { Unit } from "@/lib/workbench/content-types";

export const chapter34: Unit = {
  id: "ch-34",
  source: "core",
  chapter: "34",
  title: "Automator and Folder Actions",
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
          text: "Keep Automator specifically where its existing actions, or an existing workflow you already trust, already solve the job well — not as a default starting point for something new.",
        },
        {
          kind: "p",
          text: "Automator offers several distinct workflow wrappers: a plain Workflow that runs directly inside Automator itself; an Application that can accept files dropped onto it; a Quick Action that integrates with Finder and Services, functionally similar to what a Shortcut's own Quick Action setting provides; and a Folder Action that receives newly added items from a specifically watched folder. The wrapper you choose changes how the exact same underlying processing sequence gets started, without necessarily changing what that sequence actually does once started.",
        },
        {
          kind: "p",
          text: "For an entirely new Tahoe setup, Shortcuts is usually the right first place to try building an event-based workflow, per the automation ladder in chapter 30. Automator remains genuinely useful specifically for existing action libraries you already have, for older macOS versions where Shortcuts isn't available at all, and for workflows whose exact behavior you already know and trust from experience. Importing an existing Automator workflow into Shortcuts can convert its supported actions automatically; any unsupported actions are explicitly reported as such during that import and will still need a separate, alternative implementation.",
        },
      ],
    },
    {
      id: "recipe-a-deliberate-drop-folder",
      type: "try",
      title: "Recipe: a deliberate drop folder",
      body: [
        {
          kind: "p",
          text: "Create an Incoming PDFs folder and a separate Review PDFs folder. In Automator, choose the Folder Action template and attach it specifically to Incoming PDFs. Add a Filter Finder Items action for PDFs specifically, then either a native processing action or a Run Shell Script bridge into an existing Shortcut (chapter 36 covers that bridge in detail). Start with a simple notification or a written report as the only real effect, and only add the actual file-moving step afterward, once you've tested with copies rather than your real files.",
        },
        {
          kind: "p",
          text: "Do not add a Get Specified Finder Items action that permanently points at your specific test files and thereby accidentally replaces the folder's genuinely arriving new input on every run — the Folder Action wrapper is specifically what's meant to supply the newly arrived files as input; preserve that flow rather than overriding it with a hardcoded, static file list left over from testing. Any files that already existed in the folder before you attached the Folder Action will need a separate, explicit manual processing pass — a Folder Action only fires for items added after it's been attached, not for a pre-existing backlog.",
        },
        {
          kind: "p",
          text: "Use Folder Actions Setup (accessible via the folder's own contextual menu, or through Automator itself) to inspect, temporarily disable, or fully detach the folder-action connection while troubleshooting it. Test explicitly that adding one genuinely new, completed file produces exactly the expected result before trusting the setup with real, important files. A folder that gets renamed, moved, or becomes unavailable (an external drive disconnecting, for instance) can invalidate the specific assumption the watcher was originally built around, sometimes silently.",
        },
      ],
    },
    {
      id: "bridge-rather-than-duplicate",
      type: "orient",
      title: "Bridge rather than duplicate",
      body: [
        {
          kind: "p",
          text: 'A shell action inside Automator (or inside a Folder Action) can invoke your existing, already-tested Shortcut processor directly, using actual path arguments rather than reimplementing the same logic a second time in a different tool. This lets exactly the same underlying processor serve both a Finder selection and a folder-arrival event without maintaining two separate, potentially diverging implementations of the same logic. Keep this connecting "event" layer intentionally small and simple, so you can change the actual processing logic in exactly one place going forward, rather than in two.',
        },
        {
          kind: "note",
          text: '**GO DEEPER —** AppleScript-based Folder Actions (an older, still-supported mechanism, distinct from Automator\'s own Folder Action wrapper) also expose the specific list of newly incoming items directly to the event handler. Use that provided incoming-items list rather than rescanning the entire watched folder indiscriminately on every single event — rescanning everything every time is both slower and more error-prone. Remember, too, that a file-add event by itself does not implement any concept of "when this file becomes 14 days old" — that specific kind of age-based condition still needs a separate, explicitly scheduled check (chapter 33), since a Folder Action only ever fires at the moment of arrival.',
        },
        {
          kind: "p",
          text: "Sources: Apple, [Automator workflows](https://support.apple.com/guide/automator/welcome/mac); [import into Shortcuts](https://support.apple.com/guide/shortcuts-mac/import-an-automator-workflow-apd0da43cb56/mac). Undated; accessed September 6, 2026. Apple Developer, [Watching Folders](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/Folder_Actions/FolderActions.pdf), archived guide, June 13, 2016. Other guide undated; checked September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["downloads-flow"],
};
