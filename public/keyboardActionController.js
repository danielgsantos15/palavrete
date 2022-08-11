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

const handleEnter = async () => {
  if (currentColumn != columns) {
    return
  }

  changeTheSelectedRow(".typing", document, "typing", "disabled")
  currentColumn = 0
  currentRow++

  const currentDesableRow = document.querySelector("#row" + currentRow)
  changeTheSelectedRow(".tile-column", currentDesableRow, "disabled", "typing")

  const data = await doRequests({ 'method': 'POST', resource: '/word', data: attempt })
  return data
}

// Enter Button
const showEnterButton = () => {
  const enterButton = document.createElement("button")
  enterButton.textContent = "enter"
  enterButton.addEventListener("click", handleEnter)
  backspaceAndEnterRow.append(enterButton)
}
