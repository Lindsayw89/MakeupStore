import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SidebarData} from './sidebarData'
import '../styles/styles.css'
import {IconContext} from 'react-icons'
function Navyou() {
    const [sidebar, setSidebar]=useState(false)
const showSidebar=()=> setSidebar(!sidebar)

  return (
    <div>
      
            <div className="navbar">
        {/* <Link to="#" className="menu-bars"></Link> */}
        <FaIcons.FaBars onClick={showSidebar} className='menu-bars'/>  
        </div>
        <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <a href='#' className='menu-bars'> 
                <AiIcons.AiOutlineClose/> </a> 
                </li>
                {SidebarData.map((item,indx)=>{
                 return(
                    <li key={indx} className={item.cName}>
                         <a href={item.path}> {item.icon}
                              <span>{item.title}</span>
                         </a>
                    </li>
                    )
                })}
        </ul>
        </nav>
        </div>
  )
}

export default Navyou