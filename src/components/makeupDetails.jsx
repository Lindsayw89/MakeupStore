import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/details.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'

const MakeupDetails=({makeupType})=> {
const [makeup, setMakeup]=useState()
const [searchMakeup, setSearchMakeup]=useState()
const [searchvalue, setSearchValue]=useState('')
const nav=useNavigate()
useEffect(()=>{
    grabMakeup()
},[])
 //setSearchMakeup(makeup.filter(mu=>mu.name.toLowerCase().includes(searchvalue)))
    const grabMakeup=async()=>{
        var options = {
            method: 'GET',
            url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${makeupType}`,
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setMakeup(response.data.filter(mu=>mu.name.toLowerCase().includes(searchvalue)))
          console.log(response.data)
          }
          catch(err){
            console.log(err +'lindsay error handling')
          }
        
          
    }
   const search=(q)=>{
       console.log(q)
      setMakeup(makeup.filter(mu=>mu.name.toLowerCase().includes(q)))
   } 

if(makeup  ){
  return (
  <div>
  <form className="flexForm"> 
  <input onChange={(e)=>{setSearchValue(e.target.value)}} value={searchvalue} type="text" placeholder='search..'/>
  <button className="searchBtn" type='submit'><BsSearch/></button>
  </form>
  
    <div className='detailsFlex'>
     
 

{makeup.filter(m=>m.name.toLowerCase().includes(searchvalue.toLowerCase()) ||m.brand.toLowerCase().includes(searchvalue.toLowerCase())   ).map(mu=>{
    return(
        <section key={mu.id} >
         {/* onClick={()=>{nav(`/productdetails/${mu.product_type}/${mu.id}`)}}  */}
             <a href={mu.product_link} target="blank"> 
          <img  src={mu.image_link} style={{height: '90px', width: '90px'}}/>
          </a> 
   {mu.rating}
   <br></br>
{console.log(Array.apply(1,{length:mu.rating}))}
{Array.apply(1,{length:mu.rating}).map(rate=>
    <FaStar/>)}
    {mu.rating && (mu.rating!==Math.floor(mu.rating) && <FaStarHalfAlt/>)}
    {mu.rating && (Array.apply(1,{length:5-mu.rating}).map(rate=>
    <FaRegStar className="fa"/>))}
        <p className="productName">{mu.brand}</p>
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
    </div>
  )}
  else{ return(
      <h4>Loading...</h4>
  )}
}

export default MakeupDetails