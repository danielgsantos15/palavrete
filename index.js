const wordBase = ["teste" , "pasta" , "sexta" , "viola"]
const secretWord = wordBase[Math.floor(Math.random() * wordBase.length)]
const secretArray = Array.from(secretWord)


// * @params

// secret word generated automatcally
console.log("palavra secreta:" , secretWord)

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
  let attempt = document.getElementById("wroteWord").value
  // let attempt = wordBase[Math.floor(Math.random() * wordBase.length)]
  dataCheck(attempt)
} 
writtenWord()
