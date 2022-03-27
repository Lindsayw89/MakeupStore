import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Nailpolish=()=> {
    const [nailpolish, setNailpolish]=useState()

    useEffect(()=>{
grabnailpolish()
    },[])
    const grabnailpolish=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish',
            headers: {
             
            }
          }
          const response=await axios(options)
          setNailpolish(response.data.slice(0,23))
          console.log(response.data)
          
          }

          if(nailpolish){

          
  return (
    <div>
        <section className="nailpolish">
          <div>  <img className="nailpolishPic" src={nailpolish[0].api_featured_image}/></div>
          <div className="nailpolishTitle"> {nailpolish[0].product_type.replace("_", " ")} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Nailpolish