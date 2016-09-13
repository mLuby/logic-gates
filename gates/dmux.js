module.exports = {
  IN: {a: "in", b: "sel"},
  OUT: {a: "a", b: "b"},
  PARTS: [
    {
      NAME: "not",
      IN: {in: "sel"},
      OUT: {out: "notSel"}
    },
    {
      NAME: "and",
      IN: {a: "in", b: "notSel"},
      OUT: {out: "a"}
    },
    {
      NAME: "and",
      IN: {a: "in", b: "sel"},
      OUT: {out: "b"}
    },
  ],
  TESTS: [
    {IN:{in: 0, sel: 0}, OUT:{a: 0, b: 0}},
    {IN:{in: 0, sel: 1}, OUT:{a: 0, b: 0}},
    {IN:{in: 1, sel: 0}, OUT:{a: 1, b: 0}},
    {IN:{in: 1, sel: 1}, OUT:{a: 0, b: 1}},
  ]
}
