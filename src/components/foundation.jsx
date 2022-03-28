import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'


const Foundation=()=> {
    const [foundation, setFoundation]=useState()

    useEffect(()=>{
grabfoundation()
    },[])
    const grabfoundation=async()=>{
        var options = {
            method: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation',
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setFoundation(response.data.slice(0,23))
          console.log(response.data)
          
        }
        catch(err){
          console.log(err +'lindsay error handling')
        }

          }

          if(foundation){

          
  return (
    <div>
        <section className="foundation">
          <div>  <img className="foundationPic" src={foundation[7].api_featured_image}/></div>
          <div className="foundationTitle"> {foundation[0].product_type} </div>
        </section>
        
    </div>

  )
          }else return(
              <h6>Loading..</h6>
          )
}

export default Foundation