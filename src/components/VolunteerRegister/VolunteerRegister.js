import React, { useContext, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import './VolunteerRegister.css'
import logo from '../../images/logos/logo.png'
import { useForm } from "react-hook-form";
import { loginContext } from '../../contexts/LoginContext';
import { useHistory } from "react-router-dom";

const VolunteerRegister = () => {
  let history = useHistory();
  const [eventInfo, setEventInfo] = useState([]);
    const {id} = useParams();
  useEffect(() => {
    fetch('https://tranquil-brook-33868.herokuapp.com/events')
      .then(res => res.json())
      .then(data => {
        const eventData =data.find(item => item.id == id)
        setEventInfo(eventData)
      })
  }, [])

    const { register, handleSubmit, errors } = useForm();
    const {loggedInUser } = useContext(loginContext)
    const onSubmit = (data) => {
      const eventDetails = {...loggedInUser, eventInfo: eventInfo, shipment: data }

      fetch('https://tranquil-brook-33868.herokuapp.com/registerevents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventDetails)
      })
      .then(res=> res.json())
      .then(data=>{
        if(data){
          history.push('/registeredEvent')
        }
      })
    }
  
    return (
      <div className="volunteerRegister">
        <div className="volunteerRegister__header">
          <img src={logo} alt="" />
        </div>
        <div className="volunteerRegisterForm">
          <h3>Register as a Volunteer</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })}/>
            {errors.name && <span>Name is required</span>}

            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
            {errors.email && <span>Email is required</span>}

            <input type="date" name="date" placeholder="Date" ref={register({ required: true })} />
            {errors.date && <span>Date is required</span>}

            <input name="description" defaultValue={eventInfo.name} placeholder="Description" ref={register({ required: true })} />
            {errors.description && <span>Description is required</span>}

            <input name="organized" placeholder="Organized Books At the Library" ref={register({ required: true })} />
            {errors.organized && <span>Organized is required</span>}
            <input type="submit" className="formSubmit" />
          </form>
        </div>
      </div>
    );
};

export default VolunteerRegister;