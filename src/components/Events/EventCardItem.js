import React from 'react';
import { Link } from 'react-router-dom';
import { travelData } from '../../travelData';
import './Events.css'

const EventCardItem = (props) => {
    const {id, name, img} = props.item;
    return (
        <Link to={`/register/${id}`} style={{textDecoration: 'none'}}>
            <div className={`singleCardItem card-${id}`} >
                <img src={img} alt=""/>
                <h3>{name}</h3>
            </div>
        </Link>
        
    );
};

export default EventCardItem;