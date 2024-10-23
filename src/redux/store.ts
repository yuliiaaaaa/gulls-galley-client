import { mainApi } from './mainApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { productsApi } from './products/productsApi';
import { cartApi } from './cart/cartApi';
import { authApi } from './auth/authApi';
import { ordersApi } from './orders/ordersApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [mainApi.reducerPath]: mainApi.reducer,
  products: productsApi.reducer,
  cart: cartApi.reducer,
  ordersApi: ordersApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, mainApi.middleware),
});

console.log(authApi.reducerPath, mainApi.reducerPath, ordersApi.reducerPath);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
