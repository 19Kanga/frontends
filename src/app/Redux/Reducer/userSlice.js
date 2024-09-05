import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userServices from '../../services/users';

// Get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'));
// const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  user: {},
  users: [],
  token: null,
  isError: false,
  isSuccess: false,
  isSucces:false,
  isLoading: false,
  message: '',
};

// Register user
export const register = createAsyncThunk (
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await userServices.register (user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const rep = await userServices.login(user);
      return rep;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
      // console.log (error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  return true
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    }
  },
  extraReducers: builder => {
    builder
      .addCase (register.pending, state => {
        state.isLoading = true;
      })
      .addCase (register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase (register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        // state.users = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = action.payload.success;
        state.isSucces = action.payload.success;
        state.token = action.payload.token;
        state.user = action.payload.result;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        // state.token = null;
        // state.user = null;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token=null;
        state.user={};
        state.isSucces=false;
        state.isSuccess=false;
        state.message='';
      })
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
