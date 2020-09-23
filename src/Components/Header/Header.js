import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="banner">
            <div className="banner2">
                <div style={{ display: 'inline-block', overflow: 'hidden' }} className="input-content m-auto">
                    <h1>Best Food Waiting For Your Belly</h1>
                    <input className='input-field form-control mt-4 rounded-pill' type="text" />
                    <button style={{ display: "inline-block !important", backgroundColor: '#f91944', color: 'white', paddingLeft: '15px', paddingRight: '15px' }} className='btn rounded-pill'>search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;