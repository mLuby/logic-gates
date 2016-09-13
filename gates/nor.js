module.exports = { // only need this 1 gate to define all others
  // FUNC: function (IN) { return {out: (IN.a | IN.b) ? 0 : 1} },
  IN: {a: "a", b: "b"},
  OUT: {out: "out"},
  PARTS: [
    {NAME: "nand", IN: {a: "a", b: "a"}, OUT: {out: "notA"}},
    {NAME: "nand", IN: {a: "b", b: "b"}, OUT: {out: "notB"}},
    {NAME: "nand", IN: {a: "notA", b: "notB"}, OUT: {out: "aAndB"}},
    {NAME: "nand", IN: {a: "aAndB", b: "aAndB"}, OUT: {out: "out"}},
  ],
  TESTS: [
    {IN:{a: 0, b: 0}, OUT:{out: 1}},
    {IN:{a: 0, b: 1}, OUT:{out: 0}},
    {IN:{a: 1, b: 0}, OUT:{out: 0}},
    {IN:{a: 1, b: 1}, OUT:{out: 0}},
  ]
}
