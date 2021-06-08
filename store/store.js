import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  })
