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
    isValidWord(response.ok)
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

// Go to next row
const moveToNextRow = () => {
  if (currentRow == 5) {
    document.getElementById('enterButton').disabled = true
    return
  }  
  currentRow++
}

// Do POST of the word
let data
const doRequestToDatabase = async () => {
  data = await doRequests({ 'method': 'POST', resource: '/word', data: attempt })
}

// Check if the wrote word exists in database
const isValidWord = (isValidWord) => {
  if (!isValidWord) {
    console.log('A palavra digitada não existe')
    return 
  }
  goToNextRound()
}
