import {useDispatch} from "react-redux";
import {carActions} from "../../reduser";
import {carService} from "../../service";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async (id) => {
      await carService.delete(id)
        dispatch(carActions.changeTrigger())
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div>
                <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
                <button onClick={()=>deleteCar(id)}>delete</button>
            </div>
            <br/>
        </div>
    );
};

export {
    Car
}