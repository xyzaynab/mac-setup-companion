import type { Unit } from "@/lib/workbench/content-types";

export const chapter22: Unit = {
  id: "ch-22",
  source: "core",
  chapter: "22",
  title: "Continuity between devices",
  phase: "Across devices",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "A shared Apple Account can connect devices without making every interaction a manual file transfer — but each Continuity feature solves one specific, narrow need, and none of them is a general substitute for the others.",
        },
        {
          kind: "ul",
          items: [
            "Need — Start with",
            "Keep editing the same saved document — iCloud Drive, or the app's own documented sync system.",
            "Send a nearby device a copy — AirDrop.",
            "Paste a recent small piece of content — Universal Clipboard.",
            "Continue a supported app's task — Handoff.",
            "Insert a new camera capture into Mac work — Continuity photo or scan insertion.",
            "Use an iPad as extra Mac screen space — Sidecar.",
            "Keep an iPad's own apps running while using Mac input devices — Universal Control.",
          ],
        },
        {
          kind: "p",
          text: "Requirements vary by feature and by exact device model — some require specific chip generations, a specific proximity range, or a specific OS version pairing between the two devices. Check the account sign-in requirement (same Apple Account on both devices, generally), Wi-Fi, and Bluetooth requirements, plus Handoff's own specific enablement setting, in Apple's linked guide before assuming a feature will simply work between whatever two devices you happen to own. AirDrop has its own separate discoverability controls (Contacts Only versus Everyone for 10 Minutes) in Control Center or Settings that are independent of every other Continuity feature listed here.",
        },
      ],
    },
    {
      id: "capture-directly-into-the-workflow",
      type: "orient",
      title: "Capture directly into the workflow",
      body: [
        {
          kind: "p",
          text: "In a supported Mac app or Finder location, choose the import-from-device contextual command, then Take Photo or Scan Documents. Confirm the capture on the connected iPhone or iPad; the result returns automatically to the initiating Mac context — the app or folder you started from. This is faster than photographing something, transferring it via Messages or AirDrop, then importing it separately, because it skips the intermediate transfer step entirely.",
        },
        {
          kind: "p",
          text: "Alternatively, save a scan directly into your iCloud Drive inbox from the iPhone or iPad Files app. Wait for sync and local download to complete on the Mac (chapter 21's caution about cloud-only placeholders applies directly here), inspect it once it's actually local, then run your usual document Quick Action on it exactly as you would any other new file.",
        },
      ],
    },
    {
      id: "handoff-universal-clipboard-sidecar-and-universal-contro",
      type: "orient",
      title: "Handoff, Universal Clipboard, Sidecar, and Universal Control — how they differ",
      body: [
        {
          kind: "p",
          text: "**Handoff** continues a specific app's task from one device to another — the receiving device shows a Handoff icon (in the Dock or App Switcher) that resumes exactly where you left off in a supported app, rather than transferring a file. **Universal Clipboard** transfers whatever you most recently copied, as a one-shot paste available briefly on your other nearby signed-in devices — it is not a persistent shared clipboard history the way Spotlight's own clipboard search (chapter 07) is. **Sidecar** turns a nearby iPad into an additional Mac display, either mirrored or extended, with support for Apple Pencil input directly into Mac apps that accept it. **Universal Control** is closer to the opposite of Sidecar: it lets one keyboard, trackpad, or mouse control both the Mac and a nearby iPad that is still running its own separate apps, with content draggable between the two.",
        },
        {
          kind: "p",
          text: 'Do not conflate Sidecar (the iPad becomes Mac screen space) with Universal Control (the iPad keeps running its own independent apps) — they solve visibly similar-sounding "use my iPad alongside my Mac" problems in genuinely opposite ways, and picking the wrong one for a given task is a common point of confusion.',
        },
        {
          kind: "note",
          text: "**SHORTCUT POSSIBILITY —** Receive a scan > ask for a useful title > choose the destination project > save a copy. Use the cross-device Continuity actions specifically for the portable capture portion of this workflow; reserve Mac-only paths, AppleScript, or shell steps (chapters 32, 35, 36) for the Mac-side processing stage that follows, since those Mac-only steps have no equivalent on iPhone or iPad.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Continuity overview and requirements](https://support.apple.com/en-us/102184). Undated; accessed September 6, 2026. [Insert photos and scans](https://support.apple.com/guide/mac-help/insert-a-photo-or-scanned-document-mchl5cd6d51e/mac). Undated; accessed September 6, 2026.",
        },
      ],
    },
  ],
};
