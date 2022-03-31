import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Nailpolish=()=> {
    const [nailpolish, setNailpolish]=useState()
    const nav=useNavigate()
    useEffect(()=>{
grabnailpolish()
    },[])
    const grabnailpolish=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setNailpolish(response.data.slice(0,23))
          console.log(response.data)
        }
        catch(err){
          console.log(err +'lindsay error handling')
        }
          }

          if(nailpolish){

          
  return (
    <div>
        <section className="nailpolish">
          <div>  <img className="nailpolishPic" src={nailpolish[0].api_featured_image}/></div>
         
          <button className="nailpolishTitle" onClick={()=>{nav('./nailpolishdetails')}}> {nailpolish[0].product_type.replace("_", " ")} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Nailpolish