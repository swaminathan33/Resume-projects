import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const CartDetails = createSlice({
    name:'cartdetails',
    initialState,
    reducers:{
        setCart:(state,action) =>{
            state.cart = [...state.cart, action.payload];
        },
        removeCart:(state, action) =>{
            state.cart = action.payload;
        }
    }
})

export const {setCart, removeCart} = CartDetails.actions


export default CartDetails.reducer