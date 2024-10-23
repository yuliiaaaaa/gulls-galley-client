import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { SignUpResponseDto, User } from '../../libs/types/auth/SignUpResponseDto';
import { LogInResponseDto } from '../../libs/types/auth/LogInResponseDto';
import { AuthToken } from '../../libs/types/auth/AuthToken';

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
    setTokens: (state, { payload }: PayloadAction<AuthToken>) => {
      state.accessToken = payload.access;
      state.refreshToken = payload.refresh;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { logout, setUser, setTokens } = authSlice.actions;
export const authReducer = authSlice.reducer;
