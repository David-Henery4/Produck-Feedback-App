import { createSlice } from "@reduxjs/toolkit";
import placeholderData from "@/data/data.json";

const initialState = {
  placeholderRequests: placeholderData.productRequests,
  currentFeedback: {},
};

const productRequests = createSlice({
  name: "productRequests",
  initialState: initialState,
  reducers: {
    sortProductRequests: (state, { payload }) => {
      // let tempArray = state.placeholderRequests.forEach((item) => {

      // })

      if (payload.sortBy === "most-upvotes") {
        state.placeholderRequests = state.placeholderRequests.sort(
          (a, b) => b.upvotes - a.upvotes
        );
      }
      if (payload.sortBy === "least-upvotes") {
        state.placeholderRequests = state.placeholderRequests.sort(
          (a, b) => a.upvotes - b.upvotes
        );
      }
      if (payload.sortBy === "most-comments") {
        state.placeholderRequests = state.placeholderRequests.sort((a, b) => {
          if (!a.comments) {
            return 1 - 0;
          }
          return b?.comments?.length - a.comments?.length;
        });
      }
      if (payload.sortBy === "least-comments") {
        state.placeholderRequests = state.placeholderRequests.sort((a, b) => {
          if (!a.comments) {
            return 0 - 1;
          }
          return a?.comments?.length - b.comments?.length;
        });
      }
    },
    getCurrentFeedbackDetail: (state, { payload }) => {
      if (state.placeholderRequests.find((feed) => feed.id === +payload)){
        state.currentFeedback = state.placeholderRequests.find(
          (feed) => feed.id === +payload
          );
        }
    },
    createFeedback: (state, { payload }) => {
      state.placeholderRequests = [...state.placeholderRequests, payload];
    },
    deleteFeedback: (state, { payload }) => {
      state.placeholderRequests = state.placeholderRequests.filter(
        (item) => item.id !== +payload
      );
      state.currentFeedback = {};
    },
  },
});

export const {
  sortProductRequests,
  getCurrentFeedbackDetail,
  createFeedback,
  deleteFeedback,
} = productRequests.actions;

export default productRequests.reducer;
