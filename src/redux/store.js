import {configureStore} from "@reduxjs/toolkit"
import productRequestsReducer from "@/redux/features/prodReqsSlice";
import sortReducer from "@/redux/features/sortSlice";
import dropdownReducer from "@/redux/features/dropdownInputSlice";

export const store = configureStore({
  reducer: {
    productRequestsReducer,
    sortReducer,
    dropdownReducer,
  }
})

