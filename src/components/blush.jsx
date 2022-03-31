import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Blush=()=> {
    const [blush, setBlush]=useState()
const nav=useNavigate()
    useEffect(()=>{
grabBlush()
    },[])
    const grabBlush=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setBlush(response.data.slice(0,23))
          console.log(response.data)
          }
          catch(err){
            console.log(err +'lindsay error handling')
          }
        
          
          }

          if(blush){

          
  return (
    <div>
        <section className="blush">
          <div>  <img className="blushPic" src={blush[7].api_featured_image}/></div>
          <button className="blushTitle" onClick={()=>{nav('./blushdetails')}}> {blush[0].product_type} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Blush