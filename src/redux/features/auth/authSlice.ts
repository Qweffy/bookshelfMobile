import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Usuario } from '../../../interfaces/appInterfaces'
import authService from './authService'

interface AuthSliceProps {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  // signUp: ( registerData: RegisterData ) => void;
  // signIn: ( loginData: LoginData ) => void;
  // logOut: () => void;
  // removeError: () => void;
}

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      await authService.register(user)
    } catch (error) {
      const message = (error.response?.data?.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }, 
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: () => {},
})

export const { reset } = authSlice.actions
export default authSlice.reducer
