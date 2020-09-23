import React from 'react';
import { useParams } from 'react-router-dom';
import breakfast from '../FakeData/breakFast'
import lunch from '../FakeData/lunch'
import dinner from '../FakeData/dinner'

const CheckOut = () => {
    const { id } = useParams();
    const everyData = [...breakfast, ...lunch, ...dinner];
    const selectedFood = everyData.find(food => food.id === Number(id));


    return (
        <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6 text-center">
                <img width="80px" className="img-fluid" src={selectedFood.img} alt="" />
                <h4>{selectedFood.name}</h4>
                <p>${selectedFood.price}</p>
            </div>
        </div>
    );
};

export default CheckOut;