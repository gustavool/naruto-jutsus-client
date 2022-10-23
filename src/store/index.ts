import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FilterReducer from './Filters.store';

const rootReducer = combineReducers({
  filters: FilterReducer,
});

export const index = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
