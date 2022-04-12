const fetch= require('node-fetch')



 const getPeople=async(fetch)=>{
    const request= await fetch("https://swapi.dev/api/people")
    const data= await request.json()
       // console.log(data)
        return{
        count: data.count,
        results: data.results
        }
}


module.exports = getPeople
