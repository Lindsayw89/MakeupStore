import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/details.css'

const MakeupDetails=()=> {
const [makeup, setMakeup]=useState()
useEffect(()=>{
    grabMakeup()
},[])

    const grabMakeup=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setMakeup(response.data.filter(f=>f.rating!==null))
          console.log(response.data.filter(f=>f.rating!==null).length)
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
        <section >
          <img src={mu.image_link} style={{height: '90px', width: '90px'}}/>
          <p>{mu.rating}</p>
          <div className="muColors"> 
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