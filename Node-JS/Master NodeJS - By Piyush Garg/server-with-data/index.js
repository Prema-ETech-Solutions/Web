const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// A simple logging middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware/handler
}

// A middleware to add a custom header
function customHeader(req, res, next) {
    res.setHeader("X-Custom-Header", "Learning Express");
    next();
}

// A middleware to check for a query parameter
function checkQuery(req, res, next) {
    if (!req.query.token) {
        return res.status(400).send("Token is required!");
    }
    next();
}

// Use the logger middleware for all routes
app.use(logger);

app.get("/ping", (req, res) => {
    return res.send("pong");
});

app.get("/api/users", (req, res) => {
    const data = require("./MOCK_DATA.json");
    return res.json(data);
});

app.get("/users", (req, res) => {
    html = ``;
    html += `<ul>`;
    const data = require("./MOCK_DATA.json");
    data.forEach((user) => {
        html += `<li>${user.username}</li>`;
    });
    html += `</ul>`;
    return res.send(html);
});

app.get("/api/users/:id", (req, res) => {
    const data = require("./MOCK_DATA.json");
    const id = Number(req.params.id);
    const user = data.find((user) => user.id == id);
    return res.json(user);
});

app.get("/users/:id", (req, res) => {
    const data = require("./MOCK_DATA.json");
    const id = Number(req.params.id);
    const user = data.find((user) => user.id == id);
    html = ``;

    Object.keys(user).forEach((key) => {
        html += `<p>${key}: ${user[key]}</p>`;
    });
    return res.send(html);
});

app.use(express.urlencoded({ extended: false }));

app.post("/api/set", (req, res) => {
    const userData = require("./MOCK_DATA.json");
    const body = req.body;

    userData.push({ ...body, id: userData.length + 1 });
    // return res.json(body);
    // userData.push(newUser);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(userData), (err) => {
        if (err) {
            return res.json({ status: false, message: "Error in writing file" });
            // return res.send();
        }
        return res.json({ status: true, id: userData.length });
    });
});







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Status Codes
// ### 1xx: Informational Responses
// 100 Continue
// 101 Switching Protocols
// 102 Processing(WebDAV)
// 103 Early Hints

// ### 2xx: Success
// 200 OK
// 201 Created
// 202 Accepted
// 203 Non - Authoritative Information
// 204 No Content
// 205 Reset Content
// 206 Partial Content
// 207 Multi - Status(WebDAV)
// 208 Already Reported(WebDAV)
// 226 IM Used

// ### 3xx: Redirection
// 300 Multiple Choices
// 301 Moved Permanently
// 302 Found
// 303 See Other
// 304 Not Modified
// 305 Use Proxy(deprecated)
// 306 Switch Proxy(no longer used)
// 307 Temporary Redirect
// 308 Permanent Redirect

// ### 4xx: Client Errors
// 400 Bad Request
// 401 Unauthorized
// 402 Payment Required(reserved)
// 403 Forbidden
// 404 Not Found
// 405 Method Not Allowed
// 406 Not Acceptable
// 407 Proxy Authentication Required
// 408 Request Timeout
// 409 Conflict
// 410 Gone
// 411 Length Required
// 412 Precondition Failed
// 413 Payload Too Large
// 414 URI Too Long
// 415 Unsupported Media Type
// 416 Range Not Satisfiable
// 417 Expectation Failed
// 418 I'm a teapot (RFC 2324)
// 421 Misdirected Request
// 422 Unprocessable Entity(WebDAV)
// 423 Locked(WebDAV)
// 424 Failed Dependency(WebDAV)
// 425 Too Early
// 426 Upgrade Required
// 428 Precondition Required
// 429 Too Many Requests
// 431 Request Header Fields Too Large
// 451 Unavailable For Legal Reasons

// ### 5xx: Server Errors
// 500 Internal Server Error
// 501 Not Implemented
// 502 Bad Gateway
// 503 Service Unavailable
// 504 Gateway Timeout
// 505 HTTP Version Not Supported
// 506 Variant Also Negotiates
// 507 Insufficient Storage(WebDAV)
// 508 Loop Detected(WebDAV)
// 510 Not Extended
// 511 Network Authentication Required
