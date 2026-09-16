import type { Unit } from "@/lib/workbench/content-types";

export const chapter00: Unit = {
  id: "ch-00",
  source: "core",
  chapter: "00",
  title: "How to use this manual — reading routes",
  phase: "Foundations",
  status: "populated",
  steps: [
    {
      id: "how-to-use",
      type: "orient",
      title: "How to use this manual",
      lead: "Read a chapter, try the thing, come back.",
      body: [
        {
          kind: "p",
          text: "The manual is long because the capabilities interact with each other, and understanding one in isolation can produce configurations that quietly conflict.",
        },
        {
          kind: "p",
          text: "You are not expected to read it start to finish before touching the Mac.",
        },
        {
          kind: "p",
          text: "Each chapter is a bounded reading unit: a heading, a plain-language summary, worked examples, and a closing callout.",
        },
        {
          kind: "note",
          text: "Read a chapter, try the thing, come back.",
        },
      ],
    },
    {
      id: "minimal-base",
      type: "orient",
      title: "Know the minimal base",
      lead: "The conceptual base the rest of the manual layers on — not a checklist to build now.",
      body: [
        {
          kind: "p",
          text: "One inbox (Downloads), a few named project folders, one Review tag, one saved search built from that tag, and one selected-file Quick Action. Everything else in this manual is optional depth layered on that base. Add automatic routing only after you have watched a rule behave correctly on copies of your own files.",
        },
        {
          kind: "p",
          text: "This is the shape the later chapters assume, not work to complete in Chapter 00. You do not need to construct every part of it now; the chapters that follow build each piece in place.",
        },
      ],
    },
    {
      id: "reading-routes",
      requiredForProgress: false,
      type: "reference",
      title: "Other reading routes",
      lead: "Optional entry points if one problem is pressing. No forced branching.",
      body: [
        {
          kind: "details",
          summary: "Reading routes by symptom (optional)",
          blocks: [
            {
              kind: "ul",
              items: [
                "Files feel lost → 02, 03–05, 06, 10",
                "Desktop/Downloads accumulate → 14, 15, 38",
                "Windows disappear or multiply → 23, 24, 25",
                "Constant Mac/iPad movement → 21, 22, 39",
                "New to automation → 30, then 31; do not start with AppleScript or launchd",
              ],
            },
          ],
        },
      ],
    },
  ],
};
