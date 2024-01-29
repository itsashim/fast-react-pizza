import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
    // cart: [{
    //     pizzaId: 12, 
    //     name: "Chicken Pizza",
    //     quantity: 2,
    //     unitPrice: 10,
    //     totalPrice: 30
    // },],
}

const cartSlice =  createSlice({
    name: "cart", 
    initialState,
    reducers: {
        addItem(state, action){
            state.cart.push(action.payload)
        },
        deleteItem(state, action){
             state.cart =  state.cart.filter((item)=> item.pizzaId !== action.payload)
        },
        increaseItem(state, action){
           const item = state.cart.find((item)=> item.pizzaId === action.payload);
           item.quantity++;
           item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItem(state, action){
            const item = state.cart.find((item)=> item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state){
            state.cart = []
        },
    }
})

export const {addItem, deleteItem, decreaseItem, increaseItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

// export const  getTotalCartPrice = 