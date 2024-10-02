import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import { LogInRequestDto } from '../../libs/types/auth/LogInRequestDto';
import { LogInResponseDto } from '../../libs/types/auth/LogInResponseDto';
import { SignUpRequestDto } from '../../libs/types/auth/SignUpRequestDto';
import { SignUpResponseDto } from '../../libs/types/auth/SignUpResponseDto';
import { mainApi } from '../mainApi';

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<SignUpResponseDto, SignUpRequestDto>({
      query: (userData) => ({
        url: '/api/v1/user/register/',
        method: RTKMethods.POST,
        body: userData,
      }),
      transformResponse: (response: { data: SignUpResponseDto }) => response.data,
    }),

    login: build.mutation<LogInResponseDto, LogInRequestDto>({
      query: (userData: LogInRequestDto) => ({
        url: '/api/v1/user/token/',
        method: RTKMethods.POST,
        body: userData,
      }),
      transformResponse: (response: { data: SignUpResponseDto }) => response.data,
    }),

    logout: build.mutation<void, void>({
      query: () => ({
        url: '/api/v1/user/logout-token/',
        method: RTKMethods.DELETE,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation } = authApi;
