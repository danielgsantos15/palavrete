import DatabaseManager from "./db/database.js"
import LetterValidator from "./validator/letter.validator.js"

const database = new DatabaseManager()
const lettervalidator = new LetterValidator(5)

const secretArray = Array.from(database.getWord())
const word = "teste"
const validatedWord = lettervalidator.greenCheck(word, secretArray)
console.log(validatedWord)