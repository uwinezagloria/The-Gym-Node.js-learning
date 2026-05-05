const fs=require('fs') //fs stands for filesystem
//reading file
fs.readFile("./docs/blog1.txt",(error,data)=>{
    if(error){
        console.log(error)
    }
    console.log(data) // outputs buffer :<Buffer 68 65 6c 6c 20 4e 6f 64 65 20 6a 73>
console.log(data.toString()) // changes buffer to string adn we get the text 
})
// writing in file
fs.writeFile("./docs/blog1.txt","hello world",()=>{
console.log("file  was written ")
} )
//if we want to write in a file that does not exist  there is no error thtat file will be created instead
fs.writeFile("./docs/blog2.txt","hello again !",()=>{
    console.log("file is written and created")
})
//directory
if(!fs.existsSync("./assets")){
fs.mkdir("./assets",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("folder created")
})
}
else{
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder was deleted")
    })
}


