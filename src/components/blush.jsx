import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Blush=()=> {
    const [blush, setBlush]=useState()

    useEffect(()=>{
grabBlush()
    },[])
    const grabBlush=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush',
            headers: {
             
            }
          }
          const response=await axios(options)
          setBlush(response.data.slice(0,23))
          console.log(response.data)
          
          }

          if(blush){

          
  return (
    <div>
        <section className="blush">
          <div>  <img className="blushPic" src={blush[7].api_featured_image}/></div>
          <div className="blushTitle"> {blush[0].product_type} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Blush