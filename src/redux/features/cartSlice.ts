import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {loginUserService} from '../../common/services/userServices';
import {getFromStorage, removeFromStorage} from '../../common/helper/storage';
import {getAllProductsService} from '../../common/services/productServices';
import {getMyOrdersService} from '../../common/services/orderServices';
import {getMyCartItemsService} from '../../common/services/cartServices';

type InitialState = {
  cartItems: [];
  isLoading: boolean;
};

const initialState = {
  cartItems: [],
  isLoading: false,
} as InitialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCartsReducer: state => {
      state.cartItems = [];
      state.isLoading = false;
    },
  },

  extraReducers: builder => {
    // Get MyOrders case
    builder.addCase(getMyCartItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMyCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      const {payload} = action;
      if (payload?.success) {
        state.cartItems = payload.cartItems;
      }
    });
  },
});

export const getMyCartItems: any = createAsyncThunk(
  'getMyCartItems',
  async () => {
    return getMyCartItemsService();
  },
);

export const {resetCartsReducer} = cartSlice.actions;
export default cartSlice.reducer;
