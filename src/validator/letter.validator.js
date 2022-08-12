class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
  console.log(clientArrayWord, secretArray)
    let validatedWord = []
    for (let index = 0; index < this.columns; index++) {
      if (secretArray[index] == clientArrayWord[index]) {
        validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-green' })
        continue
      } else if (secretArray.includes(clientArrayWord[index])) {
        validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-yellow' })
        continue
      }
      validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-red' })
    }
    return validatedWord
  }
}

export default LetterValidator
