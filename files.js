const fs = require('fs')

// read file 
fs.readFile('./sample/sample.txt', 'utf-8' , (err , data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

// Write files

fs.writeFile('./sample/sample.txt' , 'Hello , Starnoh John' , () => {
    console.log("The content is written to the file")
})

fs.writeFile('./sample/sample2.txt' , 'Hello , Starnoh John' , () => {
    console.log("The content is written to the file")
})

// Directory creation
if(fs.existsSync('./newDirectory')){
    fs.rmdir('./newDirectory',(err) => {
        if(err){
            console.error(err)
        }else{
            console.log("Directory removed ")
        }
    })
}else{
    fs.mkdir('./newDirectory', (err) => {
    if(err){
        console.error(err)
    }
    else{
        console.log("Directory created")
    }
})
}
