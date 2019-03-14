let express = require("express")
let mongoose = require("mongoose")

const User = mongoose.model('users')
const Router = express.Router()

Router.get('/users', (req, res) => {
  try {
    const users = User.find().exec()

    if(!users)
      return res.json("false")

    return res.json(users)
  }catch (e) {
    console.log(e)
  }
})

module.exports = Router