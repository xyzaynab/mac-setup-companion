import { describe, expect, it } from "vitest";
import { tokenizeInlineMarkup } from "./inline-markup";

describe("tokenizeInlineMarkup", () => {
  it("turns source emphasis, code, and links into renderable tokens", () => {
    expect(
      tokenizeInlineMarkup(
        "Use **Review**, keep `Receipt`, then read [Apple Help](https://support.apple.com/help).",
      ),
    ).toEqual([
      { kind: "text", text: "Use " },
      { kind: "strong", text: "Review" },
      { kind: "text", text: ", keep " },
      { kind: "code", text: "Receipt" },
      { kind: "text", text: ", then read " },
      { kind: "link", text: "Apple Help", href: "https://support.apple.com/help" },
      { kind: "text", text: "." },
    ]);
  });

  it("removes embedded Markdown heading markers without changing their words", () => {
    expect(tokenizeInlineMarkup("## Test / undo\nReturn to Default.")).toEqual([
      { kind: "text", text: "Test / undo\nReturn to Default." },
    ]);
  });
});
