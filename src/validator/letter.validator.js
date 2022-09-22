class LetterValidator {
  constructor(columns) {
    this.columns = columns
  }
  compareWordsToClassifyTheLetterPosition(clientArrayWord, secretArray) {
    // usar secretArrayToComparation para criar objetos e comparar com validatedWord
    let secretArrayToComparation = []
    let validatedWord = []

    clientArrayToCompare(validatedWord, clientArrayWord, this.columns)
    visibleLettersToCompare(secretArrayToComparation, secretArray, this.columns)
    notVisibleLettersToCompare(validatedWord, secretArrayToComparation, secretArray, clientArrayWord, this.columns)
    
    console.log(secretArray)

    return validatedWord
  }
}

// cria objeto que adiciona letters e classList: 'letter-red' em todas as letras de validatedWord
const clientArrayToCompare = (validatedWord, clientArrayWord, columns) => {
  for (let index = 0; index < columns; index++) {
    validatedWord.push({ letter: clientArrayWord[index], classList: 'letter-red' })
  }
}

// cria objeto que adiciona secretLetter e status 'visible' em todas as letras de secretArrayToComparation
const visibleLettersToCompare = (secretArrayToComparation, secretArray, columns) => {
  for (let index = 0; index < columns; index++) {
    secretArrayToComparation.push({ secretLetter: secretArray[index], status: 'visible' })
  }
}

// torna invisivel as letras que foram encontradas no secretArray para serem desconsideradas na validação das próximas
const notVisibleLettersToCompare = (validatedWord, secretArrayToComparation, secretArray, clientArrayWord, columns) => {
  for (let index = 0; index < columns; index++) {
    // checa se cada letra em clientArrayWord exitem dentro do secretArray
    if (secretArray.includes(clientArrayWord[index])) {
      let indexLetter = validatedWord[index].letter
      let objectIndex = secretArrayToComparation.findIndex(i => i.secretLetter === indexLetter && i.status === 'visible' || i.secretLetter === indexLetter && i.status === 'not-visible')
      if (secretArrayToComparation[objectIndex] === 'not-visible' ) {
        pushLetterColors(secretArrayToComparation, validatedWord, index, objectIndex)
        return
      }
      pushLetterColors(secretArrayToComparation, validatedWord, index, objectIndex)
      secretArrayToComparation[objectIndex].status = 'not-visible'
    }
  }
}

// Função que adiciona cores a partir do status visible ou not-visible
const pushLetterColors = (secretArrayToComparation, validatedWord, index, objectIndex) => {
  if (validatedWord[index].letter == secretArrayToComparation[index].secretLetter) {
    pushGreenLetter(validatedWord, index)
    return  
  } 
  else if (secretArrayToComparation[objectIndex].status == 'visible') {
    pushYellowLetter(validatedWord, index)
  }
}

// adiciona 'letter-green' nas letras que existem dentro do secretArray
const pushGreenLetter = (validatedWord, index) => {
  validatedWord[index].classList = 'letter-green'
  yellowCheck(validatedWord, index)
}

// adiciona 'letter-yellow' nas letras que estão na posição incorreta
const pushYellowLetter = (validatedWord, index) => {
  validatedWord[index].classList = 'letter-yellow'
}

const yellowCheck = (validatedWord, index) => {
  for (let i = 0; i < validatedWord.length; i++) {
    if (validatedWord[i].letter == validatedWord[index].letter && validatedWord[i].classList == 'letter-yellow') {
      validatedWord[i].classList = 'letter-red'
    }
  }
}

export default LetterValidator
