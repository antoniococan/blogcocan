
const environments = {
  theorem: "Theorem",
  lemma: "Lemma",
  corollary: "Corollary",
  proposition: "Proposition",
  definition: "Definition",
  example: "Example",
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

          child.data = child.data || {};
          child.data.hName = "div";
          child.data.hProperties = {
            className: [
              "theorem-env",
              `theorem-${child.name}`,
            ],
          };

          child.children.unshift({
            type: "paragraph",
            children: [
              {
                type: "strong",
                children: [
                  {
                    type: "text",
                    value: `${name} ${number}`,
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
