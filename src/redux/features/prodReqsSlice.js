import {createSlice} from "@reduxjs/toolkit"
import placeholderData from "@/data/data.json"

const initialState = {
  placeholderRequests: placeholderData.productRequests,
};

const productRequests = createSlice({
  name: "productRequests",
  initialState: initialState,
  reducers: {
    sortProductRequests: (state, {payload}) => {
      
    }
  }
})

export const {sortProductRequests} = productRequests.actions

export default productRequests.reducer



