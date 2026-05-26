import type { ReactNode } from "react";

type ArticleBodyProps = {
  content: string;
};

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-purple-950/50 px-1.5 py-0.5 font-mono text-sm text-purple-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="pt-4 font-sans text-xl font-medium text-text md:text-2xl"
            >
              {block.slice(3)}
            </h2>
          );
        }

        if (block.startsWith("### ")) {
          return (
            <h3 key={index} className="pt-2 font-sans text-lg font-medium text-text">
              {block.slice(4)}
            </h3>
          );
        }

        return (
          <p key={index} className="max-w-2xl">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
