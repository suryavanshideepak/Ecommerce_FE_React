import { createSlice } from "@reduxjs/toolkit";
import {data} from '../utility/demoData'

const initialState = {
    cart:data,
    selectedCart:[]
}

export const cartSlice = createSlice({
    name:'cartItem',
    initialState:initialState,
    reducers: {
        addToCart: (state,action) =>{
            const itemToPush = state.cart.find((item,index) => item.id === action.payload)
            state.selectedCart.push(itemToPush)
        },
        removeCartItem: (state, action) => {
            state.selectedCart = state.selectedCart.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addToCart, removeCartItem} = cartSlice.actions
export default cartSlice.reducer