import http from "node:http"
import fs from "node:fs"
import path from "node:path"
const pathurl=import.meta.dirname
const inputfile=path.join(pathurl,"input.txt")
const outputFile=path.join(pathurl,"output.txt")
console.log(inputfile)
const server=http.createServer((req,res)=>{
if(req.method==="GET"){
fs.readFile(inputfile,'utf8',(err,data)=>{
    if(err){
        res.writeHead(500,{"content-type":"plain/text"})
       return  res.end("WE COULD NOT READ FILE THERE IS SOMETHING THAT WENT WRONG")
    }
   res.writeHead(200,{"content-type":"plain/text"})
    res.end(data)
}) 
}
else if(req.method==="POST"){
    let message=""
    req.on("data",(chunk)=>{
        message+=chunk
        
    })
    req.on("end",()=>{
       fs.writeFile(outputFile,message,()=>{
            res.writeHead(200,{"content-type":"application/json"})
            res.end(JSON.stringify({message:"message is wrote in the output file"}))
        })
    })
}
else{
    res.writeHead(405,{"content-type":"application/json"})
    res.end(JSON.stringify({message:"there is no other method allowed "}))
}
})
server.listen(3000,()=>{console.log("server is runnning ")})