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

const showWordColor = (validatedWord, indexRow) => {
  let index = 0
  document.getElementById(`row${indexRow}`)
  validatedWord.map(element => {
    const actualColumn = document.getElementById(`row${indexRow}column${index}`)
    actualColumn.className += ` ${element.classList}`
    index++
  })
}

// Keyboard
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
