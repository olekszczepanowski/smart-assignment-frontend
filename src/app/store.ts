import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import filterReducer from "../features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    userFilter: filterReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
