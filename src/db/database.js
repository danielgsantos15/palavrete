import data from './data-mock.js'

class DatabaseManager {
  getWord() {
    let word = data.values()
    return word.next().value
  }

  checkAtDatabase(word) {
    let result = false
    data.forEach((dado) => {
      if (dado == word) 
        result = true
    });
    return result
  }
}

export default DatabaseManager
