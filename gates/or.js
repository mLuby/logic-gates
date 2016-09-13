module.exports = {
  IN: {a: "a", b: "b"},
  OUT: {out: "out"},
  PARTS: [
    {
      NAME: "nand",
      IN: {a: "notA", b: "notB"},
      OUT: {out: "out"}
    },
    {
      NAME: "not",
      IN: {in: "a"},
      OUT: {out: "notA"}
    },
    {
      NAME: "not",
      IN: {in: "b"},
      OUT: {out: "notB"}
    }
  ],
  TESTS: [
    {IN:{a: 0, b: 0}, OUT:{out: 0}},
    {IN:{a: 0, b: 1}, OUT:{out: 1}},
    {IN:{a: 1, b: 0}, OUT:{out: 1}},
    {IN:{a: 1, b: 1}, OUT:{out: 1}},
  ]
}
