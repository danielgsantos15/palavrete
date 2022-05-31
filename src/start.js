const DatabaseManager = require("./db/database")
const LetterValidator = require("./validator/letter.validator")

const database = new DatabaseManager()
const lettervalidator = new LetterValidator(5)

const secretArray = Array.from(database.getWord())
const word = "solto"
const validatedWord = lettervalidator.greenCheck(word, secretArray)
console.log(validatedWord)