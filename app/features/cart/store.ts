import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCartSlice';

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        // andere Reducer...
    },
});

export type RootState = ReturnType<typeof store.getState>; // Exportieren von RootState

export type AppDispatch = typeof store.dispatch;
