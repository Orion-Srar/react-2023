import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../../service";
import {carActions} from "../../reduser";
import {Car} from "../Car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setAll(value)))
    }, [dispatch, trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
}