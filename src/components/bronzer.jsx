import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Bronzer=()=> {
    const [bronzer, setBronzer]=useState()
    const nav=useNavigate()
    useEffect(()=>{
grabBronzer()
    },[])
    const grabBronzer=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setBronzer(response.data.slice(0,23))
          console.log(response.data)
          }
          catch(err){
            console.log(err +'lindsay error handling')
          }
          }

          if(bronzer){

          
  return (
    <div>
        <section className="bronzer">
          <div>  <img className="bronzerPic" src={bronzer[7].api_featured_image}/></div>
          <button className="bronzerTitle" onClick={()=>{nav('./bronzerdetails')}}> {bronzer[0].product_type} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Bronzer