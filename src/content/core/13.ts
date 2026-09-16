import type { Unit } from "@/lib/workbench/content-types";

export const chapter13: Unit = {
  id: "ch-13",
  source: "core",
  chapter: "13",
  title: "Put a search app to work",
  phase: "Search repair",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "A trial should answer one repeated question using your own actual files — not a generic benchmark, since the tool's fit to your workflow is what matters.",
        },
      ],
    },
    {
      id: "find-any-file-a-rescue-search",
      type: "orient",
      title: "Find Any File: a rescue search",
      body: [
        {
          kind: "p",
          text: "Choose the smallest likely folder or mounted drive as your search scope. Search by part of the name, extension, or a date range. Inspect the hierarchical results to see context before moving anything, then open the enclosing folder before acting. Save a useful search as a `.faf` file for reuse.",
        },
        {
          kind: "p",
          text: "For direct content searching, current Find Any File supports text and ZIP-based formats including DOCX and XLSX natively. It does not directly decode PDF text on its own; its optional Spotlight-backed supplement can return indexed PDF content, which means it inherits any gap Spotlight already has for that file. Cloud-only files may be found by name while their contents are skipped entirely until they are downloaded.",
        },
      ],
    },
    {
      id: "houdahspot-a-recurring-investigation",
      type: "orient",
      title: "HoudahSpot: a recurring investigation",
      body: [
        {
          kind: "p",
          text: 'Trial a genuinely repeated question, such as "Review-tagged PDFs in two specific project folders, excluding an Exports subfolder, containing a particular phrase." Add columns for exactly the information you compare across results — date, size, path — then save the configuration as a template. If that saved template is meaningfully easier to reuse than maintaining the same query directly in Finder, the extra tool has earned its place in your workflow; if not, Finder\'s own saved searches (chapter 08) already do the job.',
        },
      ],
    },
    {
      id: "raycast-v2-make-scope-intentional",
      type: "orient",
      title: "Raycast v2: make scope intentional",
      body: [
        {
          kind: "p",
          text: "Check File Search scopes in Raycast's own settings before judging its results against Spotlight's. Add a project folder or an external location deliberately if you want it included, and inspect the exclusions list if a known file seems to be missing. Enable content search only after confirming Spotlight indexes those specific locations — Raycast's local filename index and its optional OS-level content index have separate, independent failure modes, so a fix to one does not necessarily fix the other.",
        },
      ],
    },
    {
      id: "cost-and-stopping-point",
      type: "orient",
      title: "Cost and stopping point",
      body: [
        {
          kind: "p",
          text: "EasyFind is free. Find Any File's standard license is listed on the developer's own site; downloading directly from the developer lets you try it fully before paying. HoudahSpot is paid with a trial period; check the developer's current site for the exact price rather than relying on a figure that may be stale by the time you read this — software pricing changes without much notice, and a guide is a poor source of truth for a live price.",
        },
        {
          kind: "p",
          text: "Do not adopt an app unless it demonstrably improves your specific test case (chapter 10's four-file set) enough to justify learning another interface and maintaining another configuration. This manual does not recommend buying a launcher subscription merely for file search when the native tools, correctly diagnosed and occasionally repaired, already solve the great majority of real \"I can't find this file\" situations.",
        },
        {
          kind: "p",
          text: "Sources: Thomas Tempelmann, [Find Any File manual](https://www.tempel.org/FindAnyFile/); Houdah Software, [HoudahSpot](https://www.houdah.com/houdahSpot/); Raycast, [File Search](https://www.raycast.com/); developer sites for current pricing. Checked September 6–8, 2026.",
        },
      ],
    },
  ],
  companions: ["search-flow"],
};
