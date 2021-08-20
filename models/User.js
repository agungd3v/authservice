const db = require('mongoose')

const userSchema = db.Schema({
  name: {
    type: String,
    default: null
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  carts: {
    type: Array,
    default: []
  },
  created_at: {
    type: Date,
    default: Date()
  }
})

module.exports = db.model('users', userSchema)