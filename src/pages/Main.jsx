import react, {useState,useEffect} from 'react'
import axios from 'axios'
import'../styles/styles.css'
import Blush from '../components/blush'
import Eyeshadow from '../components/eyeshadow'
import Foundation from '../components/foundation'
import Mascara from '../components/mascara'
import Nailpolish from '../components/nailpolish'
import Lipstick from '../components/lipstick'
import Bronzer from '../components/bronzer'
import Lipliner from '../components/lipliner'


const Main=()=>{
    const [makeup, setMakeup]=useState()

    useEffect(()=>{
        grabMakeup()
    },[])
    const grabMakeup=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner',
            headers: {
             
            }
          }
    
    const response=await axios(options)
    setMakeup(response.data.filter(m=>m.category!==null).slice(0,23))
    console.log(response.data)
    
    }
    const getPeople=async()=>{
        const options={
            method: 'get',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            url:'https://swapi.dev/api/people'
        }
        const response= await axios(options)
        console.log(response.data.results)
        for(const prop in response.data.results)
        console.log(prop)
    
       
    }
    getPeople()
    



if(makeup){
    return(
    <div >
     <header className="mainHeader">
<h1> Check out our amazing new blushes!</h1>
     </header>
     
            
            <section className='mainSection flexSection'>
                <Blush/>
                <Eyeshadow/>
                <Foundation/>
                <Mascara/>
                <Nailpolish/>
                <Lipstick/>
                <Bronzer/>
                <Lipliner/>

                
            </section>
            <section className='rewards'>
                Join our Rewards Program!
            </section>

    </div>
    )
}
else return(
    <div> <h4>Loading...</h4>
    </div>
)
}
export default Main