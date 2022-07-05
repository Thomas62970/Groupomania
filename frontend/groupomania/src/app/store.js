import { configureStore } from "@reduxjs/toolkit";
import indexReducer from '../feature/indexSlice'

export default configureStore({
    reducer:{
        index: indexReducer,
    },
})