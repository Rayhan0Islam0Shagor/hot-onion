import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';


const Body = () => {
    return (
        <div className="customize-div d-flex justify-content-center mb-5">
            <Link className="pl-3 link-style" to="/breakfast">breakfast</Link>
            <Link className="pl-3 link-style" to="/lunch">Lunch</Link>
            <Link className="pl-3 link-style" to="/dinner">Dinner</Link>
        </div>
    );
};

export default Body;