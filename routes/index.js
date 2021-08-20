const route = require('express').Router()

const auth = require("../controllers/AuthController")

route.get("/", (req, res) => {
  return res.json({ status: true, message: '/' })
})

route.post("/register", auth.register)
route.post("/login", auth.login)

module.exports = route