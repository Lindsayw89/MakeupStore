import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Lipstick=()=> {
    const [lipstick, setLipstick]=useState()
    const nav=useNavigate()
    useEffect(()=>{
grablipstick()
    },[])
    const grablipstick=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setLipstick(response.data.slice(0,23))
          console.log(response.data)
        }
        catch(err){
          console.log(err +'lindsay error handling')
        }
          
          }

          if(lipstick){

          
  return (
    <div>
        <section className="lipstick">
          <div>  <img className="lipstickPic" src={lipstick[7].api_featured_image}/></div>
        
          <button className="lipstickTitle" onClick={()=>{nav('./lipstickdetails')}}> {lipstick[0].product_type} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Lipstick