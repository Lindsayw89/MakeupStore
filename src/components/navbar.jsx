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
    <a href ="./home">Home </a>
    <a  href ="./home">About </a>
    <a  href ="./home">Profile </a>
    </div>
    </nav>
    {menuOpen && <nav className="nav-page">
      <a href="#"> menu1</a>
      <a href="#"> menu2</a>
      <a href="#"> menu3</a>
    </nav>}
    </div>
  )
}

export default Navbar