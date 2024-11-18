import { createApi } from '@reduxjs/toolkit/query/react';
import { SignUpResponseDto, User } from '../../libs/types/auth/SignUpResponseDto';
import { SignUpRequestDto } from '../../libs/types/auth/SignUpRequestDto';
import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import { LogInResponseDto } from '../../libs/types/auth/LogInResponseDto';
import { LogInRequestDto } from '../../libs/types/auth/LogInRequestDto';
import { baseQueryWithReauth } from '../baseQueryWithReauth';
import { logout, setTokens, setUser } from './authSlice';
import { LogoutRequest } from '../../libs/types/auth/LogoutRequest';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: (build) => ({
    registerUser: build.mutation<SignUpResponseDto, SignUpRequestDto>({
      query: (userData) => ({
        url: '/api/v1/user/register/',
        method: RTKMethods.POST,
        body: userData,
      }),
      transformResponse: (response: { data: SignUpResponseDto }) => response.data,

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
          dispatch(setTokens({ access: data.access, refresh: data.refresh }));
        } catch (error) {}
      },
    }),
    login: build.mutation<LogInResponseDto, LogInRequestDto>({
      query: (userData: LogInRequestDto) => ({
        url: '/api/v1/user/token/',
        method: RTKMethods.POST,
        body: userData,
      }),
      transformResponse: (response: { data: LogInResponseDto }) => response.data,

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user as User));
          dispatch(setTokens({ access: data.access, refresh: data.refresh }));
        } catch (error) {}
      },
    }),
    logout: build.mutation<void, LogoutRequest>({
      query: (userData) => ({
        url: '/api/v1/user/logout-token/',
        method: RTKMethods.POST,
        body: userData,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation } = authApi;
