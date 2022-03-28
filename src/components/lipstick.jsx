import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Lipstick=()=> {
    const [lipstick, setLipstick]=useState()

    useEffect(()=>{
grablipstick()
    },[])
    const grablipstick=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick',
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
          <div className="lipstickTitle"> {lipstick[2].product_type} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Lipstick