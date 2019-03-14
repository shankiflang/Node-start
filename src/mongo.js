let mongoose = require("mongoose")
let userSchema = require("./schemas")

const url = 'mongodb://localhost:27017/Slatsh'
const options = {
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
}

mongoose.connect(url, options)

mongoose.connection.on('connected', () =>
  console.log('[MongoDB] is running on port 27017')
)

mongoose.connection.on('disconnected', () =>
  console.warn('[MongoDB] is not connected')
)

mongoose.model('users', userSchema)