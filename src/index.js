require("./mongo")
let app = require("express")(),
    server = require("http").createServer(app),
    Routes = require("./routes")


app.use('/users', Routes)

server.listen(8080, () =>
  console.log('[Express] is running on port 8080')
)