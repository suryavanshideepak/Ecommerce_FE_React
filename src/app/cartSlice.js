import { createSlice } from "@reduxjs/toolkit";
import { data } from "../utility/demoData";

const initialState = {
    cart:data,
    selectedCart:[]
}

export const cartSlice = createSlice({
    name:'cartItem',
    initialState:initialState,
    reducers: {
        getAllProducts: (state,action) => {
          state.cart = data
          console.log(state.cart)
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
            if(action.payload.filterType === 'productBrand'){
                const selectedFilter = Object.keys(action.payload.productBrand).filter((brand) => action.payload.productBrand[brand])
                state.cart = state.cart.filter((item) => selectedFilter.includes(item.brand))
            }
            if(action.payload.filterType === 'searchProduct'){
                const searchString = action.payload.searchProduct
                state.cart = state.cart.filter(item => item.productName.toLowerCase().includes(searchString))
            }
            if(action.payload.filterType === 'priceRangeFilter'){
                const minPrice = action.payload.priceRangeFilter.minValue
                const maxPrice = action.payload.priceRangeFilter.maxValue
                state.cart = state.cart.filter((item) => parseFloat(item.offerPrice) >= minPrice && parseFloat(item.offerPrice) <= maxPrice);
            }
            if(action.payload.filterType === 'sorting'){
                state.cart = state.cart.sort((a, b) => {
                    if(action.payload.sorting === 'asc'){
                        return parseFloat(a.offerPrice) - parseFloat(b.offerPrice)
                    }else if(action.payload.sorting === 'desc'){
                        return parseFloat(b.offerPrice) - parseFloat(a.offerPrice)
                    }
                    return 0;
                })
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