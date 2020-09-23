import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../images/logo2.png';
import firebase from 'firebase';


const NavBar = () => {
    const { userData } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userData;
    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/login')
    }

    const handleLoggedOut = () => {
        firebase.auth()
            .signOut()
            .then(() => {
                setLoggedInUser({})
                history.push('/lunch')
            })
            .catch(error => {

            });
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <div className="container">
                    <Navbar.Brand><Link to="/lunch"> <img height="40px" width="180px" src={logo} alt="" /></Link></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link to='/login'>
                            {
                                loggedInUser.name ? <button onClick={handleLoggedOut} className="btn mr-5 rounded-pill pl-4 pr-4" type="submit">log out</button>
                                    : <button onClick={handleProceedCheckout} className="btn pl-4 pr-4 mr-5 rounded-pill" type="submit">login</button>
                            }
                        </Link>
                        <Link to='/login'>
                            <button style={{ backgroundColor: '#f91944', color: 'white' }} className="btn pl-4 pr-4 rounded-pill">Sign up</button>
                        </Link>
                        <div style={{ backgroundColor: "#e5e5e5", lineHeight: '1.5' }} className="nav-link rounded-pill pl-4 pr-4 mr-3" >
                            <Link to="/lunch">
                                <img className="rounded-circle pr-2" width="35px" src={loggedInUser.photo} alt="" />
                                {loggedInUser.name}
                            </Link>
                        </div>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
};

export default NavBar;