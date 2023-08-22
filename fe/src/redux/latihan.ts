import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Thread, threadState } from "../interface/Thread";
import { ApiData } from "../lib/Api";



export const GetThreadServer = createAsyncThunk<Thread[]>('threadles/GetThreadServer', async (_, thunkAPI) => {
    try {
        const response = await ApiData.get('/thread', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }); 
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const AddThreadsDatas = createAsyncThunk<Thread>(`threadles/AddThreadsDatas`, async (thread, thunkAPI) => {
    const responseData = await ApiData.post(`/thread/created`, thread);
    thunkAPI.dispatch(GetThreadServer())
    console.log("ini ini ini", responseData.data)

    return responseData.data.thread
})

const linitialState: threadState = {
    threadles: [],
    loading: false,
    error: null,
};

const threadSlice = createSlice({
    name: "threadles",
    initialState: linitialState,
    reducers: {
        threadles: (state, action: PayloadAction<Thread[]>) => {
            state.threadles = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetThreadServer.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(GetThreadServer.fulfilled, (state, action) => {
            state.loading = false;
            state.threadles = action.payload

        })
        builder.addCase(GetThreadServer.rejected, (state) => {
            state.loading = false
            state.error = 'data gak ada'
        })

        builder.addCase(AddThreadsDatas.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(AddThreadsDatas.fulfilled, (state, action) => {
            state.loading = false;
            state.threadles.push(action.payload)
            // console.log("ini threadles",threadSlice)
        })
        builder.addCase(AddThreadsDatas.rejected, (state) => {
            state.loading = false
            state.error = 'data gak ada'
        })
    },
})
export default threadSlice.reducer
export const { threadles} = threadSlice.actions