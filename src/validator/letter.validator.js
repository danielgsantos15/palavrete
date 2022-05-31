class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  greenCheck(word, secretArray) {
    let validatedWord = []
    let wordSplited = Array.from(word)
    for (let index = 0; index < this.columns; index++) {
      if (secretArray[index] == wordSplited[index]) {
        validatedWord.push({ letter: wordSplited[index], classList: 'right' })
        continue
      } else if (secretArray.includes(wordSplited[index])) {
        validatedWord.push({ letter: wordSplited[index], classList: 'displaced' })
        continue
      }
      validatedWord.push({ letter: wordSplited[index], classList: 'wrong' })
    }
    return validatedWord
  }
}

module.exports = LetterValidator