import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { loginContext } from '../../contexts/LoginContext';
import logo from '../../images/logos/logo.png'
import { handleSignOut } from '../Login/LoginManager';
import './Header.css'

const Header = () => {
    const {loggedInUser} = useContext(loginContext)
    const {setLoggedInUser} = useContext(loginContext)
     const signOut = () => {
         handleSignOut()
             .then(res => {
                 setLoggedInUser(res)
             })
     }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="header__menu">
                    <ul>
                        <li>Home</li>
                        <li>Donation</li>
                        <Link to="/registeredEvent">
                        <li>Events</li>
                        </Link>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="header__btn">
                       {
                            (loggedInUser.isSignin ? <button onClick={signOut} className="btn1">Logout {loggedInUser.name}</button>: <Link to="/login"><button onClick={signOut} className="btn1">Login </button></Link>)
                        }
                    <Link to="/admin">
                        <button className="btn2">Admin</button>
                    </Link>
                </div>
            </div>
          
        </div>
    );
};

export default Header;