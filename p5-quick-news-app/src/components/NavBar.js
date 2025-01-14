import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import './NavBar.css'

export default function NavBar(props) {

  // const [category, setCategory] = useState('General');

  

  return (<div>
    <div className='Header ${myStyle}'>
      <div className='left'>
        <h1>Quick NEWS</h1>
      </div>
      <div className='right'>
        <div>
          <input type='search' placeholder='search...' className='search'></input>
          <FaSearch className='search-icon' />
        </div>
        <div >
          <button 
          className='theme-button' 
          style={{ color: 'white' }} >{props.darkMode ? <MdLightMode /> : <MdNightlight />} Mode</button>
        </div>
      </div>
      <div>
        
      </div>
    </div></div>
  )
}


// Navbar -CBA35C
// body-E1EACD
// card-F9F6E6
{/* <div className='header'>
  <div>left</div>
  <div>right</div>
</div> */}