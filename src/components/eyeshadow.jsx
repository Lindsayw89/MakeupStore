import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Eyeshadow=()=> {
    const [eyeshadow, setEyeshadow]=useState()
    const nav=useNavigate()
    useEffect(()=>{
grabEyeshadow()
    },[])
    const grabEyeshadow=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeshadow',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setEyeshadow(response.data.slice(0,23))
          console.log(response.data)
        }
          catch(err){
            console.log(err +'lindsay error handling')
          }
          
          }

          if(eyeshadow){

          
  return (
    <div>
        <section className="eyeshadow">
          <div>  <img className="eyeshadowPic" src={eyeshadow[20].api_featured_image}/></div>
         
          <button className="eyeshadowTitle" onClick={()=>{nav('./eyeshadowdetails')}}> {eyeshadow[0].product_type} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Eyeshadow