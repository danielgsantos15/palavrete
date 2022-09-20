class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
    let validatedWord = []
    // usar este arrayToCompare para criar objetos e comparar com validatedWord
    let arrayToCompare = []

    console.log(secretArray)

    // loop para adicionar objetos aos arrays
    for (let index = 0; index < this.columns; index++) {
      pushRedLetter(validatedWord, clientArrayWord, index)
      visibleLettersToCompare(arrayToCompare, secretArray, index)

      // checa se cada letra em clientArrayWord exitem dentro do secretArray
      if (secretArray.includes(clientArrayWord[index])) {
        pushGreenLetter(arrayToCompare, secretArray, validatedWord, clientArrayWord, index)
        notVisibleLettersToCompare(arrayToCompare, secretArray, index)
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

// adiciona secretLetter e status 'visible' para cada letra de arrayToCompare
const visibleLettersToCompare = (arrayToCompare, secretArray, index) => {
  arrayToCompare.push({ secretLetter: secretArray[index], status: 'visible' })
}

// torna invisivel as letras que foram encontradas no secretArray para serem desconsideradas na validação das próximas
const notVisibleLettersToCompare = (arrayToCompare, secretArray, index) => {
  arrayToCompare[index].status = 'not-visible'
}

// adiciona letters e classList: 'letter-red' para cada letra de validatedWord
const pushRedLetter = (validatedWord, clientArrayWord, index) => {
  validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-red' })
}

// adiciona 'letter-green' nas letras que existem dentro do secretArray
const pushGreenLetter = (arrayToCompare, secretArray, validatedWord, clientArrayWord, index) => {
  validatedWord[index].classList = 'letter-green'
}

// Adiciona 'letter-yellow' nas letras que estão na posição incorreta
const pushYellowLetter = (arrayToCompare, secretArray, validatedWord, clientArrayWord, index) => {
  if (validatedWord[index].classList != 'letter-green') {
    return
  }
  else if (clientArrayWord.indexOf(clientArrayWord[index]) == secretArray.indexOf(clientArrayWord[index])) {
    return
  }
  validatedWord[index].classList = 'letter-yellow'
  arrayToCompare[index].status = 'not-visible'
}

export default LetterValidator
