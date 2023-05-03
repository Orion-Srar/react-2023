import React, {useEffect, useState} from 'react';

import {carService} from "../../service";
import Car from "../Car/Car";
import Form from "../Form/Form";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    }, [allCars])

    return (
        <div>
            <Form setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {
                cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setAllCars={setAllCars}/>)
            }
        </div>
    );
};

export default Cars;