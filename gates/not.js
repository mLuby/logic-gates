module.exports = {
  IN: {in: "in"},
  OUT: {out: "out"},
  PARTS: [
    {
      NAME: "nand",
      IN: {a: "in", b: "in"},
      OUT: {out: "out"}
    }
  ],
  TESTS: [
    {IN:{in: 0}, OUT:{out: 1}},
    {IN:{in: 1}, OUT:{out: 0}},
  ]
}
