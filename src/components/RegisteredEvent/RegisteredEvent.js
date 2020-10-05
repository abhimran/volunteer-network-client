import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/logo.png'
import RegisteredEventDetails from '../RegisteredEventDetails/RegisteredEventDetails';
import './RegisteredEvent.css'
import '../Header/Header.css'
import { loginContext } from '../../contexts/LoginContext';
import { Link } from 'react-router-dom';
import { handleSignOut } from '../Login/LoginManager';

const RegisteredEvent = () => {
    
    const [resEvent, setResEvent] = useState([]);
    const {loggedInUser} = useContext(loginContext)
    const {setLoggedInUser} = useContext(loginContext)
     const signOut = () => {
         handleSignOut()
             .then(res => {
                 setLoggedInUser(res)
             })
     }
    useEffect(() => {
        fetch('https://tranquil-brook-33868.herokuapp.com/allregisterEvents?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setResEvent(data))
    }, [])


    return (
       <div className="registeredEvent">
            <div className="registeredEvent__container">
                <div className="header__container">
                    <Link to='/' style={{textDecoration:'none'}}>
                        <div className="header__logo">
                            <img src={logo} alt=""/>
                        </div>
                    </Link>
                    
                    <div className="header__menu">
                        <ul>
                            <li>Home</li>
                            <li>Donation</li>
                            <li>Events</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="header__btn">
                        {
                            (loggedInUser.isSignin ? <button onClick={signOut} className="btn2">Logout {loggedInUser.name}</button>: '')
                        }
                        
                    </div>
                </div>

                <div className="registeredEvent__card">
                    {
                        resEvent.map(item=> <RegisteredEventDetails key={item._id} item={item}></RegisteredEventDetails>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default RegisteredEvent;