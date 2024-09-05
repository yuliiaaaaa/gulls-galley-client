import { mainApi } from '../mainApi';

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: () => ({
        url: '/',
      }),
    }),
  }),
});

export const { useRegisterMutation} = authApi;
