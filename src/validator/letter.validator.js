class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
    let validatedWord = []
    let arrayToCheck = secretArray
    // usar este array para excluir as letras verdes encontradas sem alterar o secretArray
    console.log(secretArray)

    for (let index = 0; index < this.columns; index++) {
      pushRedLetter(validatedWord, clientArrayWord, index)

      if (secretArray.includes(clientArrayWord[index])) {
        pushGreenLetter(secretArray, validatedWord, clientArrayWord, index)
        continue
      }
    }
    for (let index = 0; index < this.columns; index++) {
      pushYellowLetter(secretArray, validatedWord, clientArrayWord, index)
    }
    return validatedWord
  }
}

const pushRedLetter = (validatedWord, clientArrayWord, index) => {
  validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-red' })
}

const pushGreenLetter = (secretArray, validatedWord, clientArrayWord, index) => {
  // validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-green' })
  validatedWord[index].classList = 'letter-green'
  // let yellowIndex = secretArray.indexOf(clientArrayWord[index])
  //   secretArray[yellowIndex] = '#'
}

const pushYellowLetter = (secretArray, validatedWord, clientArrayWord, index) => {
  if (validatedWord[index].classList != 'letter-green') {
    return
  }
  else if (clientArrayWord.indexOf(clientArrayWord[index]) == secretArray.indexOf(clientArrayWord[index])) {
    return
  }
  let quantidade = secretArray.filter(x => x === clientArrayWord[index]).length
  if (quantidade >= 1) {
    console.log(validatedWord[index], secretArray.filter(x => x === clientArrayWord[index]).length)
    validatedWord[index].classList = 'letter-yellow'
    quantidade = -1
  }
    // let yellowIndex = secretArray.indexOf(clientArrayWord[index])
    // secretArray[yellowIndex] = '*'
    console.log(clientArrayWord.indexOf(clientArrayWord[index]), clientArrayWord[index])
    console.log(secretArray.indexOf(clientArrayWord[index]), secretArray[index])
    validatedWord[index].classList = 'letter-yellow'
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
