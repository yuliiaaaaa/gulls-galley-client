import { mainApi } from '../mainApi';

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
  registerUser: build.mutation({
      query: (userData) => ({
        url: '/api/v1/users/register/',
        method: 'POST',
        body: userData,
      }),
  }),
})
})

export const { useRegisterUserMutation } = authApi;
