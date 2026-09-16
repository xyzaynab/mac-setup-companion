import type { Block } from "@/lib/workbench/content-types";
import { InlineText } from "./InlineText";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="doc-prose max-w-[66ch]">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockView({ block: b }: { block: Block }) {
  if (b.kind === "p")
    return (
      <p className="whitespace-pre-line">
        <InlineText text={b.text} />
      </p>
    );

  if (b.kind === "ul")
    return (
      <ul>
        {b.items.map((it, j) => (
          <li key={j}>
            <InlineText text={it} />
          </li>
        ))}
      </ul>
    );

  if (b.kind === "ol")
    return (
      <ol>
        {b.items.map((it, j) => (
          <li key={j}>
            <InlineText text={it} />
          </li>
        ))}
      </ol>
    );

  if (b.kind === "verify")
    return (
      <div className="not-prose my-4 border border-border bg-surface px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          What you should see
        </p>
        <ul className="mt-2 space-y-1 text-[13px] leading-relaxed">
          {b.items.map((it, j) => (
            <li key={j} className="flex gap-2">
              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />
              <span>
                <InlineText text={it} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );

  if (b.kind === "caution")
    return (
      <div className="not-prose my-4 border border-border-strong border-l-2 border-l-violet bg-surface px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Caution
        </p>
        {b.text && (
          <p className="mt-2 whitespace-pre-line text-[13px] leading-relaxed">
            <InlineText text={b.text} />
          </p>
        )}
        {b.items && (
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed">
            {b.items.map((it, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <span>
                  <InlineText text={it} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );

  if (b.kind === "details")
    return (
      <details className="not-prose my-4 border border-border px-4 py-3">
        <summary className="cursor-pointer text-[12px] text-muted-foreground hover:text-foreground">
          {b.summary}
        </summary>
        <div className="doc-prose mt-3">
          {b.blocks.map((inner, j) => (
            <BlockView key={j} block={inner} />
          ))}
        </div>
      </details>
    );

  return (
    <p className="whitespace-pre-line border-l-2 border-violet pl-4 text-muted-foreground">
      <InlineText text={b.text} />
    </p>
  );
}
