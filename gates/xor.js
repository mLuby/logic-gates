module.exports = {
  IN: {a: "a", b: "b"},
  OUT: {out: "out"},
  PARTS: [
    {
      NAME: "or",
      IN: {a: "a", b: "b"},
      OUT: {out: "aOrB"}
    },
    {
      NAME: "nand",
      IN: {a: "a", b: "b"},
      OUT: {out: "aNandB"}
    },
    {
      NAME: "and",
      IN: {a: "aOrB", b: "aNandB"},
      OUT: {out: "out"}
    }
  ],
  TESTS: [
    {IN:{a: 0, b: 0}, OUT:{out: 0}},
    {IN:{a: 0, b: 1}, OUT:{out: 1}},
    {IN:{a: 1, b: 0}, OUT:{out: 1}},
    {IN:{a: 1, b: 1}, OUT:{out: 0}},
  ]
}
