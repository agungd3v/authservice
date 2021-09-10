const hash = require('password-hash')
const user = require('../models/User')

const AuthController = {
  register: async (req, res) => {
    const { name, username, email, password } = req.body
    const data = new user({
      name: name,
      username: username,
      email: email,
      password: hash.generate(password)
    })
    try {
      const store = await data.save()
      res.json({ status: true, message: store })
    } catch (error) {
      res.json({ status: false, message: error })
    }
  },
  login: async (req, res) => {
    const { usmail, password } = req.body;
    try {
      const data = await user.findOne({
        $or : [
          { email: usmail },
          { username: usmail }
        ]
      }).select('+password')
      if (data) {
        const passwordVerify = hash.verify(password, data.password)
        if (passwordVerify) {
          return res.json({
            status: true,
            message: data
          })
        } else {
          return res.json({ status: false, message: 'Incorrect password, check your password again' })
        }
      } else {
        return res.json({ status: false, message: 'Incorrect email or username or password' })
      }
    } catch (error) {
      return res.json({ status: false, message: error.message })
    }
  }
}

module.exports = AuthController