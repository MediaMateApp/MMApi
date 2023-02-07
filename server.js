const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


//Erease Later
// const {conn} = require('./db/db')



const mmRoutes = require('./routes/mm.routes')

const app = express()

const port = 4000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(mmRoutes)

// app.use((err, req, res, next) => {

//     console.log(err)
//     res.status(404).json({
//         message: err
//     })

// });



app.listen(port, () => console.log(`Listening to ${port}...`))