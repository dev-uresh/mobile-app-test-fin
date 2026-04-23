import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import accountReducer from './accountSlice';
import transactionReducer from './transactionSlice';
import notificationReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    transactions: transactionReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
