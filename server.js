const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const mmRoutes = require('./routes/mm.routes')

const app = express()

const port = 4000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(mmRoutes)

app.listen(port, () => console.log(`Listening to ${port}...`))