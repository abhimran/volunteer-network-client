import React from 'react';
import './RegisteredEventDetails.css'

const RegisteredEventDetails = (props) => {
    const {eventInfo, shipment} = props.item;
    const handleDelete = (id) =>{
        fetch(`https://tranquil-brook-33868.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        }).then(res=>res.json())
        alert('Event Deleted SuccessFully')
    }
    return (
        <div className="registeredEventDetails">
            <div className="registeredEventDetails__img">
                <img src={eventInfo.img} alt=""/>
            </div>
            <div className="registeredEventDetails__info">
                <h3>{eventInfo.name}</h3>
                <h4>{shipment.date}</h4>
            </div>
            <div className="registeredEventDetails__btn">
                <button onClick={()=>handleDelete(props.item._id)}>Cancel</button>
            </div>
        </div>
    );
};

export default RegisteredEventDetails;