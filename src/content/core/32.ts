import type { Unit } from "@/lib/workbench/content-types";

export const chapter32: Unit = {
  id: "ch-32",
  source: "core",
  chapter: "32",
  title: "Quick Actions and Services in practice",
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
          text: "Package a working Shortcut around the specific context where you will actually use it — the entry points from chapter 20 are how you do that.",
        },
        {
          kind: "p",
          text: "In a Shortcut's Details pane, enable Use as Quick Action, and select the Finder or Services entry point you want it to appear in. Declare Files or Folders input explicitly whenever Finder access genuinely requires it. Add a keyboard shortcut assignment if it saves a repeated trip through a menu you use often. Enable Show in Share Sheet only when that specific workflow genuinely accepts the kind of content a Share Sheet actually hands it — enabling it indiscriminately just adds noise to a menu you'll see constantly.",
        },
      ],
    },
    {
      id: "worked-example-file-selected-downloads",
      type: "try",
      title: "Worked example: File selected downloads",
      body: [
        {
          kind: "ol",
          items: [
            "Select a few completed files in Downloads. Invoke the Quick Action.",
            "Choose the destination project once, for the whole batch. Optionally ask whether the files need a descriptive prefix added; leave their original file extensions intact regardless.",
            "Show the proposed new names and destination before doing anything irreversible. Skip an item on an existing-name collision, or preserve both files under distinct names — never silently overwrite an existing file.",
            "Move the original files only after the proposal has been reviewed and confirmed correct. Return the new locations and report any skipped items explicitly, rather than reporting simple success regardless of what actually happened.",
          ],
        },
        {
          kind: "p",
          text: "This remains a genuinely useful first automation specifically because project classification stays a human decision throughout, while the repetitive handling — the renaming, the moving, the collision checks — becomes reliably consistent. If different files in a selection actually need different destinations, run smaller batches or handle files individually rather than assuming one batch selection implies every file in it belongs to the same project.",
        },
      ],
    },
    {
      id: "when-the-action-does-not-appear",
      type: "orient",
      title: "When the action does not appear",
      body: [
        {
          kind: "p",
          text: "Check first whether the selected item's type actually matches the Shortcut's declared accepted input types. Confirm the correct entry point (Quick Action versus Service) is actually enabled for it. Search System Settings for the specific Finder extension or Services entry if it seems disabled there — exact names and their placement in these settings panels can shift somewhat across macOS releases. Try running the Shortcut directly from inside its own editor to distinguish a genuine processing error inside the Shortcut from a separate menu-registration problem where the Shortcut itself works fine but isn't appearing where you expect it.",
        },
        {
          kind: "p",
          text: "For a text Service specifically, test it first with plain selected text inside TextEdit before expecting every third-party app to expose identical text-selection behavior to Services — not every app implements Services support for text selection equally completely, and a failure in one specific app doesn't necessarily mean the Service itself is broken. A keyboard-shortcut conflict (two things both claiming the same key combination) is a genuinely separate problem from an action being entirely missing from a menu — diagnose which one you actually have before troubleshooting further.",
        },
      ],
    },
    {
      id: "keep-delivery-portable",
      type: "try",
      title: "Keep delivery portable",
      body: [
        {
          kind: "p",
          text: "Turn on Shortcuts iCloud Sync if you want your Shortcut definitions themselves available on your other devices too. That sync does not, by itself, make a Mac-only action — a local file path, an AppleScript step, or a shell action — actually available or runnable on iPhone or iPad; those platform-specific actions simply won't run there even though the Shortcut definition itself did sync over. Test the portable, cross-platform section of any such Shortcut directly on the other device, and keep genuinely device-specific processing logic in a clearly separate Shortcut rather than one you're hoping degrades gracefully.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Finder search (chapter 06) finds the initial set of files; the Quick Action receives that set as its input; the processor Shortcut (chapter 31) moves or converts it; a returned file list at the end supports both verification and further sharing without having to search for the output all over again.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Run a Shortcut while working](https://support.apple.com/guide/shortcuts-mac/run-a-shortcut-apd1ba07f2a6/mac). Undated; accessed September 6, 2026. [Services](https://support.apple.com/guide/mac-help/use-services-in-apps-mchlp1012/mac), [Shortcuts sync](https://support.apple.com/guide/shortcuts-mac/sync-shortcuts-apdf6759e948/mac). Undated; accessed September 6, 2026. Worked example is a proposed build.",
        },
      ],
    },
  ],
};
