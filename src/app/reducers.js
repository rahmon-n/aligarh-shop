import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from '../features/categories/categoriesSlice';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
  userReducer,
  categoriesReducer,
  cartReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
