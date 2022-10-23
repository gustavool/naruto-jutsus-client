import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FilterOptionType = {
  type: string;
  name: string;
};

export type FilterState = {
  name: string;
  options: FilterOptionType[];
};

const initialState: FilterState = {
  name: ``,
  options: [] as FilterOptionType[],
};

export const filterSlice = createSlice({
  name: `filters`,
  initialState,
  reducers: {
    clearFilters: () => {
      return initialState;
    },
    setFilters: (state: FilterState, action: PayloadAction<FilterState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { clearFilters, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
