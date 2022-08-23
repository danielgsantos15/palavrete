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

// Backspace Button
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
  
const showBackspaceButton = () => {
  const backspaceButton = document.createElement("button")
  backspaceButton.setAttribute("id", "backspaceButton")
  backspaceButton.addEventListener("click", handleBackspace)
  backspaceButton.textContent = "<"
  backspaceAndEnterRow.append(backspaceButton)
}

// Check word input
const checkWordInput = async () => {
  if (currentColumn != columns) {
    return
  } 
  doRequestToDatabase()
}

let index = 0
// Go to next round
const goToNextRound = (data) => {
  changeTheSelectedRow(".typing", document, "typing", "disabled")
  currentColumn = 0
  moveToNextRow()

  const currentDesableRow = document.querySelector("#row" + currentRow)
  changeTheSelectedRow(".tile-column", currentDesableRow, "disabled", "typing")

  clearCurrentArrayWord()
  showWordColor(data, index)
  index++
}

// Enter Button
const showEnterButton = () => {
  const enterButton = document.createElement("button")
  enterButton.setAttribute("id", "enterButton")
  enterButton.textContent = "enter"
  enterButton.addEventListener("click", checkWordInput)
  backspaceAndEnterRow.append(enterButton)
}


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
