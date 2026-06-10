import http from "node:http";
/*
Create a const to store the server.
It should hold a new instance of the http module’s createServer method.

That method takes in a callback function with two params: 
  The request object
  The response object

The response object exposes the end() method. Call it and pass in a string.

Our instance of createServer has access to a listen() method. 
Call it passing in two arguments:
  The port
  A callback function which can log "server connected on port 8000" */
const port=8000;
  const server=http.createServer((req,res)=>{

  //  res.end("Server was created");
  // res.end takes 3 parameter
  res.end ("server was created","UTF-8",()=>console.log("Response end "));

}) 
server.listen(port,()=>console.log(`server connected on port ${8000}`))