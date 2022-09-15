class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
    let validatedWord = []
    console.log(secretArray)

    for (let index = 0; index < this.columns; index++) {
      if (secretArray.includes(clientArrayWord[index])) {
        pushGreenLetter(secretArray, validatedWord, clientArrayWord, index)
        continue
      }
      pushRedLetter(validatedWord, clientArrayWord, index)
    }
    for (let index = 0; index < this.columns; index++) {
      pushYellowLetter(secretArray, validatedWord, clientArrayWord, index)
    }
    return validatedWord
  }
}

const pushGreenLetter = (secretArray, validatedWord, clientArrayWord, index) => {
  let greenIndex = secretArray.indexOf(clientArrayWord[index])
  secretArray[greenIndex] = '#'
  validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-green' })
}

const pushRedLetter = (validatedWord, clientArrayWord, index) => {
  validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-red' })
}

const pushYellowLetter = (secretArray, validatedWord, clientArrayWord, index) => {
  if (validatedWord[index].classList == 'letter-green' && clientArrayWord.indexOf(clientArrayWord[index]) != secretArray.indexOf(clientArrayWord[index])) {
    console.log(clientArrayWord.indexOf(clientArrayWord[index]), clientArrayWord[index])
    validatedWord[index].classList = 'letter-yellow'
  }
}

  // let yellowIndex = secretArray.indexOf(clientArrayWord[index])
  // secretArray[yellowIndex] = '*'
  // validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-yellow' })
  // console.log('yellow')

// else if (secretArray[index] == clientArrayWord[index]) {
//   pushYellowLetter(secretArray, validatedWord, clientArrayWord, index)
//   continue
// }

export default LetterValidator
