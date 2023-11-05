const http = require("http");

const PORT = 3024;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(`Welcome to Nodejs Server`);
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Contact Page!");
  } else if (req.url == "/product") {
    const options = {
        hostname: 'fakestoreapi.com',
        path: '/products/1',
        method: 'GET'
    }
    
    const apiReq = http.request(options, (apiRes) => {
        apiRes.on('data', (data) => {
            res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(data.toString());
        })
    })
    
    apiReq.on("error", () => {
        console.log(e);
    })
    
    apiReq.end();
    
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("About Page!");
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end("Server Error!");
  }
});

server.listen(PORT, () => {
  console.log(`server running at ${HOSTNAME} : ${PORT}`);
});
