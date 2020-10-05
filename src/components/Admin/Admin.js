import React, { useEffect } from 'react';
import logo from '../../images/logos/logo.png'
import adduser from '../../images/logos/adduser.png'
import plus from '../../images/logos/plus.png'
import './Admin.css'
import { useState } from 'react';
import AdminDetails from '../AdminDetails/AdminDetails';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        fetch('https://tranquil-brook-33868.herokuapp.com/alleventsforadmin')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])

    return (
        <div className="adminDashboard">
            <div className="adminDashboard__container">
                <div className="adminDashboard__header">
                    <Link to="/">
                    <img src={logo} alt=""/>
                    </Link>
                    <h3>Volunteer register list</h3>
                </div>
                <div className="adminDashboard__sidebar">
                    <div className="sidebar__menu">
                        <Link to="/admin" style={{textDecoration: 'none'}}>
                            <p><img src={adduser} alt=""/> Volunteer register list</p>
                        </Link>
                        <Link to="/addnewevent" style={{textDecoration: 'none'}}>
                            <p><img src={plus} alt=""/> Add event</p>
                        </Link>
                    </div>
                    <div className="sidebar__data">
                        <div className="data_table">
                            <p>Name</p>
                            <p>Email id</p>
                            <p>Registration Date</p>
                            <p>Volunteer List</p>
                            <p>Actions</p>
                        </div>

                        <div className="data_table-info">
                            {
                                userInfo.map(item=> <AdminDetails item={item} key={item._id}></AdminDetails>)
                            }
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default Admin;