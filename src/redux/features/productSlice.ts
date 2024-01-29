import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {loginUserService} from '../../common/services/userServices';
import {getFromStorage, removeFromStorage} from '../../common/helper/storage';
import { getAllProductsService } from '../../common/services/productServices';

type InitialState = {
  allProducts: [];
  selectedProduct: {};
  isLoading: boolean;
};

const initialState = {
  allProducts: [],
  selectedProduct: {},
  isLoading: false,
} as InitialState;

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    removeSelectedProduct: (state, action) => {
      state.selectedProduct = {};
    },
    resetProductReducer: (state)=>{
      state.allProducts = [];
      state.isLoading = false;
      state.selectedProduct = {}
    }
  },

  extraReducers: builder => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      const {payload} = action;
      if (payload?.success) {
        state.allProducts = payload.products;
      }
    });
  },
});

export const getAllProducts: any = createAsyncThunk(
  'getAllProducts',
  async () => {
    return getAllProductsService();
  },
);

export const {setSelectedProduct, removeSelectedProduct, resetProductReducer} = product.actions;
export default product.reducer;
