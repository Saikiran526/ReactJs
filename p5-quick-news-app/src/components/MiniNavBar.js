import React from 'react'
import { useState } from 'react'
import './MiniNavBar.css'

export default function MiniNavBar(props) {

    // const [selectedCategory,setSelectedCategory]=useState();    

    return (
        <div className='MiniNavbar'>
            {/* <p>Categories :</p> */}
            <button className='btn-category' onClick={() => { props.onCategoryChange('General') }}>General</button>
            <button className='btn-category' onClick={() => { props.onCategoryChange('Business') }}>Business</button>
            <button className='btn-category' onClick={() => { props.onCategoryChange('Science') }}>science</button>
            <button className='btn-category' onClick={() => { props.onCategoryChange('Sports') }}>sports</button>
            <button className='btn-category' onClick={() => { props.onCategoryChange('Technology') }}>technology</button>
            <button className='btn-category' onClick={() => { props.onCategoryChange('entertainment') }}>entertainment</button>
            <button className='btn-category' onClick={() => { props.onCategoryChange('Health') }}>Health</button>
            
        </div>
    )
}
