const wordBase = ["teste" , "pasta" , "sexta" , "viola"]
const secretWord = wordBase[Math.floor(Math.random() * wordBase.length)]
const secretArray = Array.from(secretWord)

// * @params

// secret word generated automatcally
console.log("secret word:" , secretWord)

let greenCheck = (attempt) => {
  if (attempt != secretWord) {
    tryes(attempt)
  } else won(attempt)
  
  let arrTryed = Array.from(attempt)
  if (secretArray[0] == arrTryed[0]) {
    console.log(arrTryed[0])
  } else if (secretArray.includes(arrTryed[0]) == true) {
    console.log(arrTryed[0].toUpperCase())
  }else console.log("#")

  if (secretArray[1] == arrTryed[1]) {
    console.log(arrTryed[1])
  } else if (secretArray.includes(arrTryed[1]) == true) {
    console.log(arrTryed[1].toUpperCase())
  } else console.log("#")

  if (secretArray[2] == arrTryed[2]) {
    console.log(arrTryed[2])
  } else if (secretArray.includes(arrTryed[2]) == true) {
    console.log(arrTryed[2].toUpperCase())
  }else console.log("#")

  if (secretArray[3] == arrTryed[3]) {
    console.log(arrTryed[3])
  } else if (secretArray.includes(arrTryed[3]) == true) {
    console.log(arrTryed[3].toUpperCase())
  }else console.log("#")

  if (secretArray[4] == arrTryed[4]) {
    console.log(arrTryed[4])
  } else if (secretArray.includes(arrTryed[4]) == true) {
    console.log(arrTryed[4].toUpperCase())
  }else console.log("#")
}


// compare with secret word and show informations of written word
let tryes = (attempt) => {
  console.log(`${attempt} errou, tente novamente`)
  
}

// check written word in database
let dataCheck = (attempt) => {
  if (wordBase.includes(attempt) == true) {
    if (attempt == secretWord) {
      greenCheck(attempt)
    } else return greenCheck(attempt)
  } else wordNotFound(attempt)
}

// if does not found written word on database
let wordNotFound = (attempt) => {
 console.log(`A palavra ${attempt} não existe`)
}

// victory message
let won = (attempt) => {
  console.log(`parabéns! você acertou! ${attempt}`)
}

// receive written word for the player in the frontend
let writtenWord = () => {
  // let attempt = document.getElementById("wroteWord").value
  let attempt = wordBase[Math.floor(Math.random() * wordBase.length)]
  dataCheck(attempt)
} 
// writtenWord()

const tiles = document.querySelector(".tile-container");
const rows = 6;
const columns = 5;
let letrecoMap = {};

for (let index = 0; index < secretWord.length; index++) {
  letrecoMap[secretWord[index]] = index;
}
const guesses = [];

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

// writing the word
let currentRow = 0
let currentColumn = 0

const writingWord = (key) => {
  if(currentColumn != columns){
    const currentTile = document.querySelector(
      "#row" + currentRow + "column" + currentColumn
      )
      currentTile.textContent = key
      currentColumn++
    } return
}

// virtual keyboard 
const keyboardFirstRow = document.querySelector("#keyboardFirstRow")
const keyboardSecondRow = document.querySelector("#keyboardSecondRow")
const keyboardThirdRow = document.querySelector("#keyboardThirdRow")

const keyFirstRow = ["Q","W","E","R","T","Y","U","I","O","P"]
const keySecondRow = ["A","S","D","F","G","H","J","K","L"]
const keyThirdRow = ["Z","X","C","V","B","N","M"]

const createKeyboardRow = (keys, keyboardRow) => {
  keys.forEach((key) => {
    let buttonElement = document.createElement("button")
    buttonElement.textContent = key
    buttonElement.setAttribute("id",key)
    buttonElement.addEventListener("click", () => writingWord(key))
    keyboardRow.append(buttonElement)
  });
}
createKeyboardRow(keyFirstRow, keyboardFirstRow)
createKeyboardRow(keySecondRow, keyboardSecondRow)
createKeyboardRow(keyThirdRow, keyboardThirdRow)

//  backspace button
const backspaceAndEnterRow = document.querySelector("#backspaceAndEnterRow")
const handleBackspace = () => {
  console.log("backspace")
}

const backspaceButton = document.createElement("button")
backspaceButton.addEventListener("click", handleBackspace)
backspaceButton.textContent = "<"
backspaceAndEnterRow.append(backspaceButton)

// Enter button
const handleEnter = () => {
  if (currentColumn == columns) {
    console.log("Enter")
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