import React from 'react';
import './AdminDetails.css'
import trash from '../../images/logos/trash.png'

const AdminDetails = (props) => {
    const {shipment} = props.item;
     const handleDelete = (id) => {
         fetch(`https://tranquil-brook-33868.herokuapp.com/delete/${id}`, {
             method: 'DELETE'
         }).then(res => res.json())
         alert('User Deleted SuccessFully')
     }
    return (
        <div className="adminDetail">
            <p>{shipment.name}</p>
            <p>{shipment.email}</p>
            <p>{shipment.date}</p>
            <p>{shipment.organized}</p>
            <img onClick={()=>handleDelete(props.item._id)} src={trash} alt=""/>
        </div>
    );
};

export default AdminDetails;