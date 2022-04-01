import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'


const ProductDetails=()=> {
    const [product, setProduct]=useState()
    const nav=useNavigate()
    const {id, type}=useParams()
useEffect(()=>{
    grabMakeup()
},[])
    const grabMakeup=async()=>{
        var options = {
            method: 'GET',
            url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`,
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setProduct(response.data.filter(m=>m.id===id))
          console.log(response.data.filter(m=>m.id===id))
          console.log(id)
          }
          catch(err){
            console.log(err +'lindsay error handling')
          }
        
          
    }
if(product){
  return (
    <div>
        
             <section >
                 test
             <h4>{product[0].brand  && product[0].brand}</h4> 
              <h6>{product[0].name}</h6> 
             <img src={product[0].image_link}/> *
             </section>
 
    </div>
  )
}
else return(
    <div>
...Loading
    </div>
)
}

export default ProductDetails