import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

export const cartSlice = createSlice({
    name:'cartItem',
    initialState:initialState,
    reducers: {
        addToCart: (state,action) =>{
            console.log(action)
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer