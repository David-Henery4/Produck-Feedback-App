import { createSlice } from "@reduxjs/toolkit";
import categoryData from "@/data/categoryData";
import statusData from "@/data/statusData";

const initialState = {
  categoryData,
  statusData,
  currentCategory: "",
  currentStatus: "",
  currentCategoryData: {
    id: 1,
    dataType: "feature",
    label: "Feature",
    isActive: true,
  },
  currentStatusData: {
    id: 8,
    dataType: "planned",
    label: "Planned",
    isActive: true,
  },
};

const dropdownInput = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    updateStatusInput: (state, {payload}) => {

    },
    updateCategoryInput: (state, {payload}) => {

    },
  }
})

export const {updateCategoryInput, updateStatusInput} = dropdownInput.actions

export default dropdownInput.reducer