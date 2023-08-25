import { createSlice } from "@reduxjs/toolkit";
import sortData from "@/data/sortData";

const initialState = {
  sortData
}

const sort = createSlice({
  name: "sort",
  initialState,
  reducers: {
    handleSort: (state, {payload}) => {
      console.log(payload)
    }
  }
})

export const {handleSort} = sort.actions

export default sort.reducer