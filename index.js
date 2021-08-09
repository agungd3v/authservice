const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {})

app.get("/", (req, res) => {
  return res.json({
    status: true,
    message: '/'
  })
})

const auth = require("./controllers/AuthController")

app.post("/register", auth.register)

app.listen(4000, () => {
  console.log("express ready on port 4000")
})