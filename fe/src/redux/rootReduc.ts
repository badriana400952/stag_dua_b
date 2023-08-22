import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import threadReducer from "./ThreadSlice"
import LoginSlice from './LoginSlice';
// import ThreadSlice from './ThreadSlice';

const rootReducer = combineReducers({
  // dataThread: ThreadSlice, 
  logins:LoginSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


export default store;