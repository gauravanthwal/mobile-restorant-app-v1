import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import prodcutReducer from './features/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: prodcutReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
