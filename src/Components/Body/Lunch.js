import { Link } from 'react-router-dom';
import React from 'react';
import lunch from '../FakeData/lunch';
import './Body.css';

const Lunch = () => {
    return (
        <div className="d-flex justify-content-center align-items-center row">
            {
                lunch.map(lunch =>
                    <div key={Math.random()} className="col-md-3 text-center m-1 customize-body">
                        <Link className="link-style" to={"/foodDetail/" + lunch.id}>
                            <img height="150px" src={lunch.img} alt="" />
                            <p><strong>{lunch.name}</strong></p>
                            <small className="text-muted">{lunch.shortDescription}</small>
                            <h3>${lunch.price}</h3>
                        </Link>
                    </div>
                )
            }
        </div >
    );
};

export default Lunch;