import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import {useNavigate} from 'react-router-dom'

const Lipliner=()=> {
    const [lipliner, setLipliner]=useState()
    const nav=useNavigate()
    useEffect(()=>{
grablipliner()
    },[])
    const grablipliner=async()=>{
        var options = {
            method: 'GET',
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setLipliner(response.data.slice(0,23))
          console.log(response.data)
          
        }
        catch(err){
          console.log(err +'lindsay error handling')
        }
          }

          if(lipliner){

          
  return (
    <div>
        <section className="lipliner">
          <div>  <img className="liplinerPic" src={lipliner[0].api_featured_image}/></div>
          
          <button className="liplinerTitle" onClick={()=>{nav('./liplinerdetails')}}> {lipliner[0].product_type.replace("_", " ")} </button>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Lipliner