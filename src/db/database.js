import data from './data-mock.js'
import secretWord from './secret-word.js'

export default class DatabaseManager {
  getWord() {
    let word = secretWord
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
    console.log(secretWord)
    return secretWord
    // let word = secretWord.values()
    // return word.next().value
    // // let newWord = data
    // let newWord = secretWord.generateNewWord()
    // let nextWord = Math.floor(Math.random() * newWord.length)
    // console.log(newWord[nextWord])
    // return newWord[nextWord]
  }
}
