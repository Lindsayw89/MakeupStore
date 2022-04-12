 const fetch= require('node-fetch')

const googleDatabse =  [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
  ]
  
  
  const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
      return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches
  }
  
 // console.log(googleSearch('com', googleDatabse));
  
//  const getPeople=fetch=>{
//      return fetch("https://swapi.dev/api/people")
//      .then(res=> res.json()).then(data=>{
//          console.log(data)
//          return{
//          count: data.count,
//          results: data.results
//          }
//      })
//  }
 const getPeople=async(fetch)=>{
    const request= await fetch("https://swapi.dev/api/people")
    const data= await request.json()
        console.log(data)
        return{
        count: data.count,
        results: data.results
        }
}





  module.exports = googleSearch
