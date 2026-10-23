const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Node.js CI/CD Application is running!");
});

server.listen(3010, () => {
    console.log("Server running on port 3010");
});