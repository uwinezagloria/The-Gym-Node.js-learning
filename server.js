const http=require("http")
    const fs=require("fs")
const  server=http.createServer((req,res)=>{
   
    console.log("request made")
    // request body 
    console.log(req.url,req.method)
    //set Header content-type
    
    /* this is for  plain text
    res.setHeader('content-type','text/plain')
    res.write("Hello world")  */
    //for html
    res.setHeader('content-type','text/html')
    //res.write("<h1>Hello world </h1>")
    //res.write("<h2>Hello again ! </h1>")
    //res.end()
    fs.readFile()
})
server.listen(3000,"localhost",(req,res)=>{
 console.log("we are listen to port 3000")
})