import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    image: "image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround",
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  }
})



export default user.reducer