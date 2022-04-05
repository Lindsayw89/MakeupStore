import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/details.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'



const TopRated=({makeupType})=> {
const [makeup, setMakeup]=useState()
const [showSearch, setShowSearch]=useState(false)
const [searchvalue, setSearchValue]=useState('')
const nav=useNavigate()
useEffect(()=>{
    grabMakeup()
},[])
 
    const grabMakeup=async()=>{
        var options = {
            method: 'GET',
            url: `https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.5`,
            headers: {
             
            }
          }
          try{
          const response=await axios(options)
          setMakeup(response.data)
          console.log(response.data)
          }
          catch(err){
            console.log(err +'lindsay error handling')
          }
        
          
    }

const getFilteredItems=(search, makeup)=>{
    if(!search){
        return makeup
    }
    return makeup.filter( m=> m.name.toLowerCase().includes(searchvalue.toLowerCase()) || (typeof(m.brand )==='string' && m.brand.toLowerCase().includes(searchvalue.toLowerCase() )) )
}
const filteredMakeup=getFilteredItems(searchvalue, makeup)

console.log(searchvalue)
console.log(makeupType)
console.log(searchvalue)

if(makeup  ){
  return (
  <div>
  <form className="flexForm"> 
  <input onChange={e=>setSearchValue(e.target.value)} value={searchvalue} type="text" placeholder='search..'/>
  <button className="searchBtn"type='submit' onClick={()=>{setShowSearch(true)}}><BsSearch/></button>
  </form>
  
    <div className='detailsFlex'>


{filteredMakeup.map(mu=>
     <section key={mu.id} >
             <a href={mu.product_link} target="blank"> 
          <img  src={mu.image_link} style={{height: '90px', width: '90px'}}/>
          </a> 
   {mu.rating}
   <br></br>
{console.log(typeof(mu.name +'name'), typeof(mu.brand+ 'brand'), typeof(mu.category), mu.id)}
{Array.apply(1,{length:mu.rating}).map((rate,indx)=>
    <FaStar key={indx}/>)}
    {mu.rating && (mu.rating!==Math.floor(mu.rating) && <FaStarHalfAlt/>)}
    {mu.rating && (Array.apply(1,{length:5-mu.rating}).map((rate,indx)=>
    <FaRegStar className="fa" key={indx}/>))}
        <p className="productName">{mu.brand}</p>
          <p className="productName">{mu.name}</p>
          <p className="price">${parseInt(mu.price)<1 ? (`${parseInt(mu.price)+9.99}`) : 
          (`${mu.price}`)} </p>
          <div className="muColors"> 
          <br></br>
          {mu.product_colors.map(pc=>
         
            <div key={pc.id} style={{backgroundColor:`${pc.hex_value}`, height: '11px', width: '11px', margin: '3px', borderRadius: '50%' }}></div>
           
            )}
    </div>
        </section>


    )
}
</div>
    </div>
  )}
  else{ return(
      <h4>Loading...</h4>
  )}
}

export default TopRated