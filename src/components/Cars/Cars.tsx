import React, {useEffect, useState} from 'react';

import {ICar} from "../../interfaces";
import {carsService} from "../../services";
import Car from "../Car/Car";
import Form from "../Form/Form";

const Cars = () => {

    const [cars, setCars] = useState<ICar[]>();
    const [showCars, setShowCars] = useState<boolean>(true)
    const [carForUpdate, setCarForUpdate] = useState<ICar|null>(null);



    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => setCars(value));
    },[showCars])

    return (
        <div>
            <Form setShowCars={setShowCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars?.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setShowCars={setShowCars}/>)}
        </div>
    );
};

export default Cars;