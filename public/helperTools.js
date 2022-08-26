// Do post on server
const doRequests = async (request) => {
  try {
    const data = {
      word: request.data
    }
    const url = `http://localhost:3000${request.resource}`
    const response = await fetch(url, {
      method: request.method,
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

// Change the select row to next round
const changeTheSelectedRow = (tipoDeSeletor, elementDOMToWork, actualStatus, statusToChange) => {
  let variavel = elementDOMToWork.querySelectorAll(tipoDeSeletor)
  for (let index = 0; index < variavel.length; index++) {
    variavel[index].classList.remove(actualStatus)
    variavel[index].classList.add(statusToChange)
  }
}

// Remove the past word from array
const clearCurrentArrayWord = () => {
  attempt = []
}

// Verify if the player won the game
const checkVictoryStatus = (playerWin) => {
  if (currentRow == 5 || playerWin) {
    disableVirtualKeyboard()
    disableDesktopKeyboard()
    showGameOverModal(playerWin)
    return
  }  
  currentRow++
}

// Do POST of the word
const doRequestToDatabase = async () => {
  let data = await doRequests({ 'method': 'POST', resource: '/word', data: attempt })
  goToNextRound(data)
}

// Check if the wrote word exists in database
const isValidWord = () => {
  if (!isValidWord) {
    console.log('A palavra digitada não existe')
    return 
  }
  goToNextRound()
}

// Disable virtual keyboard in the end of the game
const disableVirtualKeyboard = () => {
  let keyboard = document.getElementById('keyboardContainer').getElementsByTagName('*')
  for (let keys of keyboard) {
    keys.disabled = true
  }
}

// Disable desktop keyboard in the end of the game
const disableDesktopKeyboard = () => {
  return validCharacters = []
}

// Start a new game
const newGame = () => {
  clearTable()
  clearVariables()
  clearGameOverModal()
  enableVirtualKeyboard()
  enableDesktopKeyboard(true)
}

// Enable virtual keyboard to start a new game
const enableVirtualKeyboard = () => {
  let keyboard = document.getElementById('keyboardContainer').getElementsByTagName('*')
  for (let keys of keyboard) {
    keys.disabled = false
  }
}

// Enable desktop keyboard to start a new game
const enableDesktopKeyboard = () => {
  return validCharacters = [
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Backspace",
  "Enter",
  "NumpadEnter"
  ]
}


// Clear variables value to start a new game
const clearVariables = () => {
  index = 0
  currentRow = 0
  currentColumn = 0
  attempt = []
}

// Clear table to start a new game
const clearTable = () => {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    document.getElementById(`row${rowIndex}`)

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      let tileColumn = document.getElementById(`row${rowIndex}column${columnIndex}`)
      tileColumn.setAttribute('class', 'tile-column disabled')
      tileColumn.textContent = ''
    }
  }
  const currentDesableRow = document.querySelector("#row0")
  changeTheSelectedRow(".tile-column", currentDesableRow, "disabled", "typing")
}

// Clear game over modal statistics
const  clearGameOverModal = () => {
  let modalContent = document.getElementById('modalContent')
  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.firstChild)
  }
}
