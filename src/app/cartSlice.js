import { createSlice } from "@reduxjs/toolkit";
import { data } from "../utility/demoData";

const initialState = {
    cart:[],
    selectedCart:[]
}

export const cartSlice = createSlice({
    name:'cartItem',
    initialState:initialState,
    reducers: {
        getAllProducts: (state,action) => {
          state.cart = data
        },
        addToCart: (state,action) =>{
            const itemToPush = state.cart.find((item,index) => item.id === action.payload)
            state.selectedCart.push(itemToPush)
        },
        removeCartItem: (state, action) => {
            state.selectedCart = state.selectedCart.filter((item) => item.id !== action.payload)
        },
        filterProducts: (state, action) => {
            state.cart = data
            if(action.payload.filterType === 'productType'){
                state.cart = state.cart.filter((item) => item.productType === action.payload.productType);
            }
        },
        clearFilter: (state, action) => {
            state.cart = data
        }
        
        
    }
})

export const { 
    addToCart,
    removeCartItem, 
    filterProducts, 
    getAllProducts,
    clearFilter
    } = cartSlice.actions
export default cartSlice.reducer