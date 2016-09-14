"use strict"

var utils = require("./utils")
const keys = utils.keys
const values = utils.values
const fillInAValsFromB = utils.fillInAValsFromB
const eq = utils.eq

// load gate specs
var path = require("path")
var fs = require("fs")
var normalizedPath = path.join(__dirname, "gates")
const GATE_HDLS = {}
fs.readdirSync(normalizedPath).forEach(function(file) {
  GATE_HDLS[path.parse(file).name] = require(path.join(normalizedPath, file))
})

// interpret gates
function gateFuncFromHdl (HDL) {
  return function gateFunc (IN) {
    if (HDL.FUNC) { // covers fundamental gate (nand/nor)
      const result = HDL.FUNC(IN)
      result.COUNT = 1
      return result
    } else {
      let COUNT = 0
      const knownValues = Object.assign({}, IN)
      const partsLeftToEvaluate = HDL.PARTS.slice()
      let newKnownValuesAdded = true
      while (newKnownValuesAdded) {
        newKnownValuesAdded = false
        partsLeftToEvaluate.forEach((PART, PART_INDEX) => {
          const knownValuesForPart = fillInAValsFromB(PART.IN, knownValues)
          // if each part.IN is in known values
          if (eq(keys(PART.IN), keys(knownValuesForPart))) {
            PART.FUNC = gateFuncFromHdl(GATE_HDLS[PART.NAME])
            const results = PART.FUNC(knownValuesForPart)
            COUNT += results.COUNT
            // storing results in known values
            keys(PART.OUT).forEach(outKey => knownValues[PART.OUT[outKey]] = results[outKey])
            // remove part from parts to evaluate
            partsLeftToEvaluate.splice(PART_INDEX, 1)
            newKnownValuesAdded = true
          }
        })
      }
      const result = fillInAValsFromB(HDL.OUT, knownValues)
      result.COUNT = COUNT
      return result
    }
  }
}

// export interpreted gates (+ TESTS)
module.exports = keys(GATE_HDLS).reduce((gates, gateName) => {
  const GATE = GATE_HDLS[gateName]
  gates[gateName] = gateFuncFromHdl(GATE)
  gates[gateName].TESTS = GATE.TESTS
  return gates
}, {})
