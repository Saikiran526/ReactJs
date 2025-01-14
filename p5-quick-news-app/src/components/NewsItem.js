import React from 'react'
import './NewsItem.css'

export default function NewsItem(props) {
    return (

        <div className="card" >
            <img src={props.urlToImg} className="card-img-top" alt="..." />
            <div className='text-part' >
                <h5 className="card-title">{props.title.slice(0,90)}...</h5>
                <p className="card-text">{props.description.slice(0,110)}...</p>
                <div className='btn'>
                <button className='btn-more'><a href={props.url} target='_blank' >More..</a></button>
                </div>
            </div>
        </div>
    )
}



