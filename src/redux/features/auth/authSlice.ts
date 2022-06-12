import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoginData } from '../../../interfaces/appInterfaces'
import authService from './authService'

// Get user from localStorage
// const user = null

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async ({ correo: email, password } :LoginData, thunkAPI) => {
    try {
      return await authService.signIn(correo, password)
    } catch (error) {
      console.log('error',error)
      return thunkAPI.rejectWithValue(error)
    }
  } 
)

// Login user
export const login = createAsyncThunk('auth/login', async ({ correo, password }, thunkAPI) => {
  try {
    const response = await authService.signIn({ correo, password })
    return response
  } catch(error) {
    console.log('loginerrorSlice',error)

  }
  
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        // state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        // state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        // state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
