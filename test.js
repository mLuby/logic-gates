"use strict"
const GATES = require("./interpreter")
const utils = require("./utils")
const keys = utils.keys
const eq = utils.eq

// test gates
keys(GATES).forEach(gateName => testGate(GATES[gateName], gateName))
function testGate (gate, gateName) {
  gate.TESTS.forEach(TEST => {
    const result = gate(TEST.IN)
    const COUNT = result.COUNT
    delete result.COUNT
    console.log(eq(result, TEST.OUT) ? "√" : "X", gateName+":", TEST.IN, "->", TEST.OUT, "GOT:", result, `gate count:`, COUNT)
  })
}
