import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import prodcutReducer from './features/productSlice';
import orderReducer from './features/orderSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: prodcutReducer,
    order: orderReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
