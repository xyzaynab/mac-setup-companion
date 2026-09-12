import type { Block } from "@/lib/workbench/content-types";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="doc-prose max-w-[66ch]">
      {blocks.map((b, i) => {
        if (b.kind === "p") return <p key={i}>{b.text}</p>;
        if (b.kind === "ul")
          return (
            <ul key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        if (b.kind === "ol")
          return (
            <ol key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ol>
          );
        return (
          <p key={i} className="border-l-2 border-violet pl-4 text-muted-foreground">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
