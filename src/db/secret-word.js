import fs from 'fs'

let secretWord = []
let words = []

export const chooseRandomWord = () => {
  let base = words[Math.floor(Math.random() * words.length)]

  for (let letter in base) {
    secretWord.push(base[letter])
  }
  console.log('secret-word', secretWord)
  return secretWord
}

const clearSecretWordArray = () => {
  secretWord = []
}

export const randomNewWord = () => {
  let wordsBuffer = fs.readFileSync('./src/db/words.txt', { encoding: 'utf-8' })
  words = wordsBuffer.split('\r\n')
  chooseRandomWord()
  clearSecretWordArray()
  return secretWord
}

randomNewWord()

export default secretWord
