
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Thread } from "../../interface/Thread";


const initialLikesState: { threads: Thread[] } = { threads: [] };

export const likeSlice = createSlice({
  name: "likes",
  initialState: initialLikesState,
  reducers: {
    GET_THREADS: (state, action) => {
      state.threads = action.payload;
    },
    // SET_THREAD_LIKE: (state, action: PayloadAction<{threads: Thread }>) => {
    //   const payload = action.payload;

    //   state = payload.threads

    //   return state;
    // },
    SET_THREAD_LIKE: (state, action: PayloadAction<{ threads: Thread[] }>) => {
      state.threads = action.payload.threads;
    }
  },
  // reducers: {
  //   setThreadLike: (state, action: PayloadAction<{threads: Thread[]}>) => {
      
  //     return { ...state, ...action.payload.threads };
  //     // return state.threads = action.payload.threads;

  //   },
  //   addThread: (state, action) => {
  //     state.threads.push(action.payload.thread);
  //   },
  //   deleteThread: (state, action) => {
  //     delete state.threads[action.payload.threadId];
  //   },
  //   setThreadData: (state, action) => {
  //     state.threads = action.payload.threads;
  //   },
  // },
});