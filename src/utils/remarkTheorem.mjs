
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

      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if (
          child.type === "containerDirective" &&
          environments[child.name]
        ) {
          counter++;

          const name = environments[child.name];

          node.children[i] = {
            type: "mdxJsxFlowElement",
            name: "div",
            attributes: [
              {
                type: "mdxJsxAttribute",
                name: "className",
                value: `theorem-env theorem-${child.name}`,
              },
            ],
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "strong",
                    children: [
                      {
                        type: "text",
                        value: `${name} ${counter}.`,
                      },
                    ],
                  },
                ],
              },
              ...child.children,
            ],
          };
        }

        visit(node.children[i]);
      }
    }

    visit(tree);
  };
}
