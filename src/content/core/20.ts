import type { Unit } from "@/lib/workbench/content-types";

export const chapter20: Unit = {
  id: "ch-20",
  source: "core",
  chapter: "20",
  title: "Context menus, Services, and sharing",
  phase: "Capture and preview",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "These are entry points into capability, not separate automation languages of their own — they are doors, not destinations.",
        },
        {
          kind: "ul",
          items: [
            "Entry point — Best starting context",
            "Finder Quick Actions — Selected files that need a transformation or filing operation.",
            "Services — Selected text, files, or other supported content inside an app.",
            "Share Sheet — Content that should be handed to another app or destination.",
            "Spotlight or menu bar — A named operation you want to launch without locating its app first.",
          ],
        },
        {
          kind: "p",
          text: "A Service appears when its declared input matches your current selection and the host app exposes that context to the system. Select some text, open the app-name menu next to the Apple menu, then Services, to see what's available for that selection right now. Configure service availability and keyboard assignments in System Settings > Keyboard > Keyboard Shortcuts > Services. Missing context (you selected a file when the Service expects text, for instance) or a disabled entry can each independently explain why a Service you remember using doesn't appear.",
        },
      ],
    },
    {
      id: "same-workflow-several-doors",
      type: "orient",
      title: "Same workflow, several doors",
      body: [
        {
          kind: "p",
          text: "A Shortcut that receives images can be offered simultaneously as a Finder Quick Action, a Service, and a Share Sheet entry — but these routes pass genuinely different input types: a file reference, a URL, and selected text are not interchangeable just because they happen to relate to the same underlying document in your head. A Shortcut built to accept Files input will not appear as an option when you've selected plain text, even if that text happens to be a file path typed out as a string.",
        },
        {
          kind: "p",
          text: "Define the accepted input narrowly in the Shortcut's own settings, and decide deliberately what happens when there is no matching content. A prompt asking you to manually select a file is useful for a manual launch from the menu bar or Spotlight; an automated, unattended run (chapter 33) should instead stop cleanly with a clear reported outcome, or receive its input directly from whatever triggered it, rather than hanging on a prompt nobody is present to answer.",
        },
      ],
    },
    {
      id: "a-copy-versus-continuing-access",
      type: "orient",
      title: "A copy versus continuing access",
      body: [
        {
          kind: "p",
          text: 'Sending a file through Mail or AirDrop generally creates a delivered copy at the recipient\'s end — from that moment, your two copies are independent, and editing yours later does not change theirs. Sharing an iCloud document for collaboration instead grants ongoing access to a continuing shared item, subject to whatever permissions you chose (view only, or edit) when you set up the share. Check the sharing mode, the recipient, and the permission level before sending anything sensitive. "I revised my original afterward" does not retroactively update a copy someone already received through Mail or AirDrop — those are genuinely separate files from that point forward.',
        },
        {
          kind: "note",
          text: "**WORKS WITH —** Finder selection > Quick Action > processing > Preview inspection > Share Sheet. Keeping the share step itself deliberate and manual is useful whenever destinations or recipients vary from one time to the next. Build toward an automated export only after considering whether automatic delivery to a specific person or place is actually what you want — an automated share to the wrong recipient is a mistake you cannot take back the way an automated file move usually can be.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Use services in apps](https://support.apple.com/guide/mac-help/use-services-in-apps-mchlp1012/mac). Undated, accessed September 6, 2026.",
        },
      ],
    },
  ],
};
