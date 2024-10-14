import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logout, setTokens } from './auth/authSlice';
import { AuthToken } from '../libs/types/auth/AuthToken';
import { RTKMethods } from '../libs/enum/rtk-queries-methods';
import type { RootState } from './store';

const baseUrl = 'https://gulls-galley-server-production.up.railway.app';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth?.accessToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const state = api.getState() as RootState;
  const { refreshToken } = state.auth;
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401 && refreshToken) {
    const refreshResult = await baseQuery(
      {
        body: { refresh: refreshToken },
        method: RTKMethods.POST,
        url: '/api/v1/user/token/refresh/',
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const data = refreshResult.data as AuthToken;
      api.dispatch(setTokens(data));
      console.log('refresh');

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
