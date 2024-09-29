import { DEFAULT_LIMIT_PRODUCTS } from '../../libs/consts/app';
import { AppRoute } from '../../libs/enum/app-route-enum';
import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import { Category } from '../../libs/types/Category';
import { GetProductsDto, Product } from '../../libs/types/Product';
import { mainApi } from '../mainApi';

export const productsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], GetProductsDto>({
      query: ({
        is_best,
        is_new,
        is_sale,
        limit = DEFAULT_LIMIT_PRODUCTS,
        max_items,
        offset = 0,
        ordering,
        search,
      }) => {
        const params = { is_best, is_new, is_sale, limit, max_items, offset, ordering, search };

        const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value != null));

        return {
          url: `api/v1/catalog/products/`,
          params: filteredParams,
        };
      },
      transformResponse: (response: { data: { results: Product[] } }) => {
        return response.data.results || [];
      },
      providesTags: (result, error, arg) =>
        result
          ? [{ type: 'Product' as const, id: 'LIST' }, ...result.map(({ id }) => ({ type: 'Product' as const, id }))]
          : [{ type: 'Product' as const, id: 'LIST' }],
    }),
    getProductCategories: builder.query<Category[], void>({
      query: () => `api/v1/catalog/categories/tree/`,
      transformResponse: (response: { data: Category[] }) => {
        return response.data || [];
      },
    }),

    getProductBySlug: builder.query<Product, string>({
      query: (slug: string) => ({
        url: `api/v1/catalog/products/${slug}/`,
      }),
      transformResponse: (response: { data: Product }) => response.data,
    }),
    addProductToFavorites: builder.mutation<void, number>({
      query: (product_id: number) => ({
        url: `/api/v1/catalog/favorites/add/`,
        method: RTKMethods.POST,
        body: { product_id },
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
    removeFavoritesProduct: builder.mutation<void, number>({
      query: (product_id: number) => ({
        url: `/api/v1/catalog/favorites/${product_id}/remove/`,
        method: RTKMethods.DELETE,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductBySlugQuery,
  useAddProductToFavoritesMutation,
  useRemoveFavoritesProductMutation,
} = productsApi;
