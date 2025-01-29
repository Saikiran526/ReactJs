import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import './NavBar.css'

export default function NavBar(props) {

  return (<div>
    <div className='Header'>
      <div className='left'>
        <h1>Quick NEWS</h1>
      </div>
      <div className='right'>
        <div>
          <input type='search' placeholder='search...' className='search' onChange={(event) => { props.onKeyWordEnter(event.target.value) }}></input>
          <FaSearch className='search-icon' />
        </div>
        <div>
          <select className='CountryNameSelection' onChange={(event) => props.onCountryChange(event.target.value)}>
            <option>--Select a Country--</option>
            <option value="ae">United Arab Emirates</option>
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="cu">Cuba</option>
            <option value="de">Germany</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="gb">United Kingdom</option>
            <option value="hk">Hong Kong</option>
            <option value="il">Israel</option>
            <option value="in">India</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="mx">Mexico</option>
            <option value="ru">Russia</option>
            <option value="sg">Singapore</option>
            <option value="th">Thailand</option>
            <option value="ua">Ukraine</option>
            <option value="us">United States</option>
          </select>
        </div>
        <div >
          <button
            onClick={()=>{props.onModeChange(!props.darkMode)}}
            className='theme-button'
            style={{ color: 'white' }} >{props.darkMode ? <MdLightMode /> : <MdNightlight />} Mode</button>
        </div>
      </div>
    </div>
  </div>
  )
}


// Navbar -CBA35C
// body-E1EACD
// card-F9F6E6
{/* <div className='header'>
  <div>left</div>
  <div>right</div>
</div> */}