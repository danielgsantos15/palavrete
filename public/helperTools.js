// Do post on server
const doRequests = async (request) => {
  try {
    const data = {
      word: request.data
    }
    const url = `http://localhost:3000${request.resource}`
    const response = await fetch(url, {
      method: request.method,
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const changeTheSelectedRow = (tipoDeSeletor, elementDOMToWork, actualStatus, statusToChange) => {
  let variavel = elementDOMToWork.querySelectorAll(tipoDeSeletor)
  for (let index = 0; index < variavel.length; index++) {
    variavel[index].classList.remove(actualStatus)
    variavel[index].classList.add(statusToChange)
  }
}

// Remove the past word from array
const clearCurrentArrayWord = () => {
  attempt = []
}

// Verify if the player won the game
const checkVictoryStatus = (playerWin) => {
  if (currentRow == 5 || playerWin) {
    disableKeyboard()
    gameOverMessage(playerWin)
    return
  }  
  currentRow++
}

// Do POST of the word
const doRequestToDatabase = async () => {
  let data = await doRequests({ 'method': 'POST', resource: '/word', data: attempt })
  goToNextRound(data)
}

// Check if the wrote word exists in database
const isValidWord = () => {
  if (!isValidWord) {
    console.log('A palavra digitada não existe')
    return 
  }
  goToNextRound()
}

// show game over message
const gameOverMessage = (playerWin) => {
  if (playerWin) {
    return console.log('Você venceu!')
  }
  return console.log('Fim de jogo')
}

// Disable keyboard in the end of the game
const disableKeyboard = () => {
  let keyboard = document.getElementById('keyboardContainer').getElementsByTagName('*')
  for (let keys of keyboard) {
    keys.disabled = true
  }
  validCharacters = []
}