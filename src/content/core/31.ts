import type { Unit } from "@/lib/workbench/content-types";

export const chapter31: Unit = {
  id: "ch-31",
  source: "core",
  chapter: "31",
  title: "Shortcuts — follow the content",
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
          text: "A Shortcut is a small program: input, decisions, transformations, and output. Treat it like one — with an explicit contract at each end — rather than a loose chain of actions you hope will line up.",
        },
      ],
    },
    {
      id: "build-around-one-input-contract",
      type: "do",
      title: "Build around one input contract",
      body: [
        {
          kind: "p",
          text: "Decide explicitly what the workflow accepts: files, images, text, URLs, or nothing at all. A Finder file selection is a genuinely different input type from a string that merely contains a path as text — Shortcuts does not automatically convert between them. Restrict the accepted types in the Shortcut's own settings so unrelated selections simply don't offer an action that can't actually use them, rather than offering the action and failing partway through.",
        },
        {
          kind: "p",
          text: 'Actions may produce output, transform existing output, or perform a side effect with no output at all. Inspect the actual variable feeding each subsequent action rather than assuming a step\'s output is what you think it is. Do not assume the original visible input file still flows through unchanged after an OCR step, for instance — many actions replace the working variable with their own output rather than passing the original along beside it. Use the original input variable explicitly, by name, whenever you need the original file again later in the same Shortcut, rather than relying on whatever the "most recently generated result" happens to currently be.',
        },
      ],
    },
    {
      id: "a-reusable-selected-file-processor",
      type: "orient",
      title: "A reusable selected-file processor",
      body: [
        {
          kind: "p",
          text: "Create **Prepare selected images**. Receive Images as input. Filter to supported input types explicitly. Repeat with Each image: convert or resize a derived copy (never the original), name the result distinctly from the source, save it into a dedicated Exports folder, and collect the resulting output files as you go. End with Quick Look so you can see the actual outputs together in one place before doing anything else with them.",
        },
        {
          kind: "p",
          text: "The important design choices here matter more than the specific length of the action list: the original file is always preserved untouched; the export destination is explicit and separate from the source; collisions are handled deliberately rather than left to chance; and one file's failure partway through does not silently get reported as success for the whole batch. Start by testing with exactly one image before ever enabling multiple-selection use.",
        },
      ],
    },
    {
      id: "add-logic-only-when-needed",
      type: "orient",
      title: "Add logic only when needed",
      body: [
        {
          kind: "p",
          text: "Use an If action for a genuine true/false decision point, such as whether a text-extraction step actually returned anything at all. Use Choose from Menu specifically when a human should pick a project or an outcome interactively as part of the run. Use Repeat with Each for straightforward per-file handling. A Dictionary action can hold a reusable mapping from project names to their destination folders, which is considerably more maintainable than duplicating a long chain of near-identical If/branch logic for every single project by hand.",
        },
        {
          kind: "p",
          text: "If a manual decision is genuinely necessary somewhere in the flow, keep it manual rather than automating around it with an unreliable guess. Filing based on an uncertain automatic guess is not actually an improvement over a quick, explicit destination prompt shown to you at the right moment — a wrong automatic guess is often more costly to discover and fix than the two extra seconds a prompt would have taken. Separate a manual front-end Shortcut (the one a person runs and interacts with) from a processor Shortcut that can receive already-resolved input directly from another automation without ever showing a prompt — this separation is what makes the same processor reusable from both a manual Quick Action and a fully unattended trigger.",
        },
        {
          kind: "note",
          text: "**GO DEEPER —** Return a genuinely concrete output from every processor Shortcut: the actual saved file, a list of the resulting paths, or a short report of what was processed versus what was skipped and why. That returned output is what lets another Shortcut, a script, or a Share Sheet actually use the result downstream without having to search the filesystem itself to rediscover what just happened.",
        },
        {
          kind: "p",
          text: "Sources: Apple, [Action connections](https://support.apple.com/guide/shortcuts-mac/connect-actions-apdF0D0EFC3-8F0B-4E68-A445-1E1000CB8AF6/mac), [variable types](https://support.apple.com/guide/shortcuts-mac/pass-content-between-actions-apd585fe3d1f/mac), and [get actions](https://support.apple.com/guide/shortcuts-mac/get-actions-apd21a5f0221/mac). Undated; accessed September 6, 2026. [lists](https://support.apple.com/guide/shortcuts-mac/work-with-lists-apd91cf513fd/mac), [dictionaries](https://support.apple.com/guide/shortcuts-mac/work-with-dictionaries-apdb5c46785f/mac), [transformations](https://support.apple.com/guide/shortcuts-mac/welcome/mac). Undated; accessed September 6, 2026. Processor design is a proposed example, not a pre-built or installed Shortcut.",
        },
      ],
    },
  ],
};
