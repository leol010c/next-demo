import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from './productTypes'; // Importieren des Product-Typs

interface ShoppingCartState {
    items: Product[];
}

const initialState: ShoppingCartState = {
    items: [],
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        // andere Reducer und Aktionen
    },
});

export const { addItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

export const selectItems = (state: RootState) => state.shoppingCart.items;
