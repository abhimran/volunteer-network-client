import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import adduser from '../../images/logos/adduser.png'
import plus from '../../images/logos/plus.png'
import '../Admin/Admin.css'
import { useForm } from 'react-hook-form';

const AddNewEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        fetch('https://tranquil-brook-33868.herokuapp.com/Addevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert('Event Created SuccessFully')
    }
    return (
        <div className="adminDashboard">
            <div className="adminDashboard__container">
                <div className="adminDashboard__header">
                    <Link to="/">
                    <img src={logo} alt=""/>
                    </Link>
                    <h3>Add Event</h3>
                </div>
                <div className="adminDashboard__sidebar">
                    <div className="sidebar__menu">
                        <Link to="/admin" style={{textDecoration: 'none'}}>
                            <p><img src={adduser} alt=""/> Volunteer register list</p>
                        </Link>
                        <Link to="/addevent" style={{textDecoration: 'none'}}>
                            <p><img src={plus} alt=""/> Add event</p>
                        </Link>
                    </div>
                    <div className="sidebar__newEvent">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" placeholder="Name" ref={register({ required: true })}/>
                            {errors.name && <span>Name is required</span>}


                            <input type="date" name="date" placeholder="Date" ref={register({ required: true })} />
                            {errors.date && <span>Date is required</span>}

                            {/* <input type="submit" className="formSubmit" /> */}
                        </form>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default AddNewEvent;