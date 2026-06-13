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
    let path="./views"
    switch(req.url){
        case "/":
            path+="/index.html"
            res.statusCode=200
            break;
            case "/about":
                 res.statusCode=200
                path+="/about.html"
                break;
                default:
                    path+="/404.html"
                     res.statusCode=404

    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})
server.listen(3000,"localhost",(req,res)=>{
 console.log("we are listen to port 3000")
})