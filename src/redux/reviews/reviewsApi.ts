import { ReviewResponse } from '../../libs/types/Review';
import { mainApi } from '../mainApi';

export const reviewsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (slug: string) => `/api/v1/catalog/products/${slug}/reviews/`,
      transformResponse: (data: ReviewResponse) => data.data,
    }),
  }),
});

export const {useGetReviewsQuery}= reviewsApi;