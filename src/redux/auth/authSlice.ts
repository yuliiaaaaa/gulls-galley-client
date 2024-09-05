import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// export {}=authSlice.actions;
export const authReducer = authSlice.reducer;
