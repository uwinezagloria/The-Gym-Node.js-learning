/*## Practical
Make a simple REST API simulating an authentication mechanism.
You will have 2 endpoints:
- POST → /signup
    - You will pass a username and password
    - Save the credentials in a auth.json file
- POST → /login
    - You will pass username and password again and verify the credentials
    - If they match return "You are logged in!"
    - If they don’t match return "Wrong credentials!" */
    import express from "express"
    import fs from "node:fs/promises"
    import path from "node:path"
    const app=express()
    const port=8000
    app.use(express.json())
    app.post("/signup",async(req,res)=>{
        const {username,password}=req.body
        const message={
            username:username,
            password:password
        }
       await  fs.appendFile("auth.json",JSON.stringify(message))
            res.json({message:"data was saved successfully"})
    })
    app.post("/login",async(req,res)=>{
        const {username,password}=req.body
        console.log(username)
        console.log(password)
        const pathurl=path.join(import.meta.dirname,"auth.json")
        const datafromFile=await fs.readFile(pathurl)
        const data=JSON.parse(datafromFile.toString())
        if(!username){
        return res.json({message:"fyour username is required"})
        }
        if(!password){
            return res.json({message:"password is required"})
        }
        if(data.username!==username){
            return res.json({message:"Wrong credentials!"})
        }
        if(data.password!==password){
return res.json({message:"Wrong credentials!"})
        }
        res.json({message:"You are logged in! "})
    })
    app.listen(port,()=>console.log(`server is running on port ${port}`))