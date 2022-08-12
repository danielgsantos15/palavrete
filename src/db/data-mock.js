import { v4 } from "uuid"
// const wordBase = ["teste", "testa", "pasta", "sexta", "sabes", "viola", "vidas", "pasto"]
const wordBase = new Map([
  [v4(), "TESTE"],
  // [v4(), "testa"],
  // [v4(), "pasta"],
  // [v4(), "pasto"],
  // [v4(), "sexta"],
  // [v4(), "sabes"],
  // [v4(), "viola"],
  // [v4(), "VIDAS"]
])

export default wordBase
