import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import themeReducer from './themeSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer,
    },
});

export default store;