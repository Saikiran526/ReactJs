import React from 'react'
import './MiniNavBar.css'

export default function MiniNavBar(props) {

    // const [selectedCategory,setSelectedCategory]=useState();    

    return (
        <div className={props.darkMode ? 'MonoNavvar-darkmode':'MiniNavbar'}>
            {/* <p>Categories :</p> */}
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('General') }}>General</button>
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('Business') }}>Business</button>
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('Science') }}>Science</button>
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('Sports') }}>Sports</button>
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('Technology') }}>Technology</button>
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('entertainment') }}>Entertainment</button>
            <button className={props.darkMode ? 'btn-category-darkMode' :'btn-category'} onClick={() => { props.onCategoryChange('Health') }}>Health</button>
        </div>
    )
}
