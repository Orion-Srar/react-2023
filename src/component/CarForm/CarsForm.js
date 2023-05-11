import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {useEffect} from "react";

const CarsForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {reset, register, handleSubmit, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate])

    const saveCar = async (car) => {
        await dispatch(carActions.create({car}))
        reset();
    }

    const update = async (car) => {
        await dispatch(carActions.update({car,id: carForUpdate.id}))
        reset();

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : saveCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {
    CarsForm
}