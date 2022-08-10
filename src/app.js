import express from 'express'
import { validate } from 'uuid'
import StartPalavrete from './startPalavrete.js'
import LetterValidator from './validator/letter.validator.js'

const app = express()
const lettervalidator = new LetterValidator(5)
app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/word', (req, res, next) => {
  const { word } = req.body
  const start = new StartPalavrete(word)
  let secretWord = start.getSecretWordFromDatabase()
  if (!start.hasClientWordOnDatabase()) {
    res.status(404)
    next()
  }
  const validatedArray = lettervalidator.compareWordsToClassifyTheLetterPosition(word, secretWord)
  res.send(validatedArray)
})

export default app
