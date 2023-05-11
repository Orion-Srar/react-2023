import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer, userReducer} from "./slice";

const rootReducer = combineReducers({
    users: userReducer,
    cars: carReducer
})


const setupStore = () =>  configureStore({
    reducer: rootReducer
});

export {
    setupStore
}