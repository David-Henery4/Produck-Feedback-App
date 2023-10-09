import { createSlice } from "@reduxjs/toolkit";
import placeholderData from "@/data/data.json";

const initialState = {
  placeholderRequests: placeholderData.productRequests,
  currentlyDisplayed: placeholderData.productRequests,
  currentFeedback: {},
};

const productRequests = createSlice({
  name: "productRequests",
  initialState: initialState,
  reducers: {
    sortProductRequests: (state, { payload }) => {
      if (payload.sortBy === "most-upvotes") {
        state.currentlyDisplayed = state.currentlyDisplayed.sort(
          (a, b) => b.upvotes - a.upvotes
        );
      }
      if (payload.sortBy === "least-upvotes") {
        state.currentlyDisplayed = state.currentlyDisplayed.sort(
          (a, b) => a.upvotes - b.upvotes
        );
      }
      if (payload.sortBy === "most-comments") {
        state.currentlyDisplayed = state.currentlyDisplayed.sort((a, b) => {
          const commentsA = a.comments ? a.comments.length : 0;
          const commentsB = b.comments ? b.comments.length : 0;
          return commentsB - commentsA;
        });
      }
      if (payload.sortBy === "least-comments") {
        state.currentlyDisplayed = state.currentlyDisplayed.sort((a, b) => {
          const commentsA = a.comments ? a.comments.length : 0;
          const commentsB = b.comments ? b.comments.length : 0;
          return commentsA - commentsB;
        });
      }
    },
    getCurrentFeedbackDetail: (state, { payload }) => {
      if (state.placeholderRequests.find((feed) => feed.id === +payload)) {
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
    updateFeedback: (state, { payload: { id, data } }) => {
      state.placeholderRequests = state.placeholderRequests.map((item) => {
        if (item.id === +id) {
          item = data;
        }
        return item;
      });
      state.currentFeedback = data;
    },
    filterFeedbackList: (state, { payload }) => {
      if (payload !== "all") {
        state.currentlyDisplayed = state.placeholderRequests.filter(
          (feed) => feed.category === payload
        );
      }
      if (payload === "all") {
        state.currentlyDisplayed = state.placeholderRequests;
      }
    },
  },
});

export const {
  sortProductRequests,
  getCurrentFeedbackDetail,
  createFeedback,
  deleteFeedback,
  updateFeedback,
  filterFeedbackList,
} = productRequests.actions;

export default productRequests.reducer;
