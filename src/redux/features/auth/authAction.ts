// import { getUserPending, getUserSuccess, getUserFail } from "./userSlice"
// import { fetchUser } from "../../api/userApi"

// export const getUserProfile = () => async (dispatch) => {
//   try {
//     dispatch(getUserPending())

//     const result = await fetchUser()

//     if (result.user && result.user._id)
//       return dispatch(getUserSuccess(result.user))

//     dispatch(getUserFail("User is not found"))
//   } catch (error) {
//     dispatch(getUserFail(error))
//   }
// }

// export const login = createAsyncThunk('auth/login', async ({ correo, password }, thunkAPI) => {
//     try {
//       console.log('try')
//       return await authService.signIn({ correo, password })
//     } catch (error) {
//       const message =
//       console.log('error', error)
//       (error.response && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   })
