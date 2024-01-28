const express = require('express')
const app = express()

app.use((req , res , next) => {
    if (!req.query.role){
        res.send('Not authenticated').statusCode = 400
    }else {
        
        console.log(`[${new Date().toISOString()}]: ${req.method}`)
    next();
    }
    
})

app.get('/getMethod', (req , res , next) => {
    console.log(req.method); // GET
    // next()
    let role = req.query.role
    res.send(`Request Method is ${req.method} , Welcome ${role}`)
    
})

app.put('/updateMethod' , (req , res) => {
    console.log(req.method)
    res.send(`Request Method is ${req.method}`)
})

app.post('/postMethod' , (req , res) => {
    console.log(req.method)
    res.send(`Request Method is ${req.method}`)
})

app.delete('/deleteMethod' , (req , res) => {
    console.log(req.method)
    res.send(`Request Method is ${req.method}`)
})

app.use((req , res ) => {
    
    res.send("An error occurred")
})

app.listen(3000 , () => {
    console.log("Server started at port 3000")
})