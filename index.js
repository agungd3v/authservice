const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()
require('./config/database').config(process.env.DB_HOST)

app.use(cors())
app.use(bodyParser.json())

const route = require('./routes')

app.use(route)
app.listen(4001, () => {
  console.log('Ready on port 4001')
})