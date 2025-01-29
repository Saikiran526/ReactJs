import './Header.css'
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Header(props) {

  const myStyle=props.mode ?{
    backgroundColor: '#222831',
    color:'white'
  }:{
    backgroundColor:'#BCCCDC'
  };

  return (
    <div className='Header' style={myStyle}>
      <div className='left'>
        <h1>Text Utilities</h1>
        <Link to='/' style={{margin:'0px 20px',color:props.mode?'white':'black',textDecoration:'none'}}>Home</Link>
        <Link to='/about' style={{color:props.mode?'white':'black',textDecoration:'none'}}><p>About</p></Link>
          {/* <p style={{margin:'0px 20px'}}>Home</p>
          <p style={{margin:'0px 20px'}}>About</p> */}
      </div>
      <div className='right'>
        <div>
          <input type='search' placeholder='search...' className='search'></input>
          <FaSearch className='search-icon'/>
        </div>
        <div>
          <button className='theme-button' onClick={props.toggleTheme} style={{color:props.iColor}} >{props.mode?<MdLightMode  />:<MdNightlight/>} Mode</button>
        </div>
      </div>
    </div>
  )
}
