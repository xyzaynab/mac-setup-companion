import type { Unit } from "@/lib/workbench/content-types";

export const chapter30: Unit = {
  id: "ch-30",
  source: "core",
  chapter: "30",
  title: "The automation ladder",
  phase: "Automation",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "try",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Automation is not confined to one chapter of this manual — it's referenced throughout, from Tags to Screenshots to Downloads. This chapter states the progression explicitly once, so every later chapter can refer back to it by name instead of re-explaining it.",
        },
        {
          kind: "p",
          text: "manual operation → faster built-in operation → keyboard or\ncontextual operation → Shortcut or Quick Action →\nautomatic trigger → advanced script",
        },
        {
          kind: "p",
          text: "Only progress as far as is genuinely useful for the specific task in front of you. A task you do twice a year does not need an automatic trigger; a task you do daily might. Climbing this ladder further than a task actually warrants adds maintenance burden — a rule you have to remember exists, a script you have to remember how to update — without a matching, ongoing benefit.",
        },
        {
          kind: "ul",
          items: [
            "Rung — What it looks like — When it's enough",
            "Manual operation — Drag, click, type, using Finder or an app directly — A one-time or very rare task",
            "Faster built-in operation — A menu command, a batch Rename, a built-in filter — A recurring task with no fixed pattern worth encoding",
            "Keyboard or contextual — A keyboard shortcut, a Quick Action, a Service — A recurring task with a fixed, single-step transformation",
            "Shortcut or Quick Action — A saved, multi-step Shortcut you launch manually — A recurring, multi-step task you still want to review before it runs",
            "Automatic trigger — A Folder, Time of Day, File, or other personal-automation trigger — A well-understood, tested task you trust to run without a manual launch",
            "Advanced script — AppleScript, shell, or launchd — A task Shortcuts genuinely cannot express, or one needing precise scheduling or app-specific control",
          ],
        },
        {
          kind: "p",
          text: 'Each rung of this ladder is covered in full in chapters 31–37. The rest of this manual\'s automation chapters assume you\'ve read this table once; they will simply say "climb one rung" or "this belongs at the trigger rung" rather than re-deriving the whole ladder each time.',
        },
        {
          kind: "note",
          text: '**DECISION POINT —** If you can describe the task in one plain sentence with no "and sometimes" clauses, it\'s a good candidate for the Shortcut-or-Quick-Action rung. If the sentence needs "and sometimes" or "unless," stay one rung down until you\'ve actually seen the exceptions in practice — build the simple version first, then add the exception handling once you know what it actually needs to check for.',
        },
        {
          kind: "p",
          text: "Sources: Ladder structure and rung table are original to this edition, synthesizing the automation guidance spread across chapters 31–38 of both this manual and its baseline.",
        },
      ],
    },
  ],
  companions: ["downloads-flow"],
};
