import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import handleAuthError from '../../authError/authError';

axios.defaults.baseURL = 'https://pets-shelter-service.onrender.com/';

const setAuth = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuth = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk('auth/register', async (credentials) => {
  try {
    const { data } = await axios.post('users/register', credentials);
    return data;
  } catch (error) {
    handleAuthError(error);
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuth(data.token);
    return data;
  } catch (error) {
    handleAuthError(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    clearAuth();
  } catch (error) {
    console.log(error);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('error request');
    }
    setAuth(persistedToken);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(logOut());
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

const authOperation = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
};
export default authOperation;
