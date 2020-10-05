import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const loginContext = createContext()

const LoginContextProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
    });
    return (
        <loginContext.Provider value={{loggedInUser, setLoggedInUser}}>
            {children}
        </loginContext.Provider>
    );
};

export default LoginContextProvider;