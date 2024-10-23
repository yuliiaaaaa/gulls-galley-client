import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logout, setTokens } from './auth/authSlice';
import { AuthToken } from '../libs/types/auth/AuthToken';
import { RTKMethods } from '../libs/enum/rtk-queries-methods';
import type { RootState } from './store';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

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
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const state = api.getState() as RootState;
    const { refreshToken } = state.auth;

    if (refreshToken) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          const refreshResult = await baseQuery(
            {
              url: '/api/v1/user/token/refresh/',
              method: RTKMethods.POST,
              body: { refresh: refreshToken },
            },
            api,
            extraOptions,
          );

          if (refreshResult.data) {
            const data = refreshResult.data as AuthToken;
            api.dispatch(setTokens(data));

            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
          }
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};
