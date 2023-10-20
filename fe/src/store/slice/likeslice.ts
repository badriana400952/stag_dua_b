
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Thread } from "../../interface/Thread";


const initialLikesState: { threads: Thread[] } = { threads: [] };

export const likeSlice = createSlice({
  name: "thread",
  initialState: initialLikesState,
  reducers: {
    GET_THREADS: (state, action) => {
      state.threads = action.payload;
    },
    SET_THREAD: (state, action: PayloadAction<{ threads: Thread[] }>) => {
      state.threads = action.payload.threads;
    },
    LIKE: (state, action: { payload: { id: number; isLiked: boolean } }) => {
      const { id, isLiked } = action.payload;
    
      state.threads = state.threads.map((thread) => {
        if (thread.id === id) {
          return { ...thread, likes_count: isLiked ? thread.likes_count - 1 : thread. likes_count + 1,
            isLiked: !isLiked,
          };
        }
        return thread;
      });
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