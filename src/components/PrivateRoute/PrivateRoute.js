import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginContext } from '../../contexts/LoginContext';

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedInUser} = useContext(loginContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.isSignin ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
    />
    );
};

export default PrivateRoute;