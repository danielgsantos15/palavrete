import data from './data-mock.js'
import GenerateWordManager from './secret-word.js'

const secret = new GenerateWordManager()

export default class DatabaseManager {
  getWord() {
    // let word = data.values()
    let word = secret
    console.log(word)
    return word
  }

  checkAtDatabase(word) {
    let result = false
    data.forEach((dado) => {
      if (dado == word.join(''))
      return result = true
    })
    return result
  }

  getNewWord() {
    let newWord = data
    let nextWord = Math.floor(Math.random() * newWord.length)
    console.log("nova", newWord[nextWord])
    let newww = newWord[nextWord]
    let teste = secret.generateNewWord()
    console.log('oi', teste)
    return newww
  }
}

