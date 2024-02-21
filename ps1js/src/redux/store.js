import { configureStore } from '@reduxjs/toolkit'
import authReducers from './authReducers'
import storeReducers from './storeReducers'
export const store = configureStore({
  reducer: {
    auth:authReducers,
    store:storeReducers
  },
})