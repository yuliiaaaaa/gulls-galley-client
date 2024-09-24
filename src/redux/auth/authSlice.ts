import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { SignUpResponseDto, User } from '../../libs/types/auth/SignUpResponseDto';
import { LogInResponseDto } from '../../libs/types/auth/LogInResponseDto';

type InitialState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: InitialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }: PayloadAction<LogInResponseDto>) => {
        state.accessToken = payload.access;
        state.refreshToken = payload.refresh;
        state.user = payload.user;
      },
    );
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }: PayloadAction<SignUpResponseDto>) => {
        state.accessToken = payload.access;
        state.refreshToken = payload.refresh;
        state.user = payload.user;
      },
    );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
