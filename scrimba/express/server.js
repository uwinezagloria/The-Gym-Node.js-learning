import express from "express"
import cors from "cors"
import {startups} from "./data.js"
import router from "./router/index.js"
const PORT=8000
const app=express()
app.use(cors()) // an open cors policy  which allow all access
app.use("/api",router)
app.use((req,res)=>{
  res.status(404).json( {message: "Endpoint not found. Please check the API documentation." })
})



//static files
app.use(express.static("public"))
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))