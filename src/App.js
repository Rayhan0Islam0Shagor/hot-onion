import React, { createContext, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Body from './Components/Body/Body';
import Breakfast from './Components/Body/Breakfast';
import Lunch from './Components/Body/Lunch';
import Dinner from './Components/Body/Dinner';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import CheckOut from './Components/CheckOut/CheckOut';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';
import NoMatch from './Components/NavBar/NoMatch/NoMatch';


export const UserContext = createContext();


function App() {
  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    message: '',
    password: '',
    error: ''
  });
  return (
    <div>
      <UserContext.Provider value={{ userData: [loggedInUser, setLoggedInUser], newUserData: [newUser, setNewUser] }} >
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Header />
              <Body />
              <Lunch />
            </Route>
            <Route path='/breakfast' >
              <Header />
              <Body />
              <Breakfast />
            </Route>
            <Route path='/lunch' >
              <Header />
              <Body />
              <Lunch />
            </Route>
            <Route path='/dinner' >
              <Header />
              <Body />
              <Dinner />
            </Route>
            <Route path='/foodDetail/:id'>
              <Body />
              <FoodDetails />
            </Route>
            <PrivateRoute path='/checkout/:id'>
              <CheckOut />
            </PrivateRoute>
            <Route path='/login' >
              <Login />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
