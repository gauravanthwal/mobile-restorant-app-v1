import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {loginUserService} from '../../common/services/userServices';
import {getFromStorage, removeFromStorage} from '../../common/helper/storage';
import {getAllProductsService} from '../../common/services/productServices';
import {
  createNewOrderService,
  getMyOrdersService,
} from '../../common/services/orderServices';
import Toast from 'react-native-toast-message';

type InitialState = {
  myOrders: [];
  selectedProduct: {};
  isLoading: boolean;
};

const initialState = {
  myOrders: [],
  selectedProduct: {},
  isLoading: false,
} as InitialState;

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrderReducer: state => {
      state.myOrders = [];
      state.isLoading = false;
      state.selectedProduct = {};
    },
  },

  extraReducers: builder => {
    // Get MyOrders case
    builder.addCase(getMyOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMyOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      const {payload} = action;
      if (payload?.success) {
        state.myOrders = payload.orders;
      }
    });
  },
});

export const getMyOrders: any = createAsyncThunk('getMyOrders', async () => {
  return getMyOrdersService();
});

export const createNewOrder: any = createAsyncThunk(
  'createNewOrder',
  async (data: any, {dispatch}) => {
    const res = await createNewOrderService(data);

    if (res?.success) {
      Toast.show({
        type: 'success',
        text1: res?.message,
      });
    }
  },
);

export const {resetOrderReducer} = orderSlice.actions;
export default orderSlice.reducer;
