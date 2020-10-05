import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddNewEvent from './components/AddNewEvent/AddNewEvent';
import Admin from './components/Admin/Admin';
import Events from './components/Events/Events';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisteredEvent from './components/RegisteredEvent/RegisteredEvent';
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
import LoginContextProvider from './contexts/LoginContext';

function App() {
  return (
    <LoginContextProvider>
       <Router>
         <Switch>
           <Route exact path="/">
              <Header></Header>
              <Events></Events>
           </Route>
           <PrivateRoute path="/register/:id">
             <VolunteerRegister></VolunteerRegister>
           </PrivateRoute>
           <Route path="/login">
             <Login></Login>
           </Route>
           <PrivateRoute path="/registeredEvent">
             <RegisteredEvent></RegisteredEvent>
           </PrivateRoute>
           <PrivateRoute path="/admin">
              <Admin></Admin>
           </PrivateRoute>
           <Route path="/addnewevent">
              <AddNewEvent></AddNewEvent>
           </Route>
           <Route path="*">
             <NoMatch></NoMatch>
           </Route>
         </Switch>
       </Router>
    </LoginContextProvider>
  );
}

export default App;
