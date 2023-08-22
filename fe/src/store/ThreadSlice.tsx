// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import { ApiData } from "../lib/Api";
// import { Thread, threadState } from "../interface/Thread";
// import { ApiData } from "../lib/Api";


// // const getThreadServer = async (): Promise<ThreadStatus[]> => {
// //     const response = await axios.get('http://localhost:5000/api/thread'); // Ubah URL sesuai dengan endpoint yang benar
// //     return response.data;
// //   };
// //   export const fetchDataStatus = createAsyncThunk('thread/fetchDataStatus', async () => {
// //     return await getThreadServer();
// //   });

// export const GetThreadServer = createAsyncThunk('thread/GetThreadServer', async (): Promise<Thread[]> => {
//     const response = await ApiData.get('http://localhost:5000/api/thread',{
//         headers : {
//             Authorization: `Bearer ${localStorage.token}`
//         }
//     }); // Ubah URL sesuai dengan endpoint yang benar
//     // console.log("ini ini ini", response.data)
//     return response.data;
// });

// export const AddThreadsDatas = createAsyncThunk(`thread/AddThreadsDatas`, async(thread) => {
//     const responseData = await ApiData.post(`http://localhost:5000/api/thread/created`, thread);
//     console.log("ini ini ini", responseData.data)

//     return responseData.data.thread
// })

// const linitialState: threadState = {
//     threadles: [],
//     loading: false,
//     error: null,
// };

// const threadSlice = createSlice({
//     name: "thread",
//     initialState: linitialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(GetThreadServer.pending, (state) => {
//                 state.loading = true;
//                 state.error = null
//             })
//             .addCase(GetThreadServer.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.threadles = action.payload
//             })
//             .addCase(GetThreadServer.rejected, (state) => {
//                 state.loading = false
//                 state.error = 'data gak ada'
//             })

//             .addCase(AddThreadsDatas.pending, (state) => {
//                 state.loading = true;
//                 state.error = null
//             })
//             .addCase(AddThreadsDatas.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.threadles.push(action.payload)
//                 // console.log("ini threadles",threadSlice)
//             })
//             .addCase(AddThreadsDatas.rejected, (state) => {
//                 state.loading = false
//                 state.error = 'data gak ada'
//             })
//     },
// })
// export default threadSlice.reducer