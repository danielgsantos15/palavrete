import { v4 } from "uuid"
// const wordBase = ["teste", "testa", "pasta", "sexta", "sabes", "viola", "vidas", "pasto"]
const wordBase = new Map([
  [v4(), "TESTE"],
  [v4(), "TESTA"],
  [v4(), "PASTA"],
  [v4(), "PASTO"],
  [v4(), "SEXTA"],
  [v4(), "SABES"],
  [v4(), "VIOLA"],
  [v4(), "VIDAS"]
])

export default wordBase
