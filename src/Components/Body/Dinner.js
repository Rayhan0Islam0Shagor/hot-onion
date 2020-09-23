import React from 'react';
import { Link } from 'react-router-dom';
import dinner from '../FakeData/dinner';
import './Body.css';

const Dinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center row">
            {
                dinner.map(dinner =>
                    <div key={Math.random()} className="col-md-3 text-center m-1 customize-body">
                        <Link className="link-style" to={"/foodDetail/" + dinner.id}>
                            <img height="150px" src={dinner.img} alt="" />
                            <p><strong>{dinner.name}</strong></p>
                            <small className="text-muted">{dinner.shortDescription}</small>
                            <h3>${dinner.price}</h3>
                        </Link>
                    </div>
                )
            }
        </div >
    );
};

export default Dinner;