import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  loginUserService,
  registerUserService,
} from '../../common/services/userServices';
import {
  getFromStorage,
  removeFromStorage,
  setToStorage,
} from '../../common/helper/storage';

type InitialState = {
  isLoggedIn: boolean;
  user: any;
  token: any;
  errorMessage: string;
  isAuthLoader: boolean;
  isUserCreatedSuccess: boolean;
};

const initialState = {
  isLoggedIn: false,
  user: {},
  token: '',
  isAuthLoader: false,
  errorMessage: '',
  isUserCreatedSuccess: false
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
      state.isLoggedIn = false;
      state.token = '';
      state.user = {};
      state.isAuthLoader = false;
      state.errorMessage = '';
      state.isUserCreatedSuccess = false;
    },
  },

  extraReducers: builder => {
    // LoginUser Case
    builder.addCase(loginUser.pending, (state, action) => {
      state.isAuthLoader = true;
      state.errorMessage = '';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthLoader = false;

      if (action?.payload?.success && action?.payload?.token) {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        setToStorage('token', action!.payload!.token);
      } else {
        if (action?.payload?.error) {
          state.errorMessage = action?.payload?.message;
        }
        state.isLoggedIn = false;
      }
    });
    // RegisterUser Case
    builder.addCase(registerUser.pending, (state, action)=>{
      state.isAuthLoader = true;
      state.errorMessage = '';
    });
    builder.addCase(registerUser.fulfilled, (state, action)=>{
      state.isAuthLoader = false;
      console.log(action.payload);
      
      if(action?.payload?.success){
        state.isUserCreatedSuccess = true;
      }else{
        if(action?.payload?.error){
          state.errorMessage = action?.payload?.message
        }
      }
    })
  },
});

export const loginUser: any = createAsyncThunk(
  'loginUser',
  async (userInfo: any) => {
    return loginUserService(userInfo);
  },
);

export const registerUser: any = createAsyncThunk(
  'registerUser',
  async (userInfo: any) => {
    return registerUserService(userInfo);
  },
);

export const {loginIfToken, logout} = auth.actions;
export default auth.reducer;
