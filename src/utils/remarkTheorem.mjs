
const environments = {
  theorem: "Theorem",
  lemma: "Lemma",
  corollary: "Corollary",
  proposition: "Proposition",
  definition: "Definition",
  example: "Example",
  examples: "Example",
  remark: "Remark",
  conjecture: "Conjecture",
};

export default function remarkTheorem() {
  return (tree) => {
    let counter = 0;

    function visit(node) {
      if (!node.children) return;

      for (const child of node.children) {
        if (
          child.type === "containerDirective" &&
          environments[child.name]
        ) {
          const number = ++counter;
          const name = environments[child.name];
          const title = child.attributes?.title;

          child.data = child.data || {};
          child.data.hName = "div";
          child.data.hProperties = {
            className: [
              "theorem-env",
              `theorem-${child.name}`,
            ],
          };

          const heading = `${name} ${number}${
            title ? ` (${title})` : ""
          }`;

          child.children.unshift({
            type: "paragraph",
            children: [
              {
                type: "strong",
                children: [
                  {
                    type: "text",
                    value: heading,
                  },
                ],
              },
            ],
          });
        }

        visit(child);
      }
    }

    visit(tree);
  };
}
