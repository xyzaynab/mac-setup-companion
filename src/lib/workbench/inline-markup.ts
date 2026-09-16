export type InlineToken =
  { kind: "text" | "strong" | "code"; text: string } | { kind: "link"; text: string; href: string };

const TOKEN = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;

export function tokenizeInlineMarkup(source: string): InlineToken[] {
  const value = source.replace(/^#{1,6}\s+/gm, "");
  const tokens: InlineToken[] = [];
  let cursor = 0;

  for (const match of value.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > cursor) tokens.push({ kind: "text", text: value.slice(cursor, index) });
    if (match[2]) tokens.push({ kind: "strong", text: match[2] });
    else if (match[3]) tokens.push({ kind: "code", text: match[3] });
    else tokens.push({ kind: "link", text: match[4]!, href: match[5]! });
    cursor = index + match[0].length;
  }

  if (cursor < value.length) tokens.push({ kind: "text", text: value.slice(cursor) });
  return tokens.length ? tokens : [{ kind: "text", text: value }];
}
