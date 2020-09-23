import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import breakFast from '../FakeData/breakFast';
import lunch from '../FakeData/lunch';
import dinner from '../FakeData/dinner';

const FoodDetails = () => {
    const { id } = useParams();
    const allData = [...breakFast, ...lunch, ...dinner];
    const exactData = allData.find(item => item.id === Number(id));


    return (
        <div className="row mt-3">
            <div style={{ marginTop: "200px" }} className="col-md-6 p-5 align-items-center">
                <h2>{exactData.name}</h2>
                <p><small>{exactData.foodDetail}</small></p>

                <div className="d-flex ml-5">
                    <h2>${exactData.price}</h2>
                    <div style={{ width: "100px", marginLeft: "15px" }} className="d-flex">
                        <button style={{ backgroundColor: '#f91944', color: 'white' }} className="pl-2 pr-2 rounded">-</button>
                        <input style={{ width: "50px", textAlign: "center" }} type="text" value="1" />
                        <button style={{ backgroundColor: '#f91944', color: 'white' }} className="pl-2 pr-2 rounded">+</button>
                    </div>
                </div>
                <div>
                    <Link to={`/checkout/${id}`}>
                        <button
                            style={{
                                backgroundColor: '#f91944',
                                color: 'white',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                marginTop: "50px"
                            }}
                            className='btn rounded-pill'>
                            ADD CART
                        </button>
                    </Link>
                </div>
            </div >

            <div className="col-md-6 p-5">
                <img width="100%" src={exactData.img} alt="" />
            </div>
        </div >
    );
};

export default FoodDetails;