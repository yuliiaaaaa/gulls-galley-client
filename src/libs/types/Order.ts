export type Order = {
  id: number;
  order_number: string;
  user: number;
  recipient_first_name: string;
  recipient_last_name: string;
  contact_phone: string;
  shipping_address: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  total_amount: string;
  created_at: string;
  updated_at: string;
};

export type OrderResponse = {
  data: Order;
  message: string;
  success: boolean;
};

export type OrderResponseUserCabinet = {
  data: {
    results: OrderInCabinet[];
  };
  message: string;
  success: boolean;
};

export interface CreateOrderFromCartRequest {
  recipient_first_name: string;
  recipient_last_name: string;
  contact_phone: string;
  shipping_address_id: number | null;
}

export interface CreatePaymentRequest {
  orderId: number;
}

export type Payment = {
  payment_url: string;
  session_id: string;
};

export type PaymentResponse = {
  data: {
      payment_url: string;
      session_id: string;
  };
};

export type OrderItem = {
  product_image: string;
  product_name: string;
  price: string;
};

export type OrderInCabinet = {
  items: OrderItem[];
  id: number;
  order_number: string;
  user: number;
  recipient_first_name: string;
  recipient_last_name: string;
  contact_phone: string;
  shipping_address: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  total_amount: string;
  created_at: string;
  updated_at: string;
};
