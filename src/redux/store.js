import {configureStore} from "@reduxjs/toolkit"
import sortReducer from "@/redux/features/sortSlice";
import dropdownReducer from "@/redux/features/dropdownInputSlice";
import filterReducer from "@/redux/features/filtersSlice";
import userReducer from "@/redux/features/userSlice";

export const store = configureStore({
  reducer: {
    sortReducer,
    dropdownReducer,
    filterReducer,
    userReducer,
  }
})

