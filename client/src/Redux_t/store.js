import { configureStore } from '@reduxjs/toolkit'
import betsReducer from "./reducer.js"

import { reducer as formReducer } from 'redux-form'

export const store = configureStore({
  reducer: {
    BETS: betsReducer,
    form: formReducer
  },
})