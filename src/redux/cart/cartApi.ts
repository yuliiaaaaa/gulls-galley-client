import { mainApi } from '../mainApi';
import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import { Cart, CartItemAdd, PatchedCartItemUpdateQuantity } from '../../libs/types/Cart';

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

    getCartById: builder.query<Cart, number>({
      query: (id: number) => ({
        url: `/api/v1/cart/${id}/`,
        method: RTKMethods.GET,
      }),
      transformResponse: (response: Cart) => response,
      providesTags: (result, error, id) => [{ type: 'Cart', id }],
    }),

    addItemToCart: builder.mutation<void, CartItemAdd>({
      query: (item: CartItemAdd) => ({
        url: `/api/v1/cart/add_item/`,
        method: RTKMethods.POST,
        body: item,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    updateCartItemQuantity: builder.mutation<void, { id: number; quantity: PatchedCartItemUpdateQuantity }>({
      query: ({ id, quantity }) => ({
        url: `/api/v1/cart/${id}/update_item_quantity/`,
        method: RTKMethods.PATCH,
        body: quantity,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    removeItemFromCart: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/api/v1/cart/${id}/remove_item/`,
        method: RTKMethods.DELETE,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetCartByIdQuery,
  useAddItemToCartMutation,
  useUpdateCartItemQuantityMutation,
  useRemoveItemFromCartMutation,
} = cartApi;
