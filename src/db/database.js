const data = require("./data-mock")

class DatabaseManager {
  getWord() {
    let word = data.values()
    return word.next().value
  }
}

module.exports = DatabaseManager