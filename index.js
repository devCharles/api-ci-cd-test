
const express = require('express')

const app = express()

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'Hola desde tu API'
  })
})

app.listen(port, () => {
  console.log('Server is listening')
})

module.exports = app
