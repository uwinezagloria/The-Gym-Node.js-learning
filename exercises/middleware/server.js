/* Create an Express.js middleware function called ⁠ requestLogger ⁠ that logs the following information for every incoming request:

•⁠  ⁠HTTP method (e.g., GET, POST)
•⁠  ⁠URL path
•⁠  ⁠Timestamp of the request
•⁠  ⁠Response time (in milliseconds)

Then:

1.⁠ ⁠Integrate this middleware into an Express app.
2.⁠ ⁠The app should have at least *two routes* (⁠ / ⁠ and ⁠ /users ⁠) that return a JSON response.
3.⁠ ⁠Ensure the middleware runs for *all routes* and prints logs in the following format:
⁠ shell
[2025-11-11T18:23:10Z] GET /users - 5ms */
import express from "express"
const app=express()
const port=8000
const requestLogger=async(req,res,next)=>{
    const startTime=Date.now()
    const timeStamp=new Date().toISOString()
    res.on("finish",()=>{
const endTime=Date.now()-startTime
console.log(`[${timeStamp}] ${req.method} ${req.url} - ${endTime}ms`)
    })
    next()

}
app.use(requestLogger)
app.get("/",(req,res)=>{
    res.json({message:"home route"})
})
app.get("/users",(req,res)=>{
    res.json({message:"all users "})
})
app.listen(port,()=>console.log(`server is running on port ${port}`))