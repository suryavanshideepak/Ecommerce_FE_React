import CartReducer from './cartSlice';
import AuthReducer from './authSlice';

const rootReducers = {
  cart: CartReducer,
  auth: AuthReducer
};

export default rootReducers;
