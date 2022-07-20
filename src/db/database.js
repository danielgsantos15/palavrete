import data from './data-mock.js'

class DatabaseManager {
  getWord() {
    let word = data.values()
    return word.next().value
  }
}

export default DatabaseManager
