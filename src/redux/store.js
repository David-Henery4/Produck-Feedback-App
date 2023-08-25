import {configureStore} from "@reduxjs/toolkit"
import productRequestsReducer from "@/redux/features/prodReqsSlice";
import sortReducer from "@/redux/features/sortSlice";

export const store = configureStore({
  reducer: {
    productRequestsReducer,
    sortReducer,
  }
})

