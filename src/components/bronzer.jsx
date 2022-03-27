import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Bronzer=()=> {
    const [bronzer, setBronzer]=useState()

    useEffect(()=>{
grabBronzer()
    },[])
    const grabBronzer=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer',
            headers: {
             
            }
          }
          const response=await axios(options)
          setBronzer(response.data.slice(0,23))
          console.log(response.data)
          
          }

          if(bronzer){

          
  return (
    <div>
        <section className="bronzer">
          <div>  <img className="bronzerPic" src={bronzer[7].api_featured_image}/></div>
          <div className="bronzerTitle"> {bronzer[0].product_type} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Bronzer