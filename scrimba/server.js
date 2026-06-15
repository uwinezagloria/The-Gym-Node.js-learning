import http from "node:http";
import {getDataFromDb} from "./database/db.js"
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
  const server=http.createServer(async(req,res)=>{
/*
Challenge:
1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
   Content-Type to ‘application/json’ - watch out for casing! 
*/
  

const destinations= await getDataFromDb()
if(req.url==="/api" && req.method==="GET"){
  res.setHeader("Content-Type","application/json")
  res.statusCode=200
  res.write(JSON.stringify(destinations)) 
  res.end()
} else{
  /*
Challenge:
  1. If the client tries to access a route that isn’t covered by the above, send this object: 
      {error: "not found", message: "The requested route does not exist"}
  Think: what do we need to send along with the data?
*/
res.setHeader("Content-Type","application/json")
res.statusCode=404
res.write(JSON.stringify({error:"not found", message:"The requessted route does not exist"}))
res.end()
}
}) 
server.listen(port,()=>console.log(`server connected on port ${8000}`))