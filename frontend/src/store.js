import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "./Reducers/adminReducer";
import { bookingReducer } from "./Reducers/BookingReducer";
import { furnitureReducer } from "./Reducers/FurnitureReducer";
import { userReducer } from "./Reducers/UserReducer";

const store = configureStore({
    reducer:{
        user:userReducer,
        furnitures:furnitureReducer,
        booking:bookingReducer,
        admin:adminReducer
    }
});

export default store;