const wordBase = ["teste" , "pasta" , "sexta" , "viola" , "pasto" , "tripa", "noite" , "velho" , "placa" , "mosto" , "terra" , "garra" , "marra"]
const secretWord = wordBase[Math.floor(Math.random() * wordBase.length)]

// secret word generated automatcally
console.log("palavra secreta:" , secretWord)

// victory message
let won = (attempt) => {
  console.log(`parabéns! você acertou! ${attempt}`)
}

// compare with secret word and show informations of written word
let tryes = (attempt) => {
  console.log(`${attempt} errou, tente novamente`)
}

// check written word in database
// let dataCheck = (attempt) => {
//   return wordBase.includes(attempt)
// }

let wordCompare = (attempt) => {
 console.log(`A palavra ${attempt} não existe`)
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
    } wordCompare(attempt)
} 
writtenWord()
