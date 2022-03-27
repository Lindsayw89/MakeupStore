import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Eyeshadow=()=> {
    const [eyeshadow, setEyeshadow]=useState()

    useEffect(()=>{
grabEyeshadow()
    },[])
    const grabEyeshadow=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeshadow',
            headers: {
             
            }
          }
          const response=await axios(options)
          setEyeshadow(response.data.slice(0,23))
          console.log(response.data)
          
          }

          if(eyeshadow){

          
  return (
    <div>
        <section className="eyeshadow">
          <div>  <img className="eyeshadowPic" src={eyeshadow[20].api_featured_image}/></div>
          <div className="eyeshadowTitle"> {eyeshadow[0].product_type} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Eyeshadow