"use strict"

function keys (obj) { return Object.keys(obj) }
function values (obj) { return keys(obj).map(key => obj[key]) }
function fillInAValsFromB (a, b) {
  return keys(a).reduce((result, key) => (b.hasOwnProperty(a[key]) && (result[key] = b[a[key]]), result), {})
}
function eq (a, b) {
  return keys(a).reduce((agg, key) => agg && a[key] === b[key], keys(a).length === keys(b).length)
}

module.exports = {
  keys: keys,
  values: values,
  fillInAValsFromB: fillInAValsFromB,
  eq: eq,
}
