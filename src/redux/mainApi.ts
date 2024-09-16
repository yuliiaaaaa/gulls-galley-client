import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './store';

const baseUrl = 'https://gulls-galley-server-production.up.railway.app';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.user;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
