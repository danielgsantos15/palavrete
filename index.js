const wordsBase = ["teste" , "pasta" , "sexta" , "viola" , "pasto" , "tripa"]
const secretWord = wordsBase[Math.floor(Math.random() * wordsBase.length)]

console.log("palavra secreta:" , secretWord)

let tentativas = () => {
  let tentativa = wordsBase[Math.floor(Math.random() * wordsBase.length)]
  console.log(tentativa)
  return tentativa
}

let venceu = () => {
  console.log("Você acertou!")
}


for (let index = 5; index > 0; index--) {
  if (tentativas() == secretWord) {
    venceu()
    break
  } else console.log(`Você errou, restam ${index} tentativas`)
}

