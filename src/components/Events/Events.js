import React, { useState } from 'react';
import { useEffect } from 'react';
import EventCardItem from './EventCardItem';
import './Events.css'

const Events = () => {
    const [event, setEvent] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-brook-33868.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setEvent(data))
    }, [])
    
    return (
        <div className="event">
            <div className="event__container">
                <div className="event__searchbox">
                    <h2>I grow by helping people in need.</h2>
                    <div className="searchbox__search">
                        <input type="text" placeholder="Search.."/>
                        <button>Search</button>
                    </div>
                </div>
                <div className="event__card">
                    {
                        event.map(item=> <EventCardItem key={item.id} item={item}></EventCardItem>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Events;