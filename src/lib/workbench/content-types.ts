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

export type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "note"; text: string };

export type ContentStep = {
  id: string;
  title: string;
  /** Short imperative summary shown in the outline and focus header. */
  lead?: string;
  body: Block[];
};

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
