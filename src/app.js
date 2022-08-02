import express from 'express'

const app = express()

app.use(express.static(__dirname + '../public'));

// app.get('/', (req, res) => {
//   // res.send('teste')
//   res.status(200).render('../public/index.ejs')
// })

export default app
