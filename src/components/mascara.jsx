import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Mascara=()=> {
    const [mascara, setMascara]=useState()
    const nav=useNavigate()
    useEffect(()=>{
grabmascara()
    },[])
    const grabmascara=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setMascara(response.data.slice(0,23))
          console.log(response.data)
        }
        catch(err){
          console.log(err +'lindsay error handling')
        }
          
          }

          if(mascara){

          
  return (
    <div>
        <section className="mascara">
          <div>  <img className="mascaraPic" src={mascara[0].api_featured_image}/></div>
          
          <button className="mascaraTitle" onClick={()=>{nav('./mascaradetails')}}> {mascara[0].product_type} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Mascara