import DatabaseManager from "./db/database.js"
import LetterValidator from "./validator/letter.validator.js"

const database = new DatabaseManager()
const lettervalidator = new LetterValidator(5)

const secretArray = Array.from(database.getWord())
const word = "teste"
const wordChecked = database.checkAtDatabase(word)
const validatedWord = lettervalidator.greenCheck(word, secretArray)
if (!wordChecked) {
    console.log('A palavra não existe')
}
else console.log(validatedWord)
