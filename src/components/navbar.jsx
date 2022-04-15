import React, {useState} from 'react'
import '../styles/styles.css'
import Navyou from './navyou'
const Navbar=()=> {
  const [menuOpen, setmenuOpen]=useState(false)




  return (
    <div> 
    <nav className="navbar">
      <div className="menuGrow"> 
    <Navyou/>
    </div>
   <div className="links"> 
    <a href ="/">Home </a>
    <a  href ="/findstore">Find a store </a>
    
    </div>
    </nav>

    </div>
  )
}

export default Navbar

//old hamflex bar

// <div className='hamflex'>
// {menuOpen? (<button className="hamburger is-active" onClick={()=>{setmenuOpen(!menuOpen)}}>
// <div className="bar"></div>
// </button>):(<button className="hamburger">
// <div className="bar"></div>
// </button>)}
// </div>