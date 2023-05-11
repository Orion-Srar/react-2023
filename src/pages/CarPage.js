import {Cars, CarsForm} from "../component";
import {useSelector} from "react-redux";

const CarPage = () => {
    const {error, loading} = useSelector(state => state.cars);

    return (
        <div>
            <CarsForm/>
            {error &&<h3>{JSON.stringify(error)}</h3>}
            {loading &&<h3>Loading...</h3>}
            <hr/>
            <Cars/>
        </div>
    );
};

export {
    CarPage
}