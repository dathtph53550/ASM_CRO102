import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';
import productReducer from './reducers/productReducer';
import themeReducer from './reducers/themeReducer';
import searchReducer from './reducers/searchReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    notifications: notificationReducer,
    products: productReducer,
    theme: themeReducer,
    search: searchReducer,
  },
});

export default store;
