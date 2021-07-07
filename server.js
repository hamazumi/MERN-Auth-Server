require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')

//config express app
const app = express()
const PORT = process.env.PORT || 3001
const rowdyResults = rowdy.begin(app)

//middleware
app.use(cors())
//body parser middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // for the request body

app.get('/', (req, res) => {
    res.json({ msg: 'hello from the test 🤙' })
})

// listen on a port
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Port ${PORT} Working!!!!`)
})