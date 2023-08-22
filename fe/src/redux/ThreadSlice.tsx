// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { Thread, threadState } from "../interface/Thread";
// import { ApiData } from "../lib/Api";



// const linitialState: threadState = {
//     dataThread: [] as Thread[],
//     loading: false,
//     error: null,
// };

// export const GetThreadServer = createAsyncThunk<Thread[]>('dataThread/GetThreadServer', async (_, thunkAPI) => {
//     try {
//         const response = await ApiData.get('/thread', {
//             headers: {
//                 Authorization: `Bearer ${localStorage.token}`
//             }
//         }); 
//         return response.data
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error)
//     }
// });
// // export const AddThreadsDatas = createAsyncThunk(`dataThread/AddThreadsDatas`, async (thread :threadStatepost, thunkAPI) => {
// //     try {
// //       const responseData = await ApiData.post(`/thread/created`, thread);
// //       thunkAPI.dispatch(GetThreadServer());
// //     //   return responseData.data.thread;
// //       return responseData.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error);
// //     }
// //   });
//         // thunkAPI.dispatch(GetThreadServer());


        
// // export const AddThreadsDatas = createAsyncThunk<Thread, ThreadStatus>(
// //     'dataThread/AddThreadsDatas',
// //     async (threadData: ThreadStatus, thunkAPI) => {
// //       try {
// //         const responseData = await ApiData.post(`/thread/created`, threadData);
// //         thunkAPI.dispatch(GetThreadServer());
// //         return responseData.data;
// //       } catch (error) {
// //         return thunkAPI.rejectWithValue(error);
// //       }
// //     }
// //   );
// // import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { ThreadStatus } from './types'; // Pastikan Anda mengimpor tipe yang sesuai

// // export const AddThreadsDatas = createAsyncThunk<Thread, Thread>(
// //   'dataThread/AddThreadsDatas',
// //   async (threadData: Thread, thunkAPI) => {
// //     try {
// //       // Mengganti dengan pemanggilan ke API Anda
// //       const responseData = await ApiData.post(`/thread/created`, threadData);

// //       // Jika Anda ingin memanggil action lain setelah berhasil menambahkan data
// //       thunkAPI.dispatch(GetThreadServer());

// //       return responseData.data; // Ini bisa jadi hasil respon yang Anda perlukan
// //     } catch (error) {
// //       // Menggunakan `rejectWithValue` untuk menangani kesalahan
// //       return thunkAPI.rejectWithValue("error.response.data");
// //     }
// //   }
// // );



// const threadSlice = createSlice({
//     name: "dataThread",
//     initialState: linitialState,
//     reducers: {
//         setDataThread: (state, action: PayloadAction<Thread[]>) => {
//             state.dataThread = action.payload
//         }
//     },
//     extraReducers: (builder) => {
        
//         builder.addCase(GetThreadServer.pending, (state) => {
//             state.loading = true;
//             state.error = null
//         })
        
//         builder.addCase(GetThreadServer.fulfilled, (state, action) => {
//             state.loading = false;
//             state.dataThread = action.payload

//         })
        
//         builder.addCase(GetThreadServer.rejected, (state) => {
//           state.loading = false;
//           state.error =  'Failed to get thread data';
//         })
        


        
//     },
// });
// export const { setDataThread } = threadSlice.actions

// export default threadSlice.reducer