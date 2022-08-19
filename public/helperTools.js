// Requests
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

const clearCurrentArrayWord = () => {
  attempt = []
}

const moveToNextRow = () => {
  if (currentRow == 5) {
    document.getElementById('enterButton').disabled = true
    return
  }  
  currentRow++
}

// faz o post da palavra
let data
const doRequestToDatabase = async () => {
  data = await doRequests({ 'method': 'POST', resource: '/word', data: attempt })
}

// checa se a palavra existe
const isValidWord = (isValidWord) => {
  if (!isValidWord) {
    return console.log('A palavra digitada não existe')
  }
  goToNextRound()
}
