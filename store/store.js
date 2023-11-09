import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from './authSlice';

const makeStore = () => {
   configureStore({
     reducer: {
       auth : authReducer,
     },
     devTools: true,
   });
}

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});