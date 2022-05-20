const wordBase = ["teste" , "pasta" , "sexta" , "viola" , "pasto" , "tripa", "noite" , "velho" , "placa" , "mosto" , "terra" , "garra" , "marra"]
const secretWord = wordBase[Math.floor(Math.random() * wordBase.length)]
const secretArray = Array.from(secretWord)

// secret word generated automatcally
console.log("palavra secreta:" , secretWord)



// compare with secret word and show informations of written word
let tryes = (attempt) => {
  console.log(`${attempt} errou, tente novamente`)
  let arrWord = Array.from(attempt)
  return arraysCheck(arrWord)
}

// compare letter for letter of arrays
let arraysCheck = (arrWord) => {
  let arrTryed = arrWord
  secretArray[0] == arrTryed[0]
  secretArray[1] == arrTryed[1]
  secretArray[2] == arrTryed[2]
  secretArray[3] == arrTryed[3]
  secretArray[4] == arrTryed[4]
}

// check written word in database
// let dataCheck = (attempt) => {
//   return wordBase.includes(attempt)
// }

let wordTrue = (attempt) => {
 console.log(`A palavra ${attempt} não existe`)
}

// victory message
let won = (attempt) => {
  console.log(`parabéns! você acertou! ${attempt}`)
}

// receive written word for the player in the frontend
let writtenWord = () => {
  // let attempt = "poker"
  let attempt = wordBase[Math.floor(Math.random() * wordBase.length)]
  // check if written word exists in database
  if (wordBase.includes(attempt) == true) {
      if (attempt == secretWord) {
        return won(attempt)
      } return tryes(attempt)
    } wordTrue(attempt)
} 
writtenWord()
