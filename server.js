const http = require('http')
const fs = require('fs')

let times = 1
const server = http.createServer((req , res) => {
    res.setHeader('Content-type','text/html')
    let path = './views/'
    switch(req.url){
        case '/':
            res.statusCode = 200
            path += 'home.html'
            break;
        case '/about':
            res.statusCode = 200
            path += 'about.html'
            break;
        case '/aboutMe':
            res.statusCode = 301
            res.setHeader("Location", "/about")
            break;
        default:
            path += '404.html'
            res.statusCode = 404
    }
    console.log("I got a request " + times)
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    
    fs.readFile(path , (err , data) => {
        if (err){
            console.error(err)
            res.end('An error occurred')
        }
        else{
            res.end(data)
        }
    } )
    // res.end('<a href = "https://www.youtube.com">Hello, World! This a new response</a>');
    times += 1
})

server.listen(3000 , 'localhost' , () => {
    console.log("The server started listening for requests")
})