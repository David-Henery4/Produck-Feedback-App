import { createSlice } from "@reduxjs/toolkit";
import categoryData from "@/data/categoryData";
import statusData from "@/data/statusData";
import updateDropdownInputs from "./helpers/dropdownfunction";

const initialState = {
  categoryData,
  statusData,
  currentCategory: "Feature",
  currentStatus: "Planned",
  currentCategoryData: {
    id: 1,
    dataType: "feature",
    label: "Feature",
    isActive: true,
  },
  currentStatusData: {
    id: 1,
    dataType: "planned",
    label: "Planned",
    isActive: true,
  },
};

const dropdownInput = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    updateDropdownData: (state, { payload }) => {
      const { inputName, id } = payload;
      if (inputName === "category-input") {
        const { updatedOverall, currentValue, currentData } =
          updateDropdownInputs(
            id,
            state.categoryData,
            state.currentCategory,
            state.currentCategoryData
          );
          state.categoryData = updatedOverall
          state.currentCategory = currentValue
          state.currentCategoryData = currentData
      }
      if (inputName === "status-input") {
        const { updatedOverall, currentValue, currentData } =
          updateDropdownInputs(
            id,
            state.statusData,
            state.currentStatus,
            state.currentStatusData
          );
          state.statusData = updatedOverall;
          state.currentStatus = currentValue;
          state.currentStatusData = currentData;
      }
    },
  },
});

export const { updateDropdownData } = dropdownInput.actions;

export default dropdownInput.reducer;
