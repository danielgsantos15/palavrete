const tiles = document.querySelector(".tile-container");
const rows = 6;
const columns = 5;
const guesses = [];
const backspaceAndEnterRow = document.querySelector("#backspaceAndEnterRow")
let currentRow = 0
let currentColumn = 0
let attempt = []
let letrecoMap = {};

const showTable = () => {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    guesses[rowIndex] = new Array(columns);
    const tileRow = document.createElement("div");
    tileRow.setAttribute("id", "row" + rowIndex);
    tileRow.setAttribute("class", "tile-row");
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const tileColumn = document.createElement("div");
      tileColumn.setAttribute("id", "row" + rowIndex + "column" + columnIndex);
      tileColumn.setAttribute(
        "class",
        rowIndex === 0 ? "tile-column typing" : "tile-column disabled"
      );
      tileRow.append(tileColumn);
      guesses[rowIndex][columnIndex] = "";
    }
    tiles.append(tileRow);
  }
}
showTable()

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
        doRequests({ url: '/word' })
      })
      keyboardRow.append(buttonElement)
    });
  }

  createKeyboardRow(keyFirstRow, keyboardFirstRow)
  createKeyboardRow(keySecondRow, keyboardSecondRow)
  createKeyboardRow(keyThirdRow, keyboardThirdRow)
}
showKeyboard()

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
showBackspaceButton()

const showEnterButton = () => {
  const handleEnter = () => {
    if (currentColumn == columns) {
      let typingRow = document.querySelectorAll(".typing")
      for (let index = 0; index < typingRow.length; index++) {
        typingRow[index].classList.remove("typing")
        typingRow[index].classList.add("disabled")
      }
      currentColumn = 0
      currentRow++

      const currentDesableRow = document.querySelector("#row" + currentRow)
      let columnsEnable = currentDesableRow.querySelectorAll(".tile-column")
      for (let index = 0; index < columnsEnable.length; index++) {
        columnsEnable[index].classList.remove("disabled")
        columnsEnable[index].classList.add("typing")
      }
    } return
  }

  const enterButton = document.createElement("button")
  enterButton.addEventListener("click", handleEnter)
  enterButton.textContent = "enter"
  backspaceAndEnterRow.append(enterButton)
}
showEnterButton()

const doRequests = (request) => {
  const baseUrl = 'http://127.0.0.1:5500' + request.url
  fetch(url)
    .then(response => console.log('Response', response))
    .catch((error) => console.log(error))
}
doRequests({
  method: 'POST',
  data: {},
  url: '/word'
})