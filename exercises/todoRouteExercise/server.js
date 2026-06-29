import http from "node:http"
const port=3000
 let tasks=[]
const server=http.createServer((req,res)=>{
   
    let body=""
    if(req.url==="/todo" && req.method==="POST"){
req.on("data",(chunk)=>{
    body+=chunk
})
req.on("end",()=>{
    tasks.push(JSON.parse(body))
   res.writeHead(200,{"content-type":"application/json"})
res.end(JSON.stringify({message:"task created successfully",task:JSON.parse(body)}))
})

    }
    if(req.url==="/todo" && req.method==="GET"){
         res.writeHead(200,{"content-type":"application/json"})
res.end(JSON.stringify({data:tasks}))
    }

  
    if(req.url.startsWith("/todo") && req.method==="GET"){
        // filtering using search parameters /query parameters
    const urlObj=new URL(req.url,"http://localhost:3000/")
    const status=urlObj.searchParams.get("status")
   


    if(status){
        const getTasksByStatus=tasks.filter((task)=>tasl.status===status )
        if(getTasksByStatus.length===0){
        res.writeHead(200,{"content-type":"application/json"})
      return   res.end(JSON.stringify({message:"there is no task of that status",task:getTasksByStatus}))
     }
       res.writeHead(200,{"content-type":"application/json"})
     res.end(JSON.stringify({tasks:getTasksByStatus}))
      
    }
     //filtering by id using router parameter /path parameters BY ID
    const urlArray=req.url.split("/")
     const id=Number(urlArray[urlArray.length-1])
     const getTaskById=tasks.filter((task)=>task.id===id)
     
     if(getTaskById.length===0){
        res.writeHead(200,{"content-type":"application/json"})
      return   res.end(JSON.stringify({message:"there is no task of that id",task:getTaskById}))
     }
       res.writeHead(200,{"content-type":"application/json"})
     res.end(JSON.stringify({tasks:getTaskById}))
      
    }   
})
 console.log(tasks)
server.listen(port,()=>{console.log(`server is running on port ${port}`)})