import type { Unit } from "@/lib/workbench/content-types";

export const chapter36: Unit = {
  id: "ch-36",
  source: "core",
  chapter: "36",
  title: "Shell automation — explicit files and output",
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
          text: "Use the shell specifically when a small, predictable operation is genuinely easier and more reliable to express directly as code than to build through a graphical action chain.",
        },
        {
          kind: "p",
          text: 'In Automator\'s Run Shell Script action, choose an actual shell and explicitly set input to "as arguments" for genuine file processing — this is what makes the selected files available as real, individually-quoted command-line arguments rather than as a single ambiguous block of piped text. Quoting each argument correctly preserves spaces that may appear within filenames. A loop over `"$@"` correctly processes the actual, individually-provided arguments; attempting to parse a displayed directory listing as text instead is a considerably less reliable way to reconstruct a set of filenames, since filenames can themselves contain characters that make naive text-parsing ambiguous.',
        },
        {
          kind: "p",
          text: "The example below deliberately only reports which selected items are regular, readable files — it does not rename, move, or delete anything at all. In an actual Shortcut, configure the equivalent explicit file-path input before adopting a pattern like this one for real use:",
        },
        {
          kind: "p",
          text: 'for selected_path in "$@"; do\n    if [ -f "$selected_path" ]; then\n        printf \'Ready: %s\\n\' "$selected_path"\n    else\n        printf \'Skipped: %s\\n\' "$selected_path" >&2\n    fi\ndone',
        },
      ],
    },
    {
      id: "call-an-existing-shortcut",
      type: "orient",
      title: "Call an existing Shortcut",
      body: [
        {
          kind: "p",
          text: "Apple provides a `shortcuts` command-line tool for listing, viewing, and running Shortcuts directly from the shell or from a script. Use its explicit file-input flags specifically when passing files as input — a plain path piped in as ordinary text is received as text input, not automatically converted into a file-object input the way a Finder file selection would be. A command-line run can still pause and wait indefinitely on any of a Shortcut's own interactive prompts, exactly as a manually launched run would, so a fully unattended script should call only a Shortcut you've already verified runs without needing any manual input at all.",
        },
        {
          kind: "p",
          text: 'shortcuts list\nshortcuts view "Prepare selected images"\nshortcuts run "Prepare selected images" \\\n  -i "/Users/YOURNAME/Pictures/example.png"',
        },
        {
          kind: "p",
          text: "If the target Shortcut produces a genuinely suitable output value, the `-o` flag can write that output directly to a specified destination. An action that only moves a file somewhere is not automatically guaranteed to also produce a usable output value the same way a transformation action that explicitly returns a processed image would. Inspect the processor's actual final returned value directly, and test with exactly a single input file, before chaining this command into anything larger.",
        },
      ],
    },
    {
      id: "make-failure-understandable",
      type: "orient",
      title: "Make failure understandable",
      body: [
        {
          kind: "p",
          text: "For any script that actually mutates files, explicitly define its source and destination, its collision-handling behavior, and maintain a log recording both the old and new path for every change it makes. Check that an expected external volume is genuinely mounted before assuming a familiar path on it is actually valid right now — a path that was valid yesterday can silently fail today if the drive simply isn't connected. Avoid embedding secrets (passwords, tokens, keys) directly inside scripts or inside general-purpose logs that other processes or people might read. Use an explicit dry-run mode — one that only reports the changes it would make, without actually making any of them — and review that report carefully before ever enabling the script's real, writing behavior for the first time.",
        },
        {
          kind: "note",
          text: "**WORKS WITH —** A Finder Quick Action, a Folder Action, a Tahoe personal-automation trigger, or a scheduled launchd job (chapter 37) can all call the exact same underlying shell processor. Keeping that processor's input/output contract genuinely stable across all of these callers means changing which trigger starts it never requires rewriting the actual file-handling logic itself.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Use scripts with Automator](https://support.apple.com/guide/automator/use-applescripts-and-shell-scripts-aut73234890/mac). Undated; checked September 6, 2026. Shell example is original; use your specific installed shell's own manual for exact syntax details. [Run shortcuts from the command line](https://support.apple.com/guide/shortcuts-mac/run-shortcuts-from-the-command-line-apd455ce4f21/mac). Undated; accessed September 6, 2026. Commands are build examples, not executed Mac tests.",
        },
      ],
    },
  ],
};
