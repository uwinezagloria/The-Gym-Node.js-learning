 export const getAllData=(req,res)=>{
   // query parameter
  const {industry, country, continent, is_seeking_funding, has_mvp}=req.query
  let filterData=startups
  if(industry){
filterData=filterData.filter((elem)=>elem.industry.toLowerCase()===industry.toLowerCase())
  }
  if(country){
   filterData=filterData.filter((elem)=> elem.country.toLowerCase()===country.toLowerCase())
  }
  if(continent){
     filterData=filterData.filter((elem)=> elem.continent.toLowerCase()===continent.toLowerCase())
  }
  if(is_seeking_funding){
      filterData=filterData.filter((elem)=> elem.is_seeking_funding===JSON.parse(is_seeking_funding))
  }
  if(has_mvp){
 
    filterData=filterData.filter((elem)=>elem.has_mvp===JSON.parse(has_mvp))
  }
    res.json(filterData)
    }
