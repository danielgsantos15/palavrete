import data from './data-mock.js'
import secretWord from './secret-word.js'
import { randomNewWord } from './secret-word.js'
import { chooseRandomWord } from './secret-word.js'

let word = secretWord
console.log('global', word)

export default class DatabaseManager {
  getWord() {
    return word
    // let word = data.values()
    // return word.next().value
  }

  checkAtDatabase(word) {
    let result = false
    data.forEach((dado) => {
      if (dado == word.join(''))
      return result = true
    })
    return result
  }

  changeSecretWord() {
    let result = randomNewWord()
    console.log('database', secretWord, result)
    return secretWord
  }
    word = []
}
