import type { Unit } from "@/lib/workbench/content-types";

export const chapter35: Unit = {
  id: "ch-35",
  source: "core",
  chapter: "35",
  title: "AppleScript — talk to the app",
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
          text: "Prefer an app's own scripting vocabulary over clicking its interface by coordinates — a script that clicks a specific pixel position breaks the moment a window is resized or an app's layout updates.",
        },
        {
          kind: "p",
          text: "Open Script Editor and choose File > Open Dictionary. Inspect the target app's exposed objects, properties, and commands directly in that dictionary browser. Scriptability genuinely varies app to app: a visible, clickable button in an app's interface is not necessarily an exposed AppleScript command just because it's visible — and an app's own dictionary is a far more reliable source of truth than assuming every app implements the same set of verbs simply because another app you've used does.",
        },
        {
          kind: "p",
          text: "Run a small script directly in Script Editor and inspect its actual result or event log before integrating it into a larger Shortcut. A genuinely useful first task is asking Finder about its current selection, without changing any files at all:",
        },
        {
          kind: "p",
          text: 'tell application "Finder"\n    set chosenItems to selection\n    set chosenNames to {}\n    repeat with anItem in chosenItems\n        set end of chosenNames to name of anItem\n    end repeat\nend tell\nreturn chosenNames',
        },
        {
          kind: "p",
          text: "This deliberately returns names for inspection only. It deliberately does not use those returned names as unique file identifiers for any further action — two files in two different folders can easily share the exact same name, and a name alone is not a reliable way to re-locate a specific file. A production-grade processor should retain actual file references, or full explicit paths, all the way through the workflow rather than relying on names alone once they've been separated from their original location.",
        },
      ],
    },
    {
      id: "permissions-have-different-meanings",
      type: "orient",
      title: "Permissions have different meanings",
      body: [
        {
          kind: "p",
          text: "Automation permission is what lets one app control another app — this is the permission most commonly involved in interface- and app-control scripting specifically. Accessibility permission is what's commonly involved when a script needs to interact with on-screen interface elements directly, rather than through an app's own scripting dictionary. Files and Folders permissions concern access to specific protected user locations (Desktop, Documents, Downloads, and similar). Grant the specific permission that actually matches the operation you're performing, rather than reflexively granting Full Disk Access as a blanket first fix for any permission-related error you encounter — that's considerably broader access than most scripts genuinely need.",
        },
        {
          kind: "p",
          text: "In a Shortcut's Run AppleScript action, use its input handler deliberately and return output deliberately, by design, rather than by accident. If a script needs to switch the frontmost app, open a dialog, or depends on which window currently has focus, document that dependency explicitly wherever the script is used — it may be genuinely unsuitable for a fully unattended, automatic run where no person is present to handle an unexpected dialog or a focus change that didn't happen the way the script assumed it would.",
        },
      ],
    },
    {
      id: "where-it-fits",
      type: "orient",
      title: "Where it fits",
      body: [
        {
          kind: "p",
          text: "Use AppleScript specifically for app-specific document handling, for retrieving detailed app state that Shortcuts doesn't expose an action for, or for controlling a scriptable application in ways Shortcuts genuinely can't reach. Use Shortcuts itself for anything already available as a cross-app action, and for simpler data flow generally — reach for AppleScript specifically when Shortcuts' available action library falls short of a specific need, not as a default first choice. Use shell tools (chapter 36) specifically for file and text processing tasks that don't require talking to a particular GUI application at all. For named Finder tags specifically, a Foundation-based helper script (chapter 05's `tagNames` technique) can preserve a file's full existing tag set more explicitly and safely than an older, legacy color-label AppleScript property can.",
        },
        {
          kind: "note",
          text: "**DECISION —** Genuine UI scripting (driving an app by simulating clicks and keystrokes at specific screen coordinates, rather than through its scripting dictionary) is a last resort, reserved for when no supported action, no dictionary command, and no API actually solves the task any other way. It's inherently sensitive to window state, to language and localization settings, and to interface changes between app versions — build an explicit, visible failure path into any script that relies on it, rather than assuming it will keep working indefinitely.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Script Editor guide and dictionaries](https://support.apple.com/guide/script-editor/welcome/mac), [run scripts](https://support.apple.com/guide/script-editor/run-a-script-scpedt1126/mac), [track events](https://support.apple.com/guide/script-editor/record-actions-in-apps-scpedt1130/mac). Undated; checked September 6, 2026. Example is original and not Mac-tested. [Automation permissions](https://support.apple.com/guide/mac-help/change-privacy-security-settings-mh32356/mac) and Apple Developer, [tagNames](https://developer.apple.com/documentation/foundation/nsurl/1780166-tagnames). Undated; checked September 6, 2026.",
        },
      ],
    },
  ],
};
