import data from './data-mock.js'
import fs from 'fs'

let secretWord = []
let words = []

// Choose a random word of words array and push to secretWord
const chooseRandomWord = () => {
  let base = words[Math.floor(Math.random() * words.length)]
  for (let letter in base) {
    secretWord.push(base[letter])
  }
  return secretWord
}

// clear secretWord to add new random word
const clearSecretWordArray = () => {
  secretWord = []
}

// read words base file and put words in words array
const readWordsFile = () => {
  let wordsBuffer = fs.readFileSync('./src/db/game-words.txt', { encoding: 'utf-8' })
  words = wordsBuffer.split('\r\n')
  chooseRandomWord()
}

readWordsFile()

export default class DatabaseManager {
  getWord() {
    return secretWord
  }

  checkAtDatabase() {
    let result = false
    data.forEach((dado) => {
      if (dado == secretWord.join(''))
      return result = true
    })
    return result
  }

  changeSecretWord() {
    clearSecretWordArray()
    chooseRandomWord()
    return secretWord
  }
}
