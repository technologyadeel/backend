const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write("<h1>Http Server</h1>")
    }
    else if(req.url == '/about'){
        res.write("<h1>About</h1>")
    }
    res.end()
})

server.listen(5000)

console.log("This http server is running on 5000");