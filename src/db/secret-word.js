import fs from 'fs'

let secretWord = []

const randomNewWord = () => {
  fs.readFile('./src/db/words.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    let words = data.split('\r\n')
    let base = words[Math.floor(Math.random() * words.length)]

    for (let letter in base) {
      secretWord.push(base[letter])
    }

    clearSecretWordArray()
    return secretWord
  })
}

randomNewWord()

const clearSecretWordArray = () => {
  secretWord = []
}

export default secretWord
