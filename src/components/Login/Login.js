import React from 'react';
import { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { loginContext } from '../../contexts/LoginContext';
import logo from '../../images/logos/logo.png'
import './Login.css'
import {
    handleGoogleSignIn,
    initilizeLoginFramework
} from './LoginManager';

initilizeLoginFramework();


const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const {setLoggedInUser} = useContext(loginContext);
      const googleSignIn = () => {
          handleGoogleSignIn()
              .then(res => {
                  setLoggedInUser(res);
                  history.replace(from);
              })
      }
    return (
        <div className="login">
            <Link to="/">
                <div className="login_header">
                    <img src={logo} alt=""/>
                </div>
            </Link>
            <div className="login__main">
                 <h3>Login With</h3>
                <button onClick={googleSignIn}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;