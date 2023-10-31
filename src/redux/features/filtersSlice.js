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
  currentFilter: "all"
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    upDateFilterUi: (state, {payload}) => {
      state.filterOptions = state.filterOptions.map(filter => {
        if (filter.id === payload){
          state.currentFilter = filter.dataType;
          filter.isActive = true;
        } else{
          filter.isActive = false;
        }
        return filter
      })
    }
  }
})


export const {upDateFilterUi} = filters.actions

export default filters.reducer