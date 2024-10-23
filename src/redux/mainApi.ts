import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Product', 'Cart', 'UserProfile', 'Address'],
  endpoints: () => ({}),
});
