class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
    let validatedWord = []
    for (let index = 0; index < this.columns; index++) {
      if (secretArray[index] == clientArrayWord[index]) {
        validatedWord.push({ letter: clientArrayWord[index], classList: 'right' })
        continue
      } else if (secretArray.includes(clientArrayWord[index])) {
        validatedWord.push({ letter: clientArrayWord[index], classList: 'displaced' })
        continue
      }
      validatedWord.push({ letter: clientArrayWord[index], classList: 'wrong' })
    }
    return validatedWord
  }
}

export default LetterValidator
