const uuid = require("uuid")
// const wordBase = ["teste", "testa", "pasta", "sexta", "sabes", "viola", "vidas", "pasto"]
const wordBase = new Map([
  [uuid.v4(), "teste"],
  [uuid.v4(), "testa"],
  [uuid.v4(), "pasta"],
  [uuid.v4(), "pasto"],
  [uuid.v4(), "sexta"],
  [uuid.v4(), "sabes"],
  [uuid.v4(), "viola"],
  [uuid.v4(), "vidas"]
])

module.exports = wordBase