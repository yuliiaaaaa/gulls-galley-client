import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../libs/types/products/Product';
import { Category } from '../../libs/types/Category';
import { productsApi } from './productsApi';
import { FavoriteProduct } from '../../libs/types/products/Favorites';

type InitialState = {
  favorites: Product[];
  categories: Category[];
};

const initialState: InitialState = {
  favorites: [],
  categories: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getFavorites.matchFulfilled,
      (state, { payload }: PayloadAction<FavoriteProduct[]>) => {
        state.favorites = payload.map((fav) => fav.product);
      },
    );
  },
});

export const productsReducer = productsSlice.reducer;
export const {} = productsSlice.actions;
