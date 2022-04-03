const fetch =require('node-fetch')


const getPeople=fetch=>{
    return fetch('https://swapi.co/api/people/').then(res=>res.json())
    .then(data=>{
        return{
            count: data.count,
            results: data.results
        }
    })
}



describe('silly tests',()=>{


it('is a silly test',()=>{
expect('hello').toBe('hello')
})
})