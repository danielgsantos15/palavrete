class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
    let validatedWord = []
    // usar este arrayToCompare para criar objetos e comparar com validatedWord
    let arrayToCompare = []

    console.log(secretArray)

    pushRedLetter(validatedWord, clientArrayWord, this.columns)
    visibleLettersToCompare(arrayToCompare, secretArray, this.columns)
    
    // loop para adicionar class e classList aos objetos dos arrays
    for (let index = 0; index < this.columns; index++) {
      // checa se cada letra em clientArrayWord exitem dentro do secretArray
      if (secretArray.includes(clientArrayWord[index])) {
        pushGreenLetter(arrayToCompare, secretArray, validatedWord, clientArrayWord, index)
        notVisibleLettersToCompare(validatedWord, arrayToCompare, secretArray, index)
        continue
      }
    }

    // loop que altera o classList do secretArray para 'letter-yellow'
    for (let index = 0; index < this.columns; index++) {
      pushYellowLetter(arrayToCompare, secretArray, validatedWord, clientArrayWord, index)
    }
    console.log(arrayToCompare)
    console.log(validatedWord)
    return validatedWord
  }
}

// cria objeto que adiciona letters e classList: 'letter-red' em todas as letras de validatedWord
const pushRedLetter = (validatedWord, clientArrayWord, columns) => {
  for (let index = 0; index < columns; index++) {
    validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-red' })
  }
}

// cria objeto que adiciona secretLetter e status 'visible' em todas as letras de arrayToCompare
const visibleLettersToCompare = (arrayToCompare, secretArray, columns) => {
  for (let index = 0; index < columns; index++) {
    arrayToCompare.push({ secretLetter: secretArray[index], status: 'visible' })
  }
}

// adiciona 'letter-green' nas letras que existem dentro do secretArray
const pushGreenLetter = (arrayToCompare, secretArray, validatedWord, clientArrayWord, index) => {
  validatedWord[index].classList = 'letter-green'
}

// torna invisivel as letras que foram encontradas no secretArray para serem desconsideradas na validação das próximas
const notVisibleLettersToCompare = (validatedWord, arrayToCompare, secretArray, index) => {
  let indexLetter = validatedWord[index].letter
  let objectIndex = arrayToCompare.findIndex(i => i.secretLetter === indexLetter && i.status === 'visible')
  if (arrayToCompare[objectIndex] === undefined ) {
    return
  }
  arrayToCompare[objectIndex].status = 'not-visible'
}

// adiciona 'letter-yellow' nas letras que estão na posição incorreta
const pushYellowLetter = (arrayToCompare, secretArray, validatedWord, clientArrayWord, index) => {
  if (validatedWord[index].classList != 'letter-green') {
    return
  }
  else if (clientArrayWord.indexOf(clientArrayWord[index]) == secretArray.indexOf(clientArrayWord[index])) {
    return
  }
  validatedWord[index].classList = 'letter-yellow'
}

export default LetterValidator
