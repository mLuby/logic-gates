module.exports = {
  IN: {a: "a", b: "b", sel: "sel"},
  OUT: {out: "out"},
  PARTS: [
    {
      NAME: "not",
      IN: {in: "sel"},
      OUT: {out: "notSel"}
    },
    {
      NAME: "and",
      IN: {a: "a", b: "notSel"},
      OUT: {out: "aAndNotSel"}
    },
    {
      NAME: "and",
      IN: {a: "b", b: "sel"},
      OUT: {out: "bAndSel"}
    },
    {
      NAME: "or",
      IN: {a: "aAndNotSel", b: "bAndSel"},
      OUT: {out: "out"}
    }
  ],
  TESTS: [
    {IN:{a: 0, b: 0, sel: 0}, OUT:{out: 0}},
    {IN:{a: 0, b: 0, sel: 1}, OUT:{out: 0}},
    {IN:{a: 0, b: 1, sel: 0}, OUT:{out: 0}},
    {IN:{a: 0, b: 1, sel: 1}, OUT:{out: 1}},
    {IN:{a: 1, b: 0, sel: 0}, OUT:{out: 1}},
    {IN:{a: 1, b: 0, sel: 1}, OUT:{out: 0}},
    {IN:{a: 1, b: 1, sel: 0}, OUT:{out: 1}},
    {IN:{a: 1, b: 1, sel: 1}, OUT:{out: 1}},
  ]
}
