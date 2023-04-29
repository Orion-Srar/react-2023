import {useReducer} from "react";

import Cats from "./components/cats/Cats";
import Dogs from "./components/dogs/Dogs";

const initialState = {cats: [], dogs: []};

function reducer(state, action) {
    switch (action.type) {
        case 'SAVE_CAT':
            const cat = action.payload;
            return {...state, cats:[...state.cats, cat]};
        case 'SAVE_DOG':
            const dog = action.payload;
            return {...state, dogs: [...state.dogs, dog]};
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <Cats dispatch={dispatch()}/>
            <Dogs/>
            <button onClick={dispatch}></button>
            {/*{*/}
            {/*    state.dogs.map((value, index) => <div key={index}>{value}</div>)*/}
            {/*}*/}
        </div>
    );
};

export default App;