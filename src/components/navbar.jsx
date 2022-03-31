import React, {useState} from 'react'
import '../styles/styles.css'

const Navbar=()=> {
  const [menuOpen, setmenuOpen]=useState(false)
  return (
    <div> 
    <nav className="navbar">
    <div className='hamflex'>
      {menuOpen? (<button className="hamburger is-active" onClick={()=>{setmenuOpen(!menuOpen)}}>
    <div className="bar"></div>
      </button>):(<button className="hamburger" onClick={()=>{setmenuOpen(!menuOpen)}}>
    <div className="bar"></div>
      </button>)}
      </div>
   <div className="links"> 
    <a href ="./">Home </a>
    <a  href ="./home">Find a store </a>
    
    </div>
    </nav>
    {menuOpen && <nav className="nav-page">
      <a href="#"> Top Rated</a>
      <a href="#"> Specials</a>
     
    </nav>}
    </div>
  )
}

export default Navbar