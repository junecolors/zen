const express = require('express')
const cors = require('cors')
const logger = require('morgan')



// Configure our express application
const PORT = process.env.PORT || 3000
const app = express()

// Middleware Pipeline
app.use(cors())
app.use(logger('dev'))

app.get('/', async function(req, res) {
  const response = await fetch('https://zenquotes.io/api/random')
    const data = await response.json()
    res.json(data)
})

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`)
})