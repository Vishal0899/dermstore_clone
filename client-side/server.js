const jsonServor = require("json-server")
const server = jsonServor.create()
const router = jsonServor.router("./db.json")
const middlewares = jsonServor.defaults({
    static :"./build"
})
const port = 8080;
server.use(middlewares);
server.use(
    jsonServor.rewriter({
        "/api/" : "/51"
    })
)

server.use(router)
server.listen(port, ()=>{
    console.log(`server is running on  ${port}`)
})