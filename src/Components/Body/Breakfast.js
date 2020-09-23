import React from 'react';
import { Link } from 'react-router-dom';
import breakFast from '../FakeData/breakFast';
import './Body.css';

const Breakfast = () => {

    return (
        <div className="d-flex justify-content-center align-items-center row mb-2">
            {
                breakFast.map(bf =>
                    <div key={Math.random()} className="col-md-3 text-center m-1 customize-body">
                        <Link className="link-style" to={"/foodDetail/" + bf.id} >
                            <img height="150px" src={bf.img} alt="" />
                            <p><strong>{bf.name}</strong></p>
                            <small className="text-muted">{bf.shortDescription}</small>
                            <h3>${bf.price}</h3>
                        </Link>
                    </div>
                )
            }
        </div >
    );
};

export default Breakfast;