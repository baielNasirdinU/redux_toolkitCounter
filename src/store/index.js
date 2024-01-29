import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../sclies/count'

export default configureStore({
    reducer:countReducer
})