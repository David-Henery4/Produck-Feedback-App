import { createSlice } from "@reduxjs/toolkit";
import categoryData from "@/data/categoryData";

const resetData = () => {
  return JSON.parse(JSON.stringify(categoryData)).map(
    (item) => {
      item.isActive = false
      return item
    }
  );
}

const initialState = {
  filterOptions: [
    {
      id: 6,
      dataType: "all",
      label: "All",
      isActive: true,
    },
    ...resetData(),
  ],
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    upDateFilterUi: (state, {payload}) => {
      state.filterOptions = state.filterOptions.map(filter => {
        filter.id === payload ? filter.isActive = true : filter.isActive = false
        return filter
      })
    }
  }
})


export const {upDateFilterUi} = filters.actions

export default filters.reducer