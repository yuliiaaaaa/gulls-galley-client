import { mainApi } from '../mainApi';
import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import { PaginatedUserAddressList, UserAddress, UserProfile, UserResponse } from '../../libs/types/Addresses';

export const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all user addresses
    getAddresses: builder.query<PaginatedUserAddressList, { limit?: number; offset?: number }>({
      query: ({ limit, offset }) => {
        const params = { limit, offset };
        const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value != null));

        return {
          url: `/api/v1/user/addresses/`,
          method: RTKMethods.GET,
          params: filteredParams,
        };
      },
      providesTags: (result) =>
        result
          ? [...result.data.map(({ id }) => ({ type: 'Address' as const, id }))]
          : [{ type: 'Address', id: 'LIST' }],
    }),

    // Get a specific address by ID
    getAddressById: builder.query<UserAddress, number>({
      query: (id) => ({
        url: `/api/v1/user/addresses/${id}/`,
        method: RTKMethods.GET,
      }),
      providesTags: (result, error, id) => [{ type: 'Address', id }],
    }),

    // Add a new address
    addAddress: builder.mutation<UserAddress, Partial<UserAddress>>({
      query: (newAddress) => ({
        url: `/api/v1/user/addresses/`,
        method: RTKMethods.POST,
        body: newAddress,
      }),
      invalidatesTags: [{ type: 'Address', id: 'LIST' }],
    }),

    // Update an address by replacing it completely (PUT)
    updateAddress: builder.mutation<UserAddress, { id: number; data: Partial<UserAddress> }>({
      query: ({ id, data }) => ({
        url: `/api/v1/user/addresses/${id}/`,
        method: RTKMethods.PUT,
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Address', id }],
    }),

    // Partially update an address (PATCH)
    patchAddress: builder.mutation<UserAddress, { id: number; data: Partial<UserAddress> }>({
      query: ({ id, data }) => ({
        url: `/api/v1/user/addresses/${id}/`,
        method: RTKMethods.PATCH,
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Address', id }],
    }),

    // Delete an address by ID
    deleteAddress: builder.mutation<void, number>({
      query: (id) => ({
        url: `/api/v1/user/addresses/${id}/`,
        method: RTKMethods.DELETE,
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Address', id }],
    }),

    // Get current user's profile
    getUserProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: `/api/v1/user/me/`,
        method: RTKMethods.GET,
      }),
      transformResponse: (data: UserResponse) => data.data,
      providesTags: [{ type: 'UserProfile', id: 'ME' }],
    }),

    // Update user profile (PUT)
    updateUserProfile: builder.mutation<UserProfile, Partial<UserProfile>>({
      query: (updatedProfile) => ({
        url: `/api/v1/user/me/`,
        method: RTKMethods.PUT,
        body: updatedProfile,
      }),
      invalidatesTags: [{ type: 'UserProfile', id: 'ME' }],
    }),

    // Partially update user profile (PATCH)
    patchUserProfile: builder.mutation<UserProfile, Partial<UserProfile>>({
      query: (updatedProfile) => ({
        url: `/api/v1/user/me/`,
        method: RTKMethods.PATCH,
        body: updatedProfile,
      }),
      invalidatesTags: [{ type: 'UserProfile', id: 'ME' }],
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useGetAddressByIdQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  usePatchAddressMutation,
  useDeleteAddressMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  usePatchUserProfileMutation,
} = userApi;
