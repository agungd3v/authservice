const database = require('mongoose')

const config = host => database.connect(host, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

module.exports = { config }