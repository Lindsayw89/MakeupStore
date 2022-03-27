import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Lipliner=()=> {
    const [lipliner, setLipliner]=useState()

    useEffect(()=>{
grablipliner()
    },[])
    const grablipliner=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner',
            headers: {
             
            }
          }
          const response=await axios(options)
          setLipliner(response.data.slice(0,23))
          console.log(response.data)
          
          }

          if(lipliner){

          
  return (
    <div>
        <section className="lipliner">
          <div>  <img className="liplinerPic" src={lipliner[0].api_featured_image}/></div>
          <div className="liplinerTitle"> {lipliner[0].product_type.replace("_", " ")} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Lipliner