import { createSlice } from "@reduxjs/toolkit";
import sortData from "@/data/sortData";

const initialState = {
  sortData,
  currentSortLabel: "Most Upvotes",
  currentSortData: {
    id: 1,
    sortBy: "most-upvotes",
    label: "Most Upvotes",
    isActive: true,
  },
};

const sort = createSlice({
  name: "sort",
  initialState,
  reducers: {
    handleSort: (state, {payload}) => {
      state.sortData = state.sortData.map((s) => {
        if (payload.id === s.id) {
          s.isActive = true;
          state.currentSortLabel = s.label;
          state.currentSortData = s
        } else {
          s.isActive = false;
        }
        return s;
      });
    }
  }
})

export const {handleSort} = sort.actions

export default sort.reducer