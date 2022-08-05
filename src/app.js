import express from 'express'

const app = express()
app.use(express.static('public'));

app.get('/word', (req, res) => {
  console.log(req.body)
})

export default app
