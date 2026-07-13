import express from "express"
import {v4 as uuidV4} from "uuid"
import fs from "fs/promises"
const app=express()
const port=8000
app.use(express.json())
app.post("/item",async(req,res)=>{
    try{
         let {name,quantity}=req.body
    let item={
        id:uuidV4(),
        name:name,
        quantity:quantity
    }
const data=await fs.readFile("data.json","utf8")
let items=JSON.parse(data)
items.push(item)
 fs.writeFile("data.json",JSON.stringify(items))
  res.status(200).json({message:"inserted item successfully"})
 
    }
    catch(error){
        res.status(500).json({error:"Something went wrong"})
    }
   
})
app.get("/items",async(req,res)=>{
    try{
        const data=await fs.readFile("data.json","utf8")
        res.status(200).json({data:JSON.parse(data)})

    }
    catch(error){
        res.status(500).json({error:"something went wrong"})
    }
})
app.put("/item",async(req,res)=>{
    try{
        const {id}=req.query
        console.log(id)
const{name,quantity}=req.body
const data=await fs.readFile("data.json","utf8")
const items=JSON.parse(data)
const item=items.find((item)=>item.id.trim()===id.trim())
if(!item){
    return res.status(404).json({message:`no item with id ${id}`})
}
item.name=name
item.quantity=quantity
await fs.writeFile("data.json",JSON.stringify(items))
res.status(200).json({message:"item updated successful",data:items})
}

catch(error){
    res.status(500).json({message:"something went wrong"})
}

})
app.delete("/item",async(req,res)=>{
    try{
        const {id}=req.query
const data=await fs.readFile("data.json","utf8")
const items=JSON.parse(data)
const index=items.findIndex((item)=>item.id.trim()===id.trim())
items.splice(index,1)
await fs.writeFile("data.json",JSON.stringify(items))
res.status(200).json({message:"item was removed succesfully"})
    }
    catch(error){
        res.status(500).json({error:"something went wrong"})
    }
})
app.listen(port,()=>console.log(`server is running on port ${port}`))