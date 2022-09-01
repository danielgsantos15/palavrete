import fs from 'fs'

let wordBase = []

fs.readFile('./src/db/words.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  }
  let words = data.split('\r\n')
  for (let word in words) {
    let row = words[word]
    wordBase.push(row)
    }
})

export default wordBase
