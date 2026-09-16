import type { Unit } from "@/lib/workbench/content-types";

export const SUPPLEMENTAL: Unit = {
  id: "supplemental",
  source: "supplemental",
  title: "A Mac configured around you — configuration reference",
  summary: "Shorter reset/configuration guide. Reference layer, not the canonical spine.",
  status: "populated",
  steps: [
    {
      id: "choose-your-setup-session",
      type: "orient",
      requiredForProgress: false,
      title: "Choose your setup session",
      body: [
        {
          kind: "p",
          text: "Click a chapter here, or use this PDF's outline in Preview's Table of Contents view.",
        },
        {
          kind: "p",
          text: "- [01 · Screen density without tiny text](#01--screen-density-without-tiny-text)\n- [02 · Desktop, Dock, and menu bar behavior](#02--desktop-dock-and-menu-bar-behavior)\n- [03 · Configure windows around tasks](#03--configure-windows-around-tasks)\n- [04 · Finder as a personal navigation panel](#04--finder-as-a-personal-navigation-panel)\n- [05 · Give different folders different views](#05--give-different-folders-different-views)\n- [06 · Saved searches that earn a sidebar slot](#06--saved-searches-that-earn-a-sidebar-slot)\n- [07 · Make search answer a precise question](#07--make-search-answer-a-precise-question)\n- [08 · Shortcuts for repeated friction](#08--shortcuts-for-repeated-friction)\n- [09 · Preview: a reading workspace](#09--preview-a-reading-workspace)\n- [10 · Preview: search and navigate precisely](#10--preview-search-and-navigate-precisely)\n- [11 · Preview: editing and safe output](#11--preview-editing-and-safe-output)\n- [12 · Focus and browser defaults](#12--focus-and-browser-defaults)\n- [13 · Notes and Reminders: better built-in views](#13--notes-and-reminders-better-built-in-views)\n- [14 · Free note apps: choose the right constraint](#14--free-note-apps-choose-the-right-constraint)\n- [15 · Free utilities: add one missing capability](#15--free-utilities-add-one-missing-capability)\n- [16 · Capture and automate repeatable steps](#16--capture-and-automate-repeatable-steps)\n- [17 · Startup and recovery guardrails](#17--startup-and-recovery-guardrails)\n- [18 · Your configuration, on one page](#18--your-configuration-on-one-page)",
        },
        {
          kind: "p",
          text: "## A useful stopping rule\nIf a tweak creates more remembering, searching, or accidental triggers, undo it. Keep visible cues that help you. A comfortable setup does not have to be visually empty.",
        },
      ],
    },
    {
      id: "01-screen-density-without-tiny-text",
      type: "reference",
      requiredForProgress: false,
      title: "01 | Screen density without tiny text",
      body: [
        {
          kind: "p",
          text: "**START:** keep the default resolution while improving individual controls. More visible content is useful only when it remains readable.",
        },
        {
          kind: "p",
          text: "## Separate three adjustments\n**Whole interface:** System Settings > Displays. A choice toward More Space fits more content but makes interface elements smaller. Test one step, not the maximum. Return to Default to undo. Scaled resolutions can affect performance. [Apple: display resolution](https://support.apple.com/en-euro/guide/mac-help/mchl86d72b76/mac)",
        },
        {
          kind: "p",
          text: "**Text and sidebars:** System Settings > Accessibility > Display > Text size. Set a preferred reading size, then adjust individual supported apps. This does not resize every third-party interface or the text inside every PDF. [Apple: font size and icons](https://support.apple.com/guide/mac-help/increase-font-size-and-icons-mchld786f2cd/mac)",
        },
        {
          kind: "p",
          text: "**Control visibility:** Accessibility > Display: try Reduce transparency, Show toolbar button shapes, and Show window title icons. These make backgrounds, click targets, and window identity more explicit. Try Increase contrast separately to judge its effect. [Apple: accessibility display settings](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac)",
        },
        {
          kind: "p",
          text: "## TEST / UNDO\nOpen a real PDF beside a note. Can you read it, distinguish toolbar controls, and identify the active window without leaning forward? Give the PDF more width before reducing text size. Reverse each toggle in the same pane; restore your previous text size if preferred.",
        },
        {
          kind: "p",
          text: "**OPTIONAL:** use Accessibility > Zoom or Hover Text for occasional small details instead of changing the whole workspace. [Apple: enlarge screen content](https://support.apple.com/en-gb/guide/mac-help/mchlbc4c53ca/mac)",
        },
      ],
    },
    {
      id: "02-desktop-dock-and-menu-bar-behavior",
      type: "reference",
      requiredForProgress: false,
      title: "02 | Desktop, Dock, and menu bar behavior",
      body: [
        {
          kind: "p",
          text: "**START:** make navigation predictable, keeping the cues you actually use.",
        },
        {
          kind: "p",
          text: "## Stop accidental desktop reveals\nSystem Settings > Desktop & Dock > Show Desktop: choose Only in Stage Manager on Click if wallpaper clicks unexpectedly push windows aside. Older labels include Click wallpaper to reveal desktop. Start with Stage Manager off if its grouping feels confusing.",
        },
        {
          kind: "p",
          text: "Clicking the wallpaper does not request a new Finder window. If Finder is active but no window appears, choose File > New Finder Window. That behavior alone does not establish that Finder is broken.",
        },
        {
          kind: "p",
          text: "## Stabilize the Dock\nIn Desktop & Dock, turn off suggested/recent apps if their changing positions bother you. Try a small Dock on the left to preserve document height, or bottom if easier to locate. Auto-hide saves space but removes a visible cue; my starting choice is visible with a short set of frequently used apps. [Apple: Desktop & Dock settings](https://support.apple.com/en-my/guide/mac-help/mchlp1119/mac)",
        },
        {
          kind: "p",
          text: "## Use Tahoe's menu-bar controls\nSystem Settings > Menu Bar: keep time, battery, and controls you repeatedly use. Set Focus to show when active. Try Show menu bar background for clearer separation from wallpaper. Choose Never for automatic hiding if you want menus consistently visible. [Apple: Menu Bar settings](https://support.apple.com/en-mide/guide/mac-help/-mchlad96d366/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** click the wallpaper and switch apps. Does the result match your expectation? Reverse the individual settings if not. Removing a Dock shortcut does not uninstall its app.",
        },
      ],
    },
    {
      id: "03-configure-windows-around-tasks",
      type: "reference",
      requiredForProgress: false,
      title: "03 | Configure windows around tasks",
      body: [
        {
          kind: "p",
          text: "**START:** one large working window. Add a second visible window when comparing or transferring information.",
        },
        {
          kind: "p",
          text: "## Fill versus full screen\nUse Window > Move & Resize or hover over the green window button to inspect layouts. Fill enlarges a window within the desktop; full screen gives the app a separate Space. For frequent switching, I recommend Fill. Some apps constrain supported sizes. [Apple: app windows](https://support.apple.com/guide/mac-help/work-with-app-windows-mchlp2469/mac)",
        },
        {
          kind: "p",
          text: "Native tiling offers side-by-side layouts through the green-button menu and edge dragging. Inspect the Windows controls in Desktop & Dock if dragging causes unwanted resizing. Keep only the triggers you like; test menu-based tiling first. [Apple: tile windows](https://support.apple.com/en-gb/guide/mac-help/mchlef287e5d/mac)",
        },
        {
          kind: "p",
          text: "## Make two Spaces stay where you expect\nOPTIONAL: open Mission Control, move to the Spaces bar, and add one desktop. Use Desktop 1 for current work and Desktop 2 for communications. Turn off Automatically rearrange Spaces based on most recent use in Desktop & Dock > Mission Control.",
        },
        {
          kind: "p",
          text: "For an app you want fixed to one desktop, Control-click its Dock icon > Options > Assign To > This Desktop. Leave multi-purpose apps unassigned if their documents span tasks. [Apple: multiple Spaces](https://support.apple.com/en-euro/guide/mac-help/mh14112/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** switch between a PDF, notes, and messages. If you repeatedly lose the PDF, use fewer Spaces. Restore an app's assignment to None. Removing a Space moves its windows to another desktop, rather than deleting their contents.",
        },
        {
          kind: "p",
          text: "**OPTIONAL:** Rectangle adds thirds/two-thirds layouts. On 13 inches, use those only when the narrow reference stays readable. See chapter 15.",
        },
      ],
    },
    {
      id: "04-finder-as-a-personal-navigation-panel",
      type: "reference",
      requiredForProgress: false,
      title: "04 | Finder as a personal navigation panel",
      body: [
        {
          kind: "p",
          text: "**START:** replace the generic sidebar with places you return to, without moving your entire filing system.",
        },
        {
          kind: "p",
          text: "## Choose a useful landing folder\nFinder > Settings > General > New Finder windows show: choose your active projects folder using Other, or your user folder for a broader starting point. In Advanced, choose Search the Current Folder for When performing a search. You can still select This Mac for a wider search. [Apple: Finder settings](https://support.apple.com/en-gb/guide/mac-help/mchlp2803/mac)",
        },
        {
          kind: "p",
          text: "## Build a sidebar from your real folders\nSuggested order: current project, Projects, Downloads, Documents, user folder, and the external drive you use. Drag existing folders to Favorites; drag shortcuts to reorder. Finder > Settings > Sidebar controls standard entries. Collapse sections you seldom need.",
        },
        {
          kind: "p",
          text: "The sidebar holds references, not extra copies. Control-click > Remove from Sidebar removes the shortcut, not the original folder. [Apple: customize the sidebar](https://support.apple.com/en-ie/guide/mac-help/mchl83c9e8b8/mac)",
        },
        {
          kind: "p",
          text: "## Make location visible\nFinder > View > Show Path Bar. Keep it on so a selected result reveals its containing folders. Control-click a folder in the bar to copy its pathname when you need an exact location. [Apple: file information and paths](https://support.apple.com/en-gb/guide/mac-help/mchlp1774/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** reach your current project and Downloads from two different windows. If this requires expanding many sections, simplify the sidebar. Restore standard entries in Sidebar settings or drag an original folder back into Favorites. Recents is useful as a view of recent work, but it is not a substitute for knowing a file's location.",
        },
      ],
    },
    {
      id: "05-give-different-folders-different-views",
      type: "reference",
      requiredForProgress: false,
      title: "05 | Give different folders different views",
      body: [
        {
          kind: "p",
          text: "**START:** choose the view for the decision you make in that folder.",
        },
        {
          kind: "p",
          text: "## Configure three useful cases\n**Downloads:** List view sorted by Date Added or Date Modified. Keep Name, date, Kind, and Size; remove columns that crowd the filename.",
        },
        {
          kind: "p",
          text: "**Projects:** List view sorted by Name for a stable order, or Column view when you need to see parent and child folders while navigating.",
        },
        {
          kind: "p",
          text: "**Images:** Gallery view with Preview when choosing by appearance. It is usually wasteful for long filename lists.",
        },
        {
          kind: "p",
          text: "Open the folder > View > Show View Options (Command-J). Set text size and the options available for that view. Always open in gives a folder-specific choice; Browse in influences subfolder navigation. Use as Defaults applies to that view type, not a guaranteed reset of every folder; it is unavailable for Column view. Existing subfolder overrides may need adjustment. [Apple: folder view options](https://support.apple.com/en-gb/guide/mac-help/mchldaafb302/26/mac/26)",
        },
        {
          kind: "p",
          text: "## Trim the Preview pane\nView > Show Preview, then Show Preview Options. Select a PDF or image and keep useful metadata and Quick Actions for its type. Drag the divider to adjust width; hide the pane when filenames matter more. [Apple: Finder Preview pane](https://support.apple.com/en-gb/guide/mac-help/mchl1e4644c2/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** close and reopen each folder. If one ignores your preference, inspect its own View Options. Record the original view before changing it and restore that choice to undo. There is no need to delete hidden Finder configuration files.",
        },
      ],
    },
    {
      id: "06-saved-searches-that-earn-a-sidebar-slot",
      type: "reference",
      requiredForProgress: false,
      title: "06 | Saved searches that earn a sidebar slot",
      body: [
        {
          kind: "p",
          text: "**START:** create one Smart Folder for a question you ask repeatedly. It is a saved search, not a storage destination.",
        },
        {
          kind: "p",
          text: "## Recipe: recently changed PDFs\n1. Finder > File > New Smart Folder. Select This Mac for broad scope. For project-only results, start a search from that folder and select its scope instead.\n2. Click plus to add a criterion. Choose Kind > PDF.\n3. Add Last modified date > within last > 7 days. If an attribute is not initially offered, look under Other in the attribute menu.\n4. Click Save, name it Recent PDFs, and enable Add to Sidebar.",
        },
        {
          kind: "p",
          text: "If no matches appear, widen the time range and confirm the scope. The saved search shows matching originals; it does not duplicate or gather them into a new physical folder. [Apple: create or change a Smart Folder](https://support.apple.com/en-euro/guide/mac-help/mchlp2804/mac)",
        },
        {
          kind: "p",
          text: "## Add a status without moving files\nOPTIONAL: create one Finder tag such as To review. Finder > Settings > Tags lets you rename tags and show them in the sidebar. Apply it to a few files you intend to revisit. Use a descriptive name, not color alone. [Apple: tags](https://support.apple.com/en-ie/guide/mac-help/mchlp15236/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** confirm a known matching file appears. Remove the sidebar shortcut and, if desired, the saved-search file to retire the experiment. Do not delete the matching documents. Deleting a search result acts on the real file.",
        },
        {
          kind: "p",
          text: "My recommendation: stop at one or two saved views until you actually miss another. An overfilled smart-search sidebar can recreate the original clutter.",
        },
      ],
    },
    {
      id: "07-make-search-answer-a-precise-question",
      type: "reference",
      requiredForProgress: false,
      title: "07 | Make search answer a precise question",
      body: [
        {
          kind: "p",
          text: "**START:** distinguish finding a file, finding words inside it, and finding a note inside an app.",
        },
        {
          kind: "p",
          text: "## Narrow first, then widen\nIn Spotlight try `kind:pdf invoice` or `name:invoice`. In Tahoe, open Spotlight and use Command-2 for its Files category. In Finder, check the scope: your folder or This Mac. Choose Name when you remember the filename; content search may return a file whose name seems unrelated. [Apple: narrow Spotlight results](https://support.apple.com/guide/mac-help/narrow-search-results-in-spotlight-mchl4d69efd3/mac)",
        },
        {
          kind: "p",
          text: "## Troubleshoot with a known example\n1. Pick a file you can locate manually. Search a distinctive part of its name.\n2. Confirm its disk is connected and the relevant category is enabled in System Settings > Spotlight.\n3. Check Search Privacy for an excluded location. Preserve intentional privacy exclusions.\n4. If a known, accessible file still cannot be found, reindex only the affected folder: add it to Search Privacy, wait a few seconds, then remove that same entry. Click Done. Results may remain incomplete while indexing finishes.",
        },
        {
          kind: "p",
          text: "Reindexing is a repair attempt, not routine maintenance. Apple recommends checking settings and other causes first. [Apple: Spotlight indexing, updated 28 August 2026](https://support.apple.com/en-au/102321)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** repeat the exact known-file query after indexing. Record whether name or content search failed. Restore any deliberate privacy exclusion you changed. A scan may lack searchable text; replacing the launcher is not a guaranteed fix. For words inside a PDF, use chapter 10.",
        },
      ],
    },
    {
      id: "08-shortcuts-for-repeated-friction",
      type: "reference",
      requiredForProgress: false,
      title: "08 | Shortcuts for repeated friction",
      body: [
        {
          kind: "p",
          text: "**START:** customize two commands you already use. A small remembered set is more useful than a long shortcut sheet.",
        },
        {
          kind: "p",
          text: "## Give a buried command a shortcut\nSystem Settings > Keyboard > Keyboard Shortcuts > App Shortcuts > plus. Choose Preview, enter the exact menu title, such as Add Bookmark, then choose an unused combination. Test with a PDF open.",
        },
        {
          kind: "p",
          text: "Spelling and punctuation matter. App Shortcuts maps existing menu commands; it cannot invent an action or directly launch an app. Change conflicting combinations. Remove your custom entry to undo. [Apple: custom app shortcuts](https://support.apple.com/guide/mac-help/create-keyboard-shortcuts-for-apps-mchlp2271/mac)",
        },
        {
          kind: "p",
          text: "## Make dragging easier\nOPTIONAL: Accessibility > Pointer Control > Trackpad Options > Use trackpad for dragging > Three Finger Drag. Test dragging a window by its title bar. Review Trackpad > More Gestures afterward in case navigation gestures need adjustment. Restore the previous dragging style to undo. [Apple: three-finger drag](https://support.apple.com/en-gb/102341) | [Apple: Trackpad settings](https://support.apple.com/en-ie/guide/mac-help/-mchlp1226/mac)",
        },
        {
          kind: "p",
          text: "## Protect a Hot Corner from accidents\nDesktop & Dock > Hot Corners. Hold Option while choosing an action to require Option plus movement to that corner. Try Mission Control if you repeatedly lose windows. Select the dash option to disable the corner. [Apple: Hot Corners](https://support.apple.com/en-ie/guide/mac-help/mchlp3000/mac)",
        },
        {
          kind: "p",
          text: "**TEST:** use each change during a real task before adding another. Avoid remapping a familiar key globally for a problem in only one app.",
        },
      ],
    },
    {
      id: "09-preview-a-reading-workspace",
      type: "reference",
      requiredForProgress: false,
      title: "09 | Preview: a reading workspace",
      body: [
        {
          kind: "p",
          text: "**START:** reopen where you stopped and give the document most of the width.",
        },
        {
          kind: "p",
          text: "## Set the defaults\nPreview > Settings > PDF: enable reopening at the last viewed page. For first-time documents, start with Continuous Scroll; choose Single Page for a stable page boundary. Two Pages is often too small for reading on a 13-inch display.",
        },
        {
          kind: "p",
          text: "General > Window background changes the area around the document, not a white PDF page into a dark-mode page. Grouping settings under Images apply to images; they do not promise one window for all PDFs. [Apple: Preview settings](https://support.apple.com/en-ie/guide/preview/prvw5518ecc0/mac)",
        },
        {
          kind: "p",
          text: "## Navigate, then reclaim width\nView > Table of Contents uses the PDF's existing outline. If it has none, use Thumbnails. Narrow the sidebar for navigation; Hide Sidebar for reading. View > Customize Toolbar lets you add Scale, Previous, and Next. Choose a readable scale rather than treating 100% as a target. [Apple: view PDFs and images](https://support.apple.com/guide/preview/view-pdfs-and-images-prvw11470/mac)",
        },
        {
          kind: "p",
          text: "## Set the default PDF opener\nFinder > select a PDF > File > Get Info > Open with > Preview > Change All. This changes the default for that file type; a contextual Open With choice is temporary. Undo using the same controls and your previous app. [Apple: default file-opening app](https://support.apple.com/en-euro/guide/mac-help/mh35597/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** reopen a test PDF on a later page. Confirm page and viewing mode; adjust PDF settings if distracting. Document-specific window behavior may vary. This setup is not a saved multi-window preset.",
        },
      ],
    },
    {
      id: "10-preview-search-and-navigate-precisely",
      type: "reference",
      requiredForProgress: false,
      title: "10 | Preview: search and navigate precisely",
      body: [
        {
          kind: "p",
          text: "**START:** change search mode before concluding a phrase is missing.",
        },
        {
          kind: "p",
          text: "## The overlooked search option\nType in Preview's toolbar search field. Multiple words are treated as an exact phrase. For a broader search, click the magnifying glass > Any Match. Choose Page Order to follow the document, or Search Rank to prioritize the number of matches. [Apple: find text in PDFs](https://support.apple.com/guide/preview/find-text-in-pdfs-prvw2014/mac)",
        },
        {
          kind: "p",
          text: "Try a distinctive single word first. If it works but a phrase fails, wording, spacing, or search mode may be responsible. If you cannot select text, the PDF may be a scan or have restrictions. Reindexing is not a dependable solution to either.",
        },
        {
          kind: "p",
          text: "## Keep return points\nTools > Add Bookmark marks a page; View > Bookmarks shows those targets. Use one stopping point and a few essential references. Control-click a bookmark > Delete to remove it. This is not the same as authoring a named chapter outline for every PDF reader. [Apple: PDF bookmarks](https://support.apple.com/guide/preview/bookmark-pdf-pages-prvw1087/mac)",
        },
        {
          kind: "p",
          text: "## Inspect a dense chart\nTools > Rectangular Selection, select an area, then View > Zoom to Selection. For temporary magnification use Tools > Show Magnifier; Escape dismisses it. Restore your preferred scale afterward. [Apple: viewing tools](https://support.apple.com/guide/preview/view-pdfs-and-images-prvw11470/mac)",
        },
        {
          kind: "p",
          text: "**LIMIT:** Live Text can copy recognized text from a photo in Preview, subject to language/region support. This does not establish reliable batch OCR of an entire scanned PDF or a permanently searchable exported document. [Apple: Live Text in Preview](https://support.apple.com/guide/preview/interact-with-text-in-a-photo-prvw625a5b2c/mac)",
        },
      ],
    },
    {
      id: "11-preview-editing-and-safe-output",
      type: "reference",
      requiredForProgress: false,
      title: "11 | Preview: editing and safe output",
      body: [
        {
          kind: "p",
          text: "**START:** duplicate before combining, redacting, or compressing. Preview can save changes automatically.",
        },
        {
          kind: "p",
          text: "## Make a review copy\nUse Markup for highlights and notes. My recommendation: one highlight color for relevant material, plus notes for interpretation. Preview adds annotations; it does not directly rewrite existing PDF text.",
        },
        {
          kind: "p",
          text: "Settings > PDF > Add name to annotations: choose a name you are comfortable sharing, or turn it off. Inspect existing annotations separately; this is not a promise to remove old author details.",
        },
        {
          kind: "p",
          text: "Use Redaction Selection for sensitive text, not a colored rectangle. Redaction becomes permanent after closing. Print > Save as PDF flattens annotations, but is not a substitute for redaction or a guarantee of metadata removal. Reopen the sharing copy and inspect it. [Apple: annotate and redact](https://support.apple.com/en-euro/guide/preview/prvw11580/mac)",
        },
        {
          kind: "p",
          text: "## Combine in a controlled order\nFile > Duplicate on the destination PDF. In both PDFs choose View > Thumbnails. Drag selected thumbnails into the destination sidebar; verify order and page count. Save with a distinct name. [Apple: combine PDFs](https://support.apple.com/en-gb/guide/preview/prvw43696/mac)",
        },
        {
          kind: "p",
          text: "## Compress the sharing copy\nFile > Export > Quartz Filter > Reduce File Size. Use a new filename. Compare tiny text and images against the original: compression can lower quality, and savings vary. [Apple: reduce PDF size](https://support.apple.com/guide/preview/reduce-the-size-of-a-pdf-prvw1509/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** inspect the saved output, not just the editing window. Keep the original as the recovery route; do not depend on Undo after closing a redacted document.",
        },
      ],
    },
    {
      id: "12-focus-and-browser-defaults",
      type: "reference",
      requiredForProgress: false,
      title: "12 | Focus and browser defaults",
      body: [
        {
          kind: "p",
          text: "**START:** one manually activated Focus before adding schedules.",
        },
        {
          kind: "p",
          text: "## Configure the exceptions\nSystem Settings > Focus > Add Focus > Custom. Choose Allowed People and Allowed Apps; preserve important calls and reminders. Review time-sensitive notifications rather than assuming they pass through. Test with a harmless scheduled reminder.",
        },
        {
          kind: "p",
          text: "For predictable rules, start without Intelligent Breakthrough & Silencing where available. Review Share across devices because changes may affect other devices. Turn the Focus off to undo its active effect. [Apple: set up a Focus](https://support.apple.com/guide/mac-help/set-up-a-focus-to-stay-on-task-mchl613dc43f/mac)",
        },
        {
          kind: "p",
          text: "## Switch browser context with the Focus\nOPTIONAL for Safari: create a work Tab Group, then System Settings > Focus > your Focus > Focus Filters > Add Filter > Safari. Choose the Tab Group and decide whether external links should open there. This selects browsing context; it is not a strict website blocker. [Apple: Safari Focus Tab Groups](https://support.apple.com/en-gb/guide/safari/ibrw36c4d917/mac)",
        },
        {
          kind: "p",
          text: "## Give difficult websites their own defaults\nSafari > Settings > Websites: review Page Zoom, Reader, Auto-Play, and Notifications. Start with one frequent site. Larger site-specific zoom may be more comfortable than changing the whole display. Reader availability depends on the page. Undo in the same site's settings. [Apple: website settings](https://support.apple.com/en-ie/guide/safari/ibrwe2159f50/mac)",
        },
        {
          kind: "p",
          text: "**TEST:** turn Focus on and open a link from another app. Check where it lands, then turn Focus off and confirm your usual context returns. Add a schedule only after the manual setup behaves correctly.",
        },
      ],
    },
    {
      id: "13-notes-and-reminders-better-built-in-views",
      type: "reference",
      requiredForProgress: false,
      title: "13 | Notes and Reminders: better built-in views",
      body: [
        {
          kind: "p",
          text: "**START:** improve your existing views before migrating a library.",
        },
        {
          kind: "p",
          text: "## Notes: show unfinished material\nFile > New Smart Folder. Try a To review tag filter, Date Edited, or an Untagged Notes Only view for loose captures.",
        },
        {
          kind: "p",
          text: "Create a new Smart Folder rather than converting an existing folder: conversion moves and tags its notes and cannot be undone. Smart Folders reference notes in their original folders; they cannot themselves be shared or locked. [Apple: Notes Smart Folders](https://support.apple.com/guide/notes/use-smart-folders-apd58edc7964/mac)",
        },
        {
          kind: "p",
          text: "## Reminders: show the next useful set\nAdd List > List Type > Smart List. Try Date > Relative Range > In the Next 7 Days, including overdue items if useful. Choose all versus any carefully when combining filters.",
        },
        {
          kind: "p",
          text: "These capabilities require updated iCloud reminders; other accounts may differ. Create a new view instead of converting an existing list, since conversion can alter where reminders and subtasks live. [Apple: Reminders Smart Lists](https://support.apple.com/en-nz/guide/reminders/remnfec66479/mac)",
        },
        {
          kind: "p",
          text: "In Reminders, View > Show Smart List lets you hide standard smart views you never use. Keep only views that help you decide what to do. [Apple: reminder list customization](https://support.apple.com/en-euro/guide/reminders/remn8f00ee72/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** add one harmless tagged note or dated reminder and confirm it appears. Deleting the custom smart view leaves underlying items; deleting a real note or reminder is different. Restore hidden standard views from the View menu.",
        },
      ],
    },
    {
      id: "14-free-note-apps-choose-the-right-constraint",
      type: "reference",
      requiredForProgress: false,
      title: "14 | Free note apps: choose the right constraint",
      body: [
        {
          kind: "p",
          text: "**START:** choose one main note app. Bear and Obsidian are alternatives to evaluate, not required additions.",
        },
        {
          kind: "p",
          text: "## Bear | a focused local writing environment\n**Free:** local notes, Markdown, tags, three themes, and TXT, Markdown, TextBundle, and RTF exports. **Pro:** iCloud sync, search inside images/PDFs, and additional exports including PDF and DOCX.",
        },
        {
          kind: "p",
          text: "Suggested experiment: five new notes, one capture tag, a few topic tags, and heading folding in a longer note. Pin only tags you revisit. Export one note before committing a library. If free phone-to-Mac sync is required, Bear's free tier does not meet it. [Bear: features and free/Pro comparison](https://bear.app/)",
        },
        {
          kind: "p",
          text: "## Obsidian | local files and deeper customization\n**Free:** core app for personal and commercial use; no required account. **Paid extras:** Obsidian Sync and Publish. Local storage is not itself a backup or cross-device syncing.",
        },
        {
          kind: "p",
          text: "Suggested experiment: one vault, a small folder set, and built-in features. Add a community plugin only when you can name its benefit. Choose Obsidian if file ownership and extensibility justify the additional setup. [Obsidian: pricing and included features](https://obsidian.md/pricing)",
        },
        {
          kind: "p",
          text: "## Decide after one real task\nWrite a page, find it the next day, and export it. Which app makes those actions easiest? That is a better test than a theme gallery.",
        },
        {
          kind: "p",
          text: "**UNDO:** keep your original library intact during the trial. Export useful test notes before removing an app. No app here is established as universally best for ADHD; these recommendations reflect fit, cost boundaries, and setup burden.",
        },
      ],
    },
    {
      id: "15-free-utilities-add-one-missing-capability",
      type: "reference",
      requiredForProgress: false,
      title: "15 | Free utilities: add one missing capability",
      body: [
        {
          kind: "p",
          text: "**START:** choose a specialist utility or Raycast's broader toolkit, rather than installing overlapping tools automatically.",
        },
        {
          kind: "p",
          text: "## Rectangle | precise window placement\nFree/open source; Pro is a separate paid product. Free features include thirds/two-thirds, maximize/restore, shortcuts, and snapping. Try three layouts: large, left two-thirds, right third. Export your configuration when satisfied.",
        },
        {
          kind: "p",
          text: "Accessibility permission allows window movement. If native and Rectangle edge-drag triggers compete, disable one. Rectangle does not move windows between Spaces. Undo by quitting it and restoring native choices. [Rectangle: download](https://rectangleapp.com/) | [Developer: features and permissions](https://github.com/rxhanson/Rectangle)",
        },
        {
          kind: "p",
          text: "## Maccy | dedicated clipboard history\nFree from official GitHub releases; the App Store edition is paid to support development. Requires Sonoma 14 or later. Set one history shortcut and pin only non-sensitive snippets. Automatic pasting uses Accessibility permission.",
        },
        {
          kind: "p",
          text: "Use maccy.app and its links: the developer warns about malicious lookalike domains. Learn pause and clear-history controls before real use. Undo by clearing history if desired, quitting, and removing its login entry. [Maccy: official site](https://maccy.app/) | [Developer: downloads and safety notice](https://github.com/p0deje/Maccy)",
        },
        {
          kind: "p",
          text: "## Raycast | an alternative to several utilities\nFree core includes window management, snippets, quicklinks, and clipboard history. Pro adds Cloud Sync, custom window commands, and expanded limits. Start with three commands. Review each extension's permissions; it is not a guaranteed repair for missing files. [Raycast: free versus Pro](https://manual.raycast.com/billing)",
        },
        {
          kind: "p",
          text: "**BUILT-IN FIRST:** Tahoe Spotlight includes a clipboard browsing category. Try it before installing a clipboard utility. Retained history deserves a privacy decision. [Apple: Spotlight](https://support.apple.com/en-au/guide/mac-help/mchlp1008/mac)",
        },
      ],
    },
    {
      id: "16-capture-and-automate-repeatable-steps",
      type: "reference",
      requiredForProgress: false,
      title: "16 | Capture and automate repeatable steps",
      body: [
        {
          kind: "p",
          text: "**START:** configure where output goes before automating what happens to it.",
        },
        {
          kind: "p",
          text: "## Redirect screenshots\nCreate a Screenshots folder. Shift-Command-5 > Options > Save to > Other Location: choose it. Try Remember Last Selection for repeated captures. Keep Show Floating Thumbnail only if you use it to mark up or drag captures.",
        },
        {
          kind: "p",
          text: "Take a test screenshot and check its destination. Undo by selecting your old destination in Options. [Apple: screenshot options](https://support.apple.com/en-gb/guide/mac-help/mh26782/mac)",
        },
        {
          kind: "p",
          text: "## Replace repeatedly typed text\nSystem Settings > Keyboard > Text Replacements. Add an unusual trigger such as `;followup` for a phrase you often type. Test in your actual app: replacement works in many apps, not every field. Avoid passwords or other secrets. Delete the entry to undo. [Apple: text replacements](https://support.apple.com/en-ie/guide/mac-help/mh35735/mac)",
        },
        {
          kind: "p",
          text: "## Build one small shortcut\nOPTIONAL: in Shortcuts create a new shortcut and search for actions such as Open App and Open URLs. A useful starting recipe opens your writing app and one project webpage. Name it descriptively and run manually before adding a trigger.",
        },
        {
          kind: "p",
          text: "Available actions depend on installed apps. This opens destinations; it does not promise exact window positions or every prior document. Remove the shortcut to undo. [Apple: create a shortcut](https://support.apple.com/en-euro/guide/shortcuts-mac/apd84c576f8c/mac)",
        },
        {
          kind: "p",
          text: "**BOUNDARY:** leave file deletion out of the first setup. Later, test any rename/move automation on copies with a small explicit input set. Do not apply age-based trash rules to your whole Downloads folder.",
        },
      ],
    },
    {
      id: "17-startup-and-recovery-guardrails",
      type: "reference",
      requiredForProgress: false,
      title: "17 | Startup and recovery guardrails",
      body: [
        {
          kind: "p",
          text: "**START:** remove unwanted foreground launches without disabling services you depend on.",
        },
        {
          kind: "p",
          text: "## Separate login windows from background work\nSystem Settings > General > Login Items & Extensions. Remove unneeded Open at Login entries. Review background items separately: disabling them may affect updates or syncing. Identify publisher and purpose before changing an unfamiliar item. [Apple: login items](https://support.apple.com/en-euro/guide/mac-help/-mh15189/mac)",
        },
        {
          kind: "p",
          text: "**TEST / UNDO:** record original entries, then check the next normal login. Confirm sync and backup still work. Add an item back with plus or restore its background switch. Do not switch off every service to troubleshoot a temporary slowdown.",
        },
        {
          kind: "p",
          text: "## Protect your recovery route\nBefore bulk file moves, confirm a recent completed backup. Time Machine is in General > Time Machine. Setup may require erasing a disk: stop if it contains files you need. Do not repurpose your LaCie drive without checking its contents. Keep an encryption password recoverable. [Apple: Time Machine](https://support.apple.com/en-us/104984)",
        },
        {
          kind: "p",
          text: "Do not toggle iCloud Desktop & Documents just to tidy the screen. First establish which files are local, cloud-only, or synced. Sync and a separate recoverable backup serve different purposes. [Apple: Mac backup options](https://support.apple.com/en-gb/mac-backup)",
        },
        {
          kind: "p",
          text: "## A brief iMac note\nA 2017 iMac is not a Target Display Mode monitor. A cable alone will not enable that mode. Other remote-display routes have separate requirements; do not buy an adapter on this assumption. [Apple: Target Display Mode requirements](https://support.apple.com/en-gb/105126)",
        },
      ],
    },
    {
      id: "18-your-configuration-on-one-page",
      type: "reference",
      requiredForProgress: false,
      title: "18 | Your configuration, on one page",
      body: [
        {
          kind: "p",
          text: "Use this as a decision record. Leave irrelevant settings unchanged.",
        },
        {
          kind: "p",
          text: "## Session one: predictability\nChoose a window layout in chapter 03. Set Finder's landing folder and sidebar in chapter 04. Configure two important folders in chapter 05. Test these changes in ordinary work before adding more.",
        },
        {
          kind: "p",
          text: "## Session two: retrieval and reading\nBuild one saved PDF search in chapter 06. Test a known-file search in chapter 07. Configure Preview's last-page behavior, toolbar, and search mode in chapters 09-10.",
        },
        {
          kind: "p",
          text: "## Session three: selective upgrades\nChoose one Focus, one capture destination, and at most one optional app using chapters 12 and 14-16. If the built-in feature meets your need, leave the optional app uninstalled.",
        },
        {
          kind: "p",
          text: "## Record what changed\n**Setting or app:** _____________________________________",
        },
        {
          kind: "p",
          text: "**Previous value:** _____________________________________",
        },
        {
          kind: "p",
          text: "**New value:** _________________________________________",
        },
        {
          kind: "p",
          text: "**What became easier:** _________________________________",
        },
        {
          kind: "p",
          text: "**Keep / undo after a real task:** __________________________",
        },
        {
          kind: "p",
          text: "## Evidence and limits\nOfficial Apple manuals and developer feature/free-tier pages were checked on 4 September 2026. Links sit beside the relevant instructions; most live manuals do not show an update date. Recommendations are editorial judgments. Features were researched, not all exercised on your files. This PDF has selectable text, links, short sections, and an outline; it is not certified PDF/UA or a clinically validated ADHD intervention.",
        },
      ],
    },
  ],
};
