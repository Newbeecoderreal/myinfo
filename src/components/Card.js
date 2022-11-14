import React from 'react'
import './styles/Card.css';

export default function Card(props){
        return (
        <div>     
            <div className='card'>
                <img src={props.item.imageUrl} className='card--image'/>
                <div className='card--two'>
                   <div className='card--location'>
                                  <h1>{props.item.location}</h1>
                                  <h5><a href={props.item.googleMapsUrl}>View on Google Maps</a></h5>
                    </div>
                    <h1 className='cardtwo--title'>{props.item.title}</h1>
                    <h3 className='cardtwo--date'>{props.item.startDate} - {props.item.endDate}</h3>
                    <p className='cardtwo--desc'>{props.item.description}</p>
                </div>
               
            </div>
            <hr className='hr'/>
        </div>
            

        )
}