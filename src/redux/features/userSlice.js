import { createSlice } from "@reduxjs/toolkit";
import generateUserColour from "./helpers/generateUserColour";

const initialState = {
  currentUser: {
    id: "",
    image: null, // og
    name: "", // og
    username: "", // og
    userColour: generateUserColour(),
    userInitial: "",
    role: ""
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, {payload}) => {
      const userInitial = payload?.name || payload?.username
      state.currentUser = {
        ...state.currentUser,
        ...payload,
        userInitial: userInitial?.slice(0, 1),
      };
    }
  }
})



export default user.reducer

export const {setUserData} = user.actions