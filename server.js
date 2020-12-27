const http = require('http');
const url = require("url");

const port = 8080;

const server = http.createServer((req, res) => {
    
    console.log(req.method);
    if (req.method == "POST"){
        req.on("end", () => console.log(req.headers.whatwillsavetheworld));
    }
    const name = url.parse(req.url, true).query.name
    res.end(`Hello ${name ? name : "user" }`);
    
});

server.listen(port, (err) => {
    if (err) {
        return console.log('Err is', err);
    }
    console.log(`Server listening on ${port}`);
});