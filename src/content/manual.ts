import type { Unit } from "@/lib/workbench/content-types";

/**
 * Canonical spine: "MacBook Air: A Connected macOS Working Manual".
 * Chapter numbers and titles are fixed by the source and must not be edited.
 * Chapters without source text loaded stay `status: "pending"` with no steps —
 * later source batches add steps and flip the status.
 */
type Row = { chapter: string; title: string; phase: string; companions?: string[] };

const ROWS: Row[] = [
  { chapter: "00", title: "How to use this manual — reading routes", phase: "Foundations" },
  { chapter: "01", title: "The connected system", phase: "Foundations" },
  { chapter: "02", title: "Finder as your work surface", phase: "Foundations" },
  { chapter: "03", title: "Tags — configure the vocabulary", phase: "Tags" },
  { chapter: "04", title: "Tags — models and decisions", phase: "Tags" },
  { chapter: "05", title: "Tags — across devices and transfers", phase: "Tags" },
  { chapter: "06", title: "Finder search — make the query visible", phase: "Search and retrieval", companions: ["search-flow"] },
  { chapter: "07", title: "Spotlight — retrieval and action", phase: "Search and retrieval", companions: ["search-flow"] },
  { chapter: "08", title: "Smart Folders — reusable views", phase: "Search and retrieval", companions: ["search-flow"] },
  { chapter: "09", title: "Searchability, end to end", phase: "Search and retrieval", companions: ["search-flow"] },
  { chapter: "10", title: "Search diagnosis before repair", phase: "Search repair", companions: ["search-flow"] },
  { chapter: "11", title: "Repair a bounded search problem", phase: "Search repair", companions: ["search-flow"] },
  { chapter: "12", title: "Choose a search supplement", phase: "Search repair", companions: ["search-flow"] },
  { chapter: "13", title: "Put a search app to work", phase: "Search repair", companions: ["search-flow"] },
  { chapter: "14", title: "Downloads and Desktop — define the jobs", phase: "Files in motion", companions: ["downloads-flow"] },
  { chapter: "15", title: "A native Downloads routing recipe", phase: "Files in motion", companions: ["downloads-flow"] },
  { chapter: "16", title: "Hazel — when rules become substantial", phase: "Files in motion", companions: ["downloads-flow"] },
  { chapter: "17", title: "Screenshots — capture with an exit path", phase: "Capture and preview", companions: ["downloads-flow"] },
  { chapter: "18", title: "Screenshot text — three distinct layers", phase: "Capture and preview" },
  { chapter: "19", title: "Quick Look and Preview", phase: "Capture and preview", companions: ["supplemental"] },
  { chapter: "20", title: "Context menus, Services, and sharing", phase: "Capture and preview" },
  { chapter: "21", title: "iCloud — location, availability, recovery", phase: "Across devices" },
  { chapter: "22", title: "Continuity between devices", phase: "Across devices" },
  { chapter: "23", title: "Windows — choose the problem to solve", phase: "Windows and display" },
  { chapter: "24", title: "Stage Manager — work in small sets", phase: "Windows and display" },
  { chapter: "25", title: "Spaces and Mission Control", phase: "Windows and display" },
  { chapter: "26", title: "Tiling and external displays", phase: "Windows and display" },
  { chapter: "27", title: "Widgets, Focus, and visible controls", phase: "Windows and display", companions: ["supplemental"] },
  { chapter: "28", title: "Readability and Font Book", phase: "Windows and display", companions: ["supplemental"] },
  { chapter: "29", title: "Cross-system workflows", phase: "Automation" },
  { chapter: "30", title: "The automation ladder", phase: "Automation", companions: ["downloads-flow"] },
  { chapter: "31", title: "Shortcuts — follow the content", phase: "Automation" },
  { chapter: "32", title: "Quick Actions and Services in practice", phase: "Automation" },
  { chapter: "33", title: "Personal automations on Tahoe", phase: "Automation" },
  { chapter: "34", title: "Automator and Folder Actions", phase: "Automation", companions: ["downloads-flow"] },
  { chapter: "35", title: "AppleScript — talk to the app", phase: "Automation" },
  { chapter: "36", title: "Shell automation — explicit files and output", phase: "Automation" },
  { chapter: "37", title: "Advanced scheduling with launchd", phase: "Automation" },
  { chapter: "38", title: "Automation ideas, worked in full", phase: "Automation" },
  { chapter: "39", title: "Three complete workflows", phase: "Workflows and upkeep" },
  { chapter: "40", title: "Setup, upkeep, and what changed", phase: "Workflows and upkeep" },
];

export const PHASES = [
  "Foundations",
  "Tags",
  "Search and retrieval",
  "Search repair",
  "Files in motion",
  "Capture and preview",
  "Across devices",
  "Windows and display",
  "Automation",
  "Workflows and upkeep",
] as const;

export const CORE_UNITS: Unit[] = ROWS.map((r) => ({
  id: `ch-${r.chapter}`,
  source: "core",
  chapter: r.chapter,
  title: r.title,
  phase: r.phase,
  status: "pending",
  steps: [],
  companions: r.companions,
}));
