import React, {Dispatch, FC, SetStateAction} from 'react';

import {ICar} from "../../interfaces";
import {carsService} from "../../services";

interface IProps {
    car: ICar,
    setCarForUpdate: Dispatch<SetStateAction<any>>,
    setShowCars: Dispatch<SetStateAction<boolean>>
}

const Car: FC<IProps> = ({car, setCarForUpdate, setShowCars}) => {
    const {id, year, price, brand} = car;

    const deleteCar = async (id: number) => {
        await carsService.deleteById(id);
        setShowCars(prevState => !prevState)
    }


    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={()=> deleteCar(id)}>delete</button>
        </div>
    );
};

export default Car;