let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
}, { collection: 'users' })

module.exports = userSchema