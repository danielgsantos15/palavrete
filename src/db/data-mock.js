const uuid = require("uuid")
// const wordBase = ["teste", "testa", "pasta", "sexta", "sabes", "viola", "vidas", "pasto"]
const wordBase = new Map([
  [uuid(), "teste"],
  [uuid(), "testa"],
  [uuid(), "pasta"],
  [uuid(), "pasto"],
  [uuid(), "sexta"],
  [uuid(), "sabes"],
  [uuid(), "viola"],
  [uuid(), "vidas"]
])

module.exports = wordBase