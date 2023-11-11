import { createSlice } from "@reduxjs/toolkit";
import generateUserColour from "./helpers/generateUserColour";

const initialState = {
  currentUser: {
    image: "image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround",
    userColour: generateUserColour(),
    userInitial: ""
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, {payload}) => {
      console.log()
    }
  }
})



export default user.reducer

export const {setUserData} = user.actions