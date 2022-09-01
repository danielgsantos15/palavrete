import fs from 'fs'

class GenerateWordManager {
  generateNewWord() { 
    fs.readFile('./src/db/words.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    let secretWord = []
    let words = data.split('\r\n')
    let base = words[Math.floor(Math.random() * words.length)]
    secretWord.push(base)
    console.log(secretWord, base)

    return base
  })
  }
}

export default GenerateWordManager