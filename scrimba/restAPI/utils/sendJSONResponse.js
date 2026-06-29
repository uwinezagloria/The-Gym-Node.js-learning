

export const sendJSONResponse=(res,statusCode,payload)=>{
    res.statusCode=statusCode
    res.setHeader("Content-Type","application/json")
    res.setHeader("Access-Control-Allow-Origin",'*')
    res.setHeader("Acces-Control-Allow-Method","GET")
    res.end(JSON.stringify(payload))
}