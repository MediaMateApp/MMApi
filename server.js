const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const port = 4000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.listen(port, () => console.log(`Listening to ${port}...`))