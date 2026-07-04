export const getDataByParams=(req,res)=>{
  const{field,term}=req.params
  const allowedFields = ['country', 'continent', 'industry']
  if(!allowedFields.includes(field)){
    res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })

}  const filteredData=startups.filter((elem)=>elem[field].toLowerCase()===term.toLowerCase())
  res.json(filteredData)

 }