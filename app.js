let mongo = require("./src/mongo")
let app = require("express")(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server),
    ent = require("ent"),
    Routes = require("./src/routes")


app.get('/', Routes)

server.listen(8080, '', () =>
  console.log('[Express] is running on port 8080')
)