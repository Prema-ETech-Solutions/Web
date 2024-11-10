const http = require("http");
const fs = require("fs");





const myServer = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);

    fs.appendFile("logs.txt", new Date().toISOString() + " - " + req.url + "\n", (err) => {
        if (err) {

        }
    });
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("Home Page");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("About Page");
            break;
        case "/contact":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("Contact Page");
            break;
        case "/services":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("Services Page");
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("404 Page Not Found");
            break;
    }


}); // createServer() method creates a new HTTP server and returns it.

myServer.listen(3000, "localhost", () => {
    console.log("Server is running on port 3000");
}); // listen() method binds the server to the specified port and hostname.