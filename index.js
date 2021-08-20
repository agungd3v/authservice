const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {})

const route = require('./routes')

app.use(route)
app.listen(4000, () => {
  console.log("express ready on port 4000")
})