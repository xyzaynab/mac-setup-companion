/**
 * Content layer for the Mac Setup Companion.
 *
 * Everything the app renders comes from "units". A unit is one navigable body
 * of source material (a core-manual chapter, a companion flow, or supplemental
 * reference). Units are data, so later source batches can be dropped in by
 * adding steps to an existing unit and flipping its status to "populated" —
 * no UI changes required.
 */

export type SourceKind = "core" | "start" | "search" | "downloads" | "supplemental" | "imported";

export const SOURCE_LABEL: Record<SourceKind, string> = {
  core: "Core Manual",
  start: "Start Here",
  search: "Search Troubleshooting",
  downloads: "Downloads / Desktop",
  supplemental: "Supplemental Reference",
  imported: "Imported HTML",
};

/** The only visible step types. Do not add more. */
export type StepType = "orient" | "do" | "decision" | "try" | "reference";

export const STEP_TYPE_LABEL: Record<StepType, string> = {
  orient: "Orient / Understand",
  do: "Do this now",
  decision: "Decision",
  try: "Try this now",
  reference: "Reference / Later",
};

export type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "note"; text: string }
  /** Source-backed "What you should see" verification callout. */
  | { kind: "verify"; items: string[] }
  /** Restrained caution callout. */
  | { kind: "caution"; text?: string; items?: string[] }
  /** Secondary, collapsible material — optional reading routes and the like. */
  | { kind: "details"; summary: string; blocks: Block[] };

export type ContentStep = {
  id: string;
  title: string;
  /** Restrained step type shown as quiet metadata above the heading. */
  type?: StepType;
  /** Short imperative summary shown in the outline and focus header. */
  lead?: string;
  /**
   * Defaults to true. Optional reference steps stay readable, notable and
   * completable, but never count toward core completion.
   */
  requiredForProgress?: boolean;
  body: Block[];
};

/** A step counts toward progress unless it is explicitly marked optional. */
export const isRequiredStep = (step: ContentStep) => step.requiredForProgress !== false;

export type UnitStatus = "populated" | "pending";

export type Unit = {
  id: string;
  source: SourceKind;
  /** "00".."40" for core chapters; undefined elsewhere. */
  chapter?: string;
  title: string;
  /** Grouping used for scanning; never alters chapter numbering. */
  phase?: string;
  summary?: string;
  status: UnitStatus;
  steps: ContentStep[];
  /** Unit ids of companions that apply while working through this unit. */
  companions?: string[];
};
