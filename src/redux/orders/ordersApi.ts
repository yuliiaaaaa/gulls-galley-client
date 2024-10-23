import { RTKMethods } from '../../libs/enum/rtk-queries-methods';
import {
  CreateOrderFromCartRequest,
  Order,
  OrderInCabinet,
  OrderResponse,
  OrderResponseUserCabinet,
  Payment,
  PaymentResponse,
} from '../../libs/types/Order';
import { mainApi } from '../mainApi';

export const ordersApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrderFromCart: builder.mutation<Order, CreateOrderFromCartRequest>({
      query: (orderInfo) => ({
        url: '/api/v1/orders/create_order_from_cart/',
        method: RTKMethods.POST,
        body: orderInfo,
      }),
      transformResponse: (response: OrderResponse) => response.data,
    }),
    createPayment: builder.mutation<Payment, number>({
      query: (orderId) => ({
        url: `api/v1/payments/orders/${orderId}/create-payment/`,
        method: 'POST',
      }),
      transformResponse: (response: PaymentResponse) => response.data,
    }),
    getOrders: builder.query<OrderInCabinet[], { limit?: number; offset?: number }>({
      query: ({ limit = 10, offset = 0 }) => ({
        url: '/api/v1/orders/',
        method: RTKMethods.GET,
        params: { limit, offset },
      }),
      transformResponse: (response: OrderResponseUserCabinet) => response.data.results,
    }),
  }),
});

export const { useCreateOrderFromCartMutation, useCreatePaymentMutation, useGetOrdersQuery } = ordersApi;
