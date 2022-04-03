const fetch =require('node-fetch')

const getPeople=fetch=>{
    return fetch('https://swapi.co/api/people').then(res=>res.json())
    .then(data=>{
        return{
            count: data.count,
            results: data.results
        }
    })
}
console.log(getPeople())
