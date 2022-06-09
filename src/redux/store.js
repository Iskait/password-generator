import { configureStore } from '@reduxjs/toolkit';
import copyReducer from './slices/copySlice';
import generateReducer from './slices/generateSlice';
export const store = configureStore({
    reducer: {
        copy: copyReducer,
        generate: generateReducer,
    }
})

