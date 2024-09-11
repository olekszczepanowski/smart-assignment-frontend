import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
}

const initialState: InputState = {
  name: "",
  username: "",
  email: "",
  phoneNumber: "",
};

export const filterSlice = createSlice({
  name: "userFilter",
  initialState,
  reducers: {
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUsernameFilter: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmailFilter: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumberFilter: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    clearFilters: (state) => {
      state.name = "";
      state.username = "";
      state.email = "";
      state.phoneNumber = "";
    },
  },
});

export const {
  setNameFilter,
  setUsernameFilter,
  setEmailFilter,
  setPhoneNumberFilter,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
