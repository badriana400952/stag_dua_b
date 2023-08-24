// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ApiData, SetAuthToken } from "../lib/Api";
// import { LoginUser, UserLoginState } from "../interface/Thread";

// const loginInitialState: UserLoginState = {
//   logins: [],
//   loading: false,
//   error: null,
// };

// // export const authUser = createAsyncThunk("logins/authUser", async (_data : Thread, thunkAPI) => {
// //   try {
// //     const response = await ApiData.get("/login");
// //     const rdt = response.data.token;
// //     console.log("return", response.data);
// //     localStorage.setItem("token", rdt);
// //     SetAuthToken(localStorage.token);
// //     return response.data;
// //   } catch (error) {
// //     return thunkAPI.rejectWithValue(error);
// //   }
// // }
// // );

// export const loginUser = createAsyncThunk(
//   "logins/loginUser",
//   async (dataUser: LoginUser, thunkAPI) => {
//     try {
//       const response = await ApiData.post("/login", dataUser);
//       const rdt = response.data.token;
//       console.log("return", response.data);
//       localStorage.setItem("token", rdt);
//       SetAuthToken(localStorage.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "logins",
//   initialState: loginInitialState,
//   reducers: {
//     setLogins: (state, action: PayloadAction<LoginUser[]>) => {
//       state.logins = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // .addCase(authUser.pending, (state) => {
//       //   state.loading = true;
//       //   state.error = null;
//       // })
//       // .addCase(authUser.fulfilled, (state, action) => {
//       //   state.loading = false;
//       //   state.logins = action.payload;
//       // })
//       // .addCase(authUser.rejected, (state, action) => {
//       //   state.loading = false;
//       //   state.error = action.error.message || "Gagal menambahkan data thread";
//       // })
//     //
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//     .addCase(loginUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.logins = [...state.logins, action.payload];
//     })
//     .addCase(loginUser.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message || "Gagal menambahkan data thread";
//     });
// },
// });

// export const { setLogins } = userSlice.actions;
// export default userSlice.reducer;
