// Load HTTP module
const http = require("http");

// Set the IP address and port for the server
const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server
// listen on port 3000 for requests
const server = http.createServer( (req, res) => {
    // Set response HTTP header with an HTTP status and content type
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello there everyone!\n"); // When sending back text, it is good practice to end with a new line
} );

// Have the server listen for requests and write to the console in a callback function
server.listen(port, hostname, () => {
    console.log(`Server running at 'http://${hostname}:${port}'`); // `` allows for dynamic strings
} );

// Callback function is one that runs at the end of a function

/*
() => {}
equivalent to
function xyz() {};

No need for name because it is local to the parent function
*/
