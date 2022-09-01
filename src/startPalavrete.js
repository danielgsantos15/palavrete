import DatabaseManager from "./db/database.js"

const database = new DatabaseManager()

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
        if (wordChecked) {
            return this.word
        }
        
        return
        // return this.validatedWord(secretArray)
    }
    getNewSecretWordFromDatabase () {
        const newSecretArray = Array.from(database.getNewWord())
        return newSecretArray
    }
}
