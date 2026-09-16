import { Fragment } from "react";
import { tokenizeInlineMarkup } from "@/lib/workbench/inline-markup";

export function InlineText({ text }: { text: string }) {
  return tokenizeInlineMarkup(text).map((token, index) => {
    if (token.kind === "strong") return <strong key={index}>{token.text}</strong>;
    if (token.kind === "code") return <code key={index}>{token.text}</code>;
    if (token.kind === "link")
      return (
        <a key={index} href={token.href} target="_blank" rel="noreferrer">
          {token.text}
        </a>
      );
    return <Fragment key={index}>{token.text}</Fragment>;
  });
}
