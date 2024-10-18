import { mainApi } from '../mainApi';
import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import { Cart, CartItemAdd, CartResponse, PatchedCartItemUpdateQuantity } from '../../libs/types/Cart';

export const cartApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createCart: builder.mutation<Cart, void>({
      query: () => ({
        url: '/api/v1/cart/',
        method: RTKMethods.POST,
      }),
      transformResponse: (response: Cart) => response,
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    getCart: builder.query<Cart, void>({
      query: () => ({
        url: `/api/v1/cart/`,
        method: RTKMethods.GET,
      }),
      transformResponse: (response: CartResponse) => response.data,
    }),

    addItemToCart: builder.mutation<void, CartItemAdd>({
      query: (item: CartItemAdd) => ({
        url: `/api/v1/cart/add_item/`,
        method: RTKMethods.POST,
        body: item,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    updateCartItemQuantity: builder.mutation<void, { item_id: number; quantity: number }>({
      query: ({ quantity, item_id }) => ({
        url: `/api/v1/cart/update_item_quantity/`,
        method: RTKMethods.PATCH,
        body: { quantity, item_id },
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    removeItemFromCart: builder.mutation<void, number>({
      query: (item_id: number) => ({
        url: `/api/v1/cart/remove_item/`,
        method: RTKMethods.DELETE,
        params: { item_id },
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetCartQuery,
  useAddItemToCartMutation,
  useUpdateCartItemQuantityMutation,
  useRemoveItemFromCartMutation,
} = cartApi;
