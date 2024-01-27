import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {loginUserService} from '../../common/services/userServices';
import {getFromStorage, removeFromStorage, setToStorage} from '../../common/helper/storage';

type InitialState = {
  isLoggedIn: boolean;
  user: any;
  token: any;
  errorMessage: string;
  isAuthLoader: boolean;
};

const initialState = {
  isLoggedIn: false,
  user: {},
  token: '',
  isAuthLoader: false,
  errorMessage: '',
} as InitialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginIfToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: state => {
      removeFromStorage('token');
      state.isLoggedIn = false;
      state.token = '';
    },
  },

  extraReducers: builder => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isAuthLoader = true;
      state.errorMessage = '';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthLoader = false;

      if (action?.payload?.success && action?.payload?.token) {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        setToStorage("token" , action.payload.token)
      } else {
        if (action?.payload?.error) {
          state.errorMessage = action?.payload?.message;
        }
        state.isLoggedIn = false;
      }
    });
  },
});

export const loginUser: any = createAsyncThunk(
  'loginUser',
  async (userInfo: any) => {
    return loginUserService(userInfo);
  },
);

export const {loginIfToken, logout} = auth.actions;
export default auth.reducer;
