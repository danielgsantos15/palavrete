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
const showBackspaceButton = () => {
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

  const backspaceButton = document.createElement("button")
  backspaceButton.addEventListener("click", handleBackspace)
  backspaceButton.textContent = "<"
  backspaceAndEnterRow.append(backspaceButton)
}

// checa entrada da palavra
const checkWordInput = async () => {
  if (currentColumn != columns) {
    return
  } 
  doRequestToDatabase()
}

let index = 0
// avança para a próxima rodada
const goToNextRound = () => {
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
