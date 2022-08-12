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

const showWordColor = (validatedWord) => {
  let index = 0
  const actualRow = document.getElementById(`row0`)
  console.log(actualRow)
  validatedWord.map(element => {
    const actualColumn = document.getElementById(`row0column${index}`)
    // console.log(actualColumn)
    actualColumn.className += ` ${element.classList}`
    index++
  })
}

// Keyboard
const showKeyboard = () => {
  const keyboardFirstRow = document.querySelector("#keyboardFirstRow")
  const keyboardSecondRow = document.querySelector("#keyboardSecondRow")
  const keyboardThirdRow = document.querySelector("#keyboardThirdRow")

  const keyFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keySecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keyThirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

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

  createKeyboardRow(keyFirstRow, keyboardFirstRow)
  createKeyboardRow(keySecondRow, keyboardSecondRow)
  createKeyboardRow(keyThirdRow, keyboardThirdRow)
}
