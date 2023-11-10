import { createSlice } from "@reduxjs/toolkit";
import generateUserColour from "./helpers/generateUserColour";

const initialState = {
  currentUser: {
    image: "image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround",
    userColour: generateUserColour()
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  }
})



export default user.reducer