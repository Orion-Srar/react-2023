import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carService} from "../../service";
import {carValidator} from "../../validators/car.validator";


const Form = ({setAllCars, carForUpdate, setCarForUpdate}) => {

    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }

    }, [carForUpdate])

    async function submit(car) {
        await carService.createCar(car);
        setAllCars(prev => !prev);
        reset();
    }

    const update = async (car) => {
        await carService.updateCar(carForUpdate.id, car);
        setAllCars(prev => !prev);
        reset();
        setCarForUpdate(null);
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : submit)}>
            <input type={"text"} placeholder={'brand'} {...register('brand', )}/>
            <p>{errors.brand && errors.brand.message}</p>
            <input type={"text"} placeholder={'price'} {...register('price', )}/>
            <p>{errors.price && errors.price.message}</p>
            <input type={"text"} placeholder={'year'} {...register('year', )}/>
            <p>{errors.year && errors.year.message}</p>

            <div>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
            </div>
        </form>
    );
};

export default Form;