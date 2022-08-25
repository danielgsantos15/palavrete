// Insert letters in the current row
const writingWord = (key) => {
  if (currentColumn != columns) {
    const currentTile = document.querySelector(
      "#row" + currentRow + "column" + currentColumn
    )
    currentTile.textContent = key
    currentColumn++
    attempt.push(key)
  } return
}

// Backspace button action
const handleBackspace = (key) => {
  if (currentColumn === 0) {
    return
  }
  currentColumn--
  attempt.pop(key)
  guesses[currentRow][currentColumn] = ""
  const tile = document.querySelector("#row" + currentRow + "column" + currentColumn)
  tile.textContent = ""
}

// Check if word input has all letters inserted
const checkWordInput = () => {
  if (currentColumn != columns) {
    return
  } 
  doRequestToDatabase()
}

// Go to next round
let index = 0
const goToNextRound = (data) => {
  showWordColor(data, index)
  arrayData = []
  data.forEach(dataClass => {
    arrayData.push(dataClass.classList)
  });
  if (!arrayData.includes('letter-red') && !arrayData.includes('letter-yellow')) {
    return checkVictoryStatus(true)
  }
  changeTheSelectedRow(".typing", document, "typing", "disabled")
  currentColumn = 0
  checkVictoryStatus()

  const currentDesableRow = document.querySelector("#row" + currentRow)
  changeTheSelectedRow(".tile-column", currentDesableRow, "disabled", "typing")

  clearCurrentArrayWord()
  index++
}

// Take letters from desktop keyboard
document.onkeydown = (event) => {
  let key = event.code  
  if (!validCharacters.includes(key)) {
    return
  }

  if (key.startsWith('Key')) {
    return writingWord(key.substring(3))
  }

  if (key == 'Enter') {
    return checkWordInput()
  }

  return handleBackspace()
}

// Start a new game
const newGame = () => {
  currentRow = 0
  currentColumn = 0
  attempt = []
  enableKeyboard()
  clearTable()
  
  console.log('jogar novamente')
}

// Clear table to start a new game
const clearTable = () => {

}