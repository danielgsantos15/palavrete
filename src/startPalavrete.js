import DatabaseManager from "./db/database.js"
import LetterValidator from "./validator/letter.validator.js"

const database = new DatabaseManager()
const lettervalidator = new LetterValidator(5)

export default class StartPalavrete {
    constructor(word) {
        this.word = word
    }
    getSecretWordFromDatabase () {
        const secretArray = Array.from(database.getWord())
        return secretArray
    }
    hasClientWordOnDatabase () {
        const wordChecked = database.checkAtDatabase(this.word)
        if (!wordChecked) {
            return 'A palavra não existe'
        }
        return this.validatedWord(secretArray)
    }
}
