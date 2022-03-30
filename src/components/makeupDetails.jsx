import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/details.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const MakeupDetails=({makeupType})=> {
const [makeup, setMakeup]=useState()
useEffect(()=>{
    grabMakeup()
},[])

    const grabMakeup=async()=>{
        var options = {
            method: 'GET',
            url: `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${makeupType}`,
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setMakeup(response.data.filter(f=>f.rating!==null))
          console.log(response.data.filter(f=>f.rating!==null))
          }
          catch(err){
            console.log(err +'lindsay error handling')
          }
        
          
          }

if(makeup){
  return (
    <div className='detailsFlex'>
{makeup.map(mu=>{
    return(
        <section key={mu.id} >
          <img src={mu.image_link} style={{height: '90px', width: '90px'}}/>
   {mu.rating}
   <br></br>
{console.log(Array.apply(1,{length:mu.rating}))}
{Array.apply(1,{length:mu.rating}).map(rate=>
    <FaStar/>)}
    {mu.rating!==Math.floor(mu.rating) && <FaStarHalfAlt/>}
    {Array.apply(1,{length:5-mu.rating}).map(rate=>
    <FaRegStar className="fa"/>)}

          <p className="productName">{mu.name}</p>
          <p className="price">${mu.price}</p>
          <div className="muColors"> 
          <br></br>
          {mu.product_colors.map(pc=>
         
            <div style={{backgroundColor:`${pc.hex_value}`, height: '11px', width: '11px', margin: '3px', borderRadius: '50%' }}></div>
           
            )}
    </div>

              
        
         
        </section>
    )
})}

    </div>
  )}
  else{ return(
      <h4>Loading...</h4>
  )}
}

export default MakeupDetails