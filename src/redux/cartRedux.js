import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1 // ! This is cart quantity. Heden turliin product bgag zaana.
      state.products.push(action.payload) // payload - new product
      state.total += action.payload.price * action.payload.quantity // ! this quantity is different from state quantity. This is product quantity
    },
  },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
