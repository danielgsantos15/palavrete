import { v4 } from "uuid"
// const wordBase = ["teste", "testa", "pasta", "sexta", "sabes", "viola", "vidas", "pasto"]
const wordBase = new Map([
  [v4(), "TRECO"],
  [v4(), "LENTE"],
  [v4(), "PASTA"],
  [v4(), "FESTA"],
  [v4(), "SEXTA"],
  [v4(), "SABES"],
  [v4(), "VIOLA"],
  [v4(), "LETRA"]
])

export default wordBase
