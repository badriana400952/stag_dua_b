// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { Thread,  ThreadStatus,  threadState } from "../../interface/Thread";
// import { ApiData } from "../../lib/Api";


// export const GetThreadServer = createAsyncThunk('thread/GetThreadServer', async (): Promise<Thread[]> => {
//     const response = await ApiData.get('/thread',{
//         headers : {
//             Authorization: `Bearer ${localStorage.token}`
//         }
//     }); 
//     return response.data;
// });

// export const AddThreadsDatas = createAsyncThunk('thread/AddThreadsDatas', async (fromdata: ThreadStatus) => {
//     const responseThread = await ApiData.post(`/thread/created`, fromdata);
//     const data = responseThread.data;

//     return data;

// });

// const linitialState: threadState = {
//     thread: [],
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
//                 state.thread = action.payload
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
//                 state.thread.push(action.payload)
//                 // state.thread = action.payload
//                 // console.log("ini threadles",threadSlice)
//             })
//             .addCase(AddThreadsDatas.rejected, (state) => {
//                 state.loading = false
//                 state.error = 'data gak ada'
//             })
//     },
// })
// export default threadSlice.reducer