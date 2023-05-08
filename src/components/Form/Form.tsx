import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../interfaces";
import {carsService} from "../../services";
import {carValidator} from "../../validators";
import {IUseState} from "../../types/useState.type";


interface IProps {
    setShowCars: IUseState<boolean>;
    carForUpdate: ICar | null;
    setCarForUpdate: IUseState<ICar|null>;
}

const Form: FC<IProps> = ({setShowCars, carForUpdate,setCarForUpdate}) => {

    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            // setValue('brand', carForUpdate.brand, {shouldValidate: true})
            // setValue('price', carForUpdate.price, {shouldValidate: true})
            // setValue('year', carForUpdate.year, {shouldValidate: true})
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate])

    const save: SubmitHandler<ICar> = async (car) => {
        await carsService.create(car);
        setShowCars(prev => !prev);
        reset();
    }

    const update: SubmitHandler<ICar> = async (car: ICar) => {
        await carsService.updateById(carForUpdate!.id, car);
        setShowCars(prev => !prev);
        reset();
        setCarForUpdate(null);
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <p>{errors.brand && errors.brand.message}</p>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <p>{errors.price && errors.price.message}</p>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <p>{errors.year && errors.year.message}</p>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export default Form;