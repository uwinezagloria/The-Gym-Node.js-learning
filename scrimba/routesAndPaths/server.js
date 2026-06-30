/*
Challenge: 

1.Set up a server that serves the string 
    '<html><h1>The server is working</h1></html>'.
    
    What should the content type be? 
    What status code should you send?

2. Listen on port 8000 and log a connection message to the console.

3. Open the browser to see your first served HTML.

*/
import http from "node:http"
import fs from "node:fs/promises"
import path from "node:path"
import { serverStatic } from "./utils/serveStatic.js"
const port=8000
/*
Challenge 1:

1. Get the name of the directory holding this server.js file and store it to a const ‘__dirname’.
*/
const __dirname=import.meta.dirname

console.log("cwd",process.cwd())
console.log("Hy")
console.log(__dirname)
/*
Challenge 3:

1. Import and call serveStatic and pass it the directory of this current module.
*/

 //erveStatic(__dirname)
 const pathDir=path.join(__dirname,"public")
 const filePath=path.join(pathDir,"index.html")
 console.log(filePath)
const server=http.createServer(async(req,res)=>{
const pathToResources=path.join(pathDir,req.url==="/"?"index.html":req.url)
//await serverStatic(req,res,__dirname)
    const content=await fs.readFile(pathToResources)
    res.setHeader("Content-Type","text/html")
    res.write("<html><h1>The server is working</h1></html>")
    res.statusCode=200
   // res.writeHead(200,{"Content-Type":"application/json"})
   
    res.end(content)
})
server.listen(port,()=>{console.log(`server listening  on port ${port}`)})