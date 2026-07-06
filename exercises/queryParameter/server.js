/* Build an Express server with a single GET endpoint /convert.
Accept two query parameters:
amount (numeric)
currency (either "usd", "eur", or "gbp")
The server should convert the given amount to Rwandan Francs (RWF) using predefined conversion rates stored in a JavaScript object.
Respond with a JSON object showing the input and the converted value:
  {
    "input": { "amount": 10, "currency": "usd" },
    "convertedAmount": 13000,
    "unit": "RWF"
  }
Handle missing or invalid parameters with a 400 response and descriptive error.*/
import express from "express"
const app=express()
const port=8000
app.get("/convert",(req,res,next)=>{
    const {amount,currency}=req.query
    if(!(amount &&currency)){
       return  next (new Error("amount and currency are needed"))
    }
    if(!amount){
       return  next(new Error("amount is not defined"))
    }
    if(!currency){
     return next (new Error("currency is not defined "))
    }
    let convertedAmount=1
    if(currency==="usd"){
convertedAmount=Number(amount)*1000;
    }
    if(currency==="eur"){
convertedAmount=Number(amount)*700;

    }
    if(currency==="gbp"){
        convertedAmount=Number(amount)*500;
    }
    res.json({
        "input":{ amount:Number(amount),currency:currency},
        convertedAmount:convertedAmount,
        unit:"RWF"
    })

})
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"})
})
app.use((err,req,res,next)=>{
    res.status(400).json({message:err.message})
})
app.listen(port,()=>console.log(`server is running on port ${port}`))