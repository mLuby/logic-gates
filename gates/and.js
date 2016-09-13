module.exports = {
  IN: {a: "a", b: "b"},
  OUT: {out: "out"},
  PARTS: [
    {
      NAME: "nand",
      IN: {a: "a", b: "b"},
      OUT: {out: "aNandB"}
    },
    {
      NAME: "not",
      IN: {in: "aNandB"},
      OUT: {out: "out"}
    }
  ],
  TESTS: [
    {IN:{a: 0, b: 0}, OUT:{out: 0}},
    {IN:{a: 0, b: 1}, OUT:{out: 0}},
    {IN:{a: 1, b: 0}, OUT:{out: 0}},
    {IN:{a: 1, b: 1}, OUT:{out: 1}},
  ]
}
