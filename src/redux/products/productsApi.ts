import { AppRoute } from '../../libs/enum/app-route-enum';
import { Category } from '../../libs/types/Category';
import { Product } from '../../libs/types/Product';
import { mainApi } from '../mainApi';

export const productsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ is_best, is_new, is_sale, limit = 10, max_items, offset = 0, ordering, search }) => {
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
    }),
    getProductCategories: builder.query<Category[], void>({
      query: () => `api/v1/catalog/categories/tree/`,
      transformResponse: (response: { data: Category[] }) => {
        return response.data || [];
      },
    }),

    getProductById: builder.query<Product, number>({
      query: (id: number) => ({
        url: `api/v1/catalog/products/${id}/`,
      }),
      transformResponse: (response: { data: Product }) => response.data,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductCategoriesQuery, useGetProductByIdQuery } = productsApi;
