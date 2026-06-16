import http from "node:http";
import {getDataFromDb} from "./database/db.js"
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { getDataByPathparams } from "./utils/getDataByPathParams.js";


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
    const urlObj=new URL(req.url,`http://${req.headers.host}`)
    const queryObj=Object.fromEntries(urlObj.searchParams)
    
/*
Challenge:
1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
   Content-Type to ‘application/json’ - watch out for casing! 
*/
  

const destinations= await getDataFromDb()
if(urlObj.pathname==="/api" && req.method==="GET"){
  let filteredData=getDataByQueryParams(destinations, queryObj)
  sendJSONResponse(res,200,filteredData)
 
} 
 else if ( req.url.startsWith("/api/continent") && req.method==="GET" ) {
  /*
  Challenge:
  1. Check if the url starts with “/api/continent”.
    (Is there a JS method that allows you to check what a string starts with?)

  2. If it does, serve only items from that continent.
    (How can you get to what comes after the final slash?)
    (What method can you use to filter data?)
  */
 const urlArray=req.url.split("/")
 const continent=urlArray[urlArray.length-1]
 let filterData=getDataByPathparams(destinations,"continent",continent)

 sendJSONResponse(res,200,filterData)
 }
 else if(req.url.startsWith("/api/country") && req.method==="GET"){
  const urlArray=req.url.split("/")
  const country=urlArray[urlArray.length-1]
  let filtingByCountry=getDataByPathparams(destinations,"country",country)
  
  sendJSONResponse(res,200,filtingByCountry)
 }
else{
  /*
Challenge:
  1. If the client tries to access a route that isn’t covered by the above, send this object: 
      {error: "not found", message: "The requested route does not exist"}
  Think: what do we need to send along with the data?
*/
sendJSONResponse(res,404,(
  {
    error:"not found",
     message:"The requessted route does not exist"
    }
  ))

}
}) 
server.listen(port,()=>console.log(`server connected on port ${8000}`))