 const fetch =require('node-fetch')
 const googleSearch = require('./google')
 const swapi= require('./starwars')




const dbMock=[
    'dog.com',
    'disney.com',
    'dogpictures.com'
]


describe('google tests',()=>{



it('is a google test',()=>{
    expect('hello').toBe('hello')
    googleSearch('test', dbMock)
    })

    it('issearching google',()=>{
        expect(googleSearch('test', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
    })
    it('work with undefined and null input',()=>{
        expect(googleSearch(undefined, dbMock)).toEqual([])
    })
    it('work with undefined and null input',()=>{
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    
    it('does not return more than 3 matches',()=>{
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})

it('calls swapi to get people',()=>{
    expect.assertions(2)
    return swapi(fetch).then(data=>{
        console.log(data.results)
        expect(data.count).toEqual(82)
    expect(data.results.length).toBeGreaterThan(5)
    })
})






it('get people returns count and results',()=>{
   const mockFetch=jest.fn()
   .mockReturnValue(Promise.resolve({
       json: ()=>Promise.resolve({
           count:82,
           results: [0,1,2,3,4,5]
       })
   }))
   expect.assertions(4)
   return swapi(mockFetch).then(data=>{
       expect(mockFetch.mock.calls.length).toBe(1)
       expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
       expect(data.count).toEqual(82)
       expect(data.results.length).toBeGreaterThan(5)
   })
})
