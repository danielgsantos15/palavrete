// Show game table
const showTable = () => {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    guesses[rowIndex] = new Array(columns)
    
    const tileRow = document.createElement("div")
    tileRow.setAttribute("id", `row${rowIndex}`)
    tileRow.setAttribute("class", "tile-row")
    
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const tileColumn = document.createElement("div")
      const rowAndColumnId = `row${rowIndex}column${columnIndex}`
      const rowAndColumnClass = rowIndex === 0 ? "tile-column typing" : "tile-column disabled"
      
      tileColumn.setAttribute("id", rowAndColumnId)
      tileColumn.setAttribute("class", rowAndColumnClass)
      tileRow.append(tileColumn)
      guesses[rowIndex][columnIndex] = ""
    }
    tiles.append(tileRow)
  }
}

// Show virtual bacspace button
const showBackspaceButton = () => {
  const backspaceButton = document.createElement("button")
  backspaceButton.setAttribute("id", "backspaceButton")
  backspaceButton.addEventListener("click", handleBackspace)
  backspaceButton.textContent = "<---"
  backspaceAndEnterRow.append(backspaceButton)
}

// Show virtual enter button
const showEnterButton = () => {
  const enterButton = document.createElement("button")
  enterButton.setAttribute("id", "enterButton")
  enterButton.textContent = "ENTER"
  enterButton.addEventListener("click", checkWordInput)
  backspaceAndEnterRow.append(enterButton)
}

// Show color letters accord the hits
const showWordColor = (validatedWord, indexRow) => {
  let index = 0
  document.getElementById(`row${indexRow}`)
  validatedWord.map(element => {
    const actualColumn = document.getElementById(`row${indexRow}column${index}`)
    actualColumn.className += ` ${element.classList}`
    index++
  })
}

// Show virtual keyboard
const showKeyboard = () => {
  const keyboardQuerySelector = {
    keyboardFirstRow: document.querySelector("#keyboardFirstRow"),
    keyboardSecondRow: document.querySelector("#keyboardSecondRow"),
    keyboardThirdRow: document.querySelector("#keyboardThirdRow")
  }

  const keyboardRows = {
    keyFirstRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    keySecondRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    keyThirdRow: ["Z", "X", "C", "V", "B", "N", "M"]
  }

  const createKeyboardRow = (keys, keyboardRow) => {
    keys.forEach((key) => {
      let buttonElement = document.createElement("button")
      buttonElement.textContent = key
      buttonElement.setAttribute("id", key)
      buttonElement.style = 'background-color: #fafafafa'
      buttonElement.addEventListener("click", () => {
        writingWord(key)
      })
      keyboardRow.append(buttonElement)
    })
  }

  createKeyboardRow(keyboardRows.keyFirstRow, keyboardQuerySelector.keyboardFirstRow)
  createKeyboardRow(keyboardRows.keySecondRow, keyboardQuerySelector.keyboardSecondRow)
  createKeyboardRow(keyboardRows.keyThirdRow, keyboardQuerySelector.keyboardThirdRow)
}

// Show game over modal message
const showGameOverModal = (gameResult, secretWord) => {
  const modal = document.querySelector('.modal')
  modal.style.display = 'block'

  const modalCreate = document.createElement('div')
  modalCreate.setAttribute('class', 'content')
  modalCreate.setAttribute('id', 'modalContent')
  modalCreate.style = 'display: block'

  const gameOverMessage = document.createElement('h1')
  gameOverMessage.textContent = gameResult ? 'VOCÊ VENCEU!' : 'VOCÊ PERDEU!'
  gameOverMessage.style = gameResult ? 'color: #51b36e;' : 'color: #943e3c;'

  const showSecretWord = document.createElement('p')
  showSecretWord.setAttribute('class', 'showSecretWord')
  showSecretWord.textContent = `A palavra era: ${secretWord}`

  const gameStatus = document.createElement('p')
  gameStatus.textContent = `Você usou ${currentRow + 1} de ${rows} tentativas`

  const playAgainButton = document.createElement('button')
  playAgainButton.textContent = 'JOGAR NOVAMENTE'
  playAgainButton.setAttribute('class', 'play-again-btn')
  playAgainButton.addEventListener('click', () => {modal.style.display = 'none', newGame()})

  const modalButton = document.createElement('button')
  modalButton.textContent = 'FECHAR'
  modalButton.setAttribute('class', 'modal-btn')
  modalButton.addEventListener('click', () => {modal.style.display = 'none'})

  modalContent.append(gameOverMessage, showSecretWord, gameStatus, playAgainButton, modalButton)
}

const rulesModal = () => {
  const rulesModal = document.querySelector('.rules-modal')
  rulesModal.style.display = 'block'

  const modalCreate = document.createElement('div')
  modalCreate.setAttribute('class', 'rules-content')
  modalCreate.setAttribute('id', 'modalRulesContent')
  modalCreate.style = 'display: block'
  
  const firstLine = document.createElement('p')
  firstLine.setAttribute('class', 'rules-text')
  firstLine.textContent = 'Descubra a palavra certa em 6 tentativas. Depois de cada tentativa todas as letras ficarão destacadas em cores de acordo com a proximidade da palavra oculta, dando dicas para a próxima tentativa. Acentos não são considerados.'
    
  const correctLine = document.createElement('p')
  correctLine.setAttribute('class', 'rules-text')
  correctLine.textContent = 'A letra em verde está na palavra na posição correta.'
  const correctRow = document.querySelector('.example-right-row')

  const displacedLine = document.createElement('p')
  displacedLine.setAttribute('class', 'rules-text')
  displacedLine.textContent = 'A letra em amarelo está na palavra, porém na posição incorreta.'
  const displacedRow = document.querySelector('.example-displaced-row')

  const wrongLine = document.createElement('p')
  wrongLine.setAttribute('class', 'rules-text')
  wrongLine.textContent = 'A letra em vermelho não está na palavra.'
  const wrongRow = document.querySelector('.example-wrong-row')
  
  const closeModalButton = document.createElement('button')
  closeModalButton.textContent = 'VAMOS LÁ!'
  closeModalButton.setAttribute('class', 'close-modal-btn')
  closeModalButton.addEventListener('click', () => {rulesModal.style.display = 'none'})
  
  modalRulesContent.append(firstLine, correctLine, correctRow, displacedLine, displacedRow, wrongLine, wrongRow, closeModalButton)
}
rulesModal()