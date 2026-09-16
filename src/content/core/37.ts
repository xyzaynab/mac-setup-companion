import type { Unit } from "@/lib/workbench/content-types";

export const chapter37: Unit = {
  id: "ch-37",
  source: "core",
  chapter: "37",
  title: "Advanced scheduling with launchd",
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
          text: "Use native personal automation (chapter 33) for a simple, occasional schedule; reserve launchd specifically for maintaining a genuine background job with more demanding scheduling or reliability needs than a personal automation trigger is designed to provide.",
        },
        {
          kind: "p",
          text: "A user LaunchAgent describes a program, its arguments, a schedule, and its logging, all together in one property-list file. It is genuinely distinct from a system daemon, and it runs specifically within your own user context rather than system-wide. Use fully absolute paths throughout — a property list does not expand `~` or any shell variable the way an interactive command line would, so a path that works when you type it in Terminal can silently fail when the identical-looking path is placed inside a plist.",
        },
        {
          kind: "p",
          text: "This illustrative plist example runs an existing, already fully working, noninteractive **Report inbox** Shortcut once daily at 18:00. Replace `YOURNAME` with your actual account name, create the referenced log directory first if it doesn't already exist, and save the file as `~/Library/LaunchAgents/local.inbox.report.plist`. The processor it calls must already exist and must already be confirmed to complete successfully entirely on its own, with no prompts of any kind:",
        },
        {
          kind: "p",
          text: '<?xml version="1.0" encoding="UTF-8"?>\n<plist version="1.0">\n<dict>\n  <key>Label</key>\n  <string>local.inbox.report</string>\n  <key>ProgramArguments</key>\n  <array>\n    <string>/usr/bin/shortcuts</string>\n    <string>run</string>\n    <string>Report inbox</string>\n  </array>\n  <key>StartCalendarInterval</key>\n  <dict>\n    <key>Hour</key><integer>18</integer>\n    <key>Minute</key><integer>0</integer>\n  </dict>\n  <key>StandardOutPath</key>\n  <string>/Users/YOURNAME/Library/Logs/inbox-report.log</string>\n  <key>StandardErrorPath</key>\n  <string>/Users/YOURNAME/Library/Logs/inbox-report-error.log</string>\n</dict>\n</plist>',
        },
        {
          kind: "p",
          text: "Validate the plist file with `plutil -lint` before ever attempting to load it. Current `launchctl` uses `bootstrap` for loading a job into a specific domain, and `bootout` for unloading it; use `man launchctl` directly on your target Mac for the exact current syntax, since this has changed across macOS releases. Inspect the specified error log immediately if the job doesn't seem to run — don't assume removing the active job's plist file by itself actually stops an already-running or already-loaded job; explicitly unload it first with `bootout`.",
        },
        {
          kind: "caution",
          text: '**LIMIT —** This specific template has not been installed or tested on an actual Mac as part of this research. Sleep state, login state, file permissions, and any interactive behavior inside the called Shortcut all genuinely matter for whether a launchd job like this actually works as intended. Do not add a `KeepAlive` key to what\'s meant to be a simple, one-shot, scheduled filing task purely to "make it run more reliably" — that key is intended for jobs that should be continuously kept running, and adding it to a one-shot task can cause unwanted, repeated re-execution instead of the single daily run you actually intended.',
        },
        {
          kind: "p",
          text: "Sources: Apple Developer, [Creating Launch Daemons and Agents](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html), archived September 13, 2016; Apple, [Shortcuts command line](https://support.apple.com/guide/shortcuts-mac/run-shortcuts-from-the-command-line-apd455ce4f21/mac), undated. Checked September 6, 2026; installed manual pages govern current command syntax on your specific machine.",
        },
      ],
    },
  ],
};
