import React from 'react';
import {carService} from "../../service";

const Car = ({car,setCarForUpdate,setAllCars}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
        await carService.deleteCarById(id);
        setAllCars(prev => !prev);
    }

    
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>update</button>
            <button onClick={()=> deleteCar(id)}>delete</button>
        </div>
    );
};

export default Car;