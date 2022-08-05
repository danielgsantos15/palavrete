import express from 'express'

const app = express()
app.use(express.static('public'));

app.get('/', (req, res) => {
  
})

export default app
