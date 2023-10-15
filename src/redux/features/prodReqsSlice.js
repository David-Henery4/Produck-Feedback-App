import { createSlice } from "@reduxjs/toolkit";
import placeholderData from "@/data/data.json";
import addReply from "./helpers/addReply";

const initialState = {
  placeholderRequests: placeholderData.productRequests,
  currentlyDisplayed: placeholderData.productRequests,
  currentFeedback: {},
  roadmapColumns: [
    {
      id: 1,
      label: "planned",
      columnData: [],
      color: "border-t-orange",
      description: "Ideas prioritized for research",
    },
    {
      id: 2,
      label: "in-progress",
      columnData: [],
      color: "border-t-purple",
      description: "Currently being developed",
    },
    {
      id: 3,
      label: "live",
      columnData: [],
      color: "border-t-lightBlue",
      description: "Released features",
    },
  ],
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
      state.currentlyDisplayed = state.placeholderRequests;
    },
    deleteFeedback: (state, { payload }) => {
      state.placeholderRequests = state.placeholderRequests.filter(
        (item) => item.id !== +payload
      );
      state.currentFeedback = {};
      state.currentlyDisplayed = state.placeholderRequests;
    },
    updateFeedback: (state, { payload: { id, data } }) => {
      state.placeholderRequests = state.placeholderRequests.map((item) => {
        if (item.id === +id) {
          item = data;
        }
        return item;
      });
      state.currentFeedback = data;
      state.currentlyDisplayed = state.placeholderRequests;
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
    setInitialRoadmapColumns: (state, { payload }) => {
      state.roadmapColumns = state.roadmapColumns.map((col) => {
        col.columnData = state.placeholderRequests.filter(
          (feed) => feed.status === col.label
        );
        return col;
      });
    },
    addComment: (state, { payload: { id, commentData } }) => {
      state.placeholderRequests = state.placeholderRequests.map((item) => {
        if (item.id === id) {
          item?.comments
            ? (item.comments = [...item.comments, commentData])
            : (item.comments = [commentData]);
        }
        return item;
      });
      //
      state.currentFeedback = state.placeholderRequests.find(
        (item) => item.id === id
      );
      state.currentlyDisplayed = state.placeholderRequests;
    },
    addCommentReply: (
      state,
      { payload: { replyData, commentId, ogCommentId } }
    ) => {
      if (!ogCommentId) {
        state.currentFeedback.comments = addReply(
          commentId,
          state.currentFeedback,
          replyData
        );
      }
      if (ogCommentId) {
        state.currentFeedback.comments = addReply(
          ogCommentId,
          state.currentFeedback,
          replyData
        );
      }
      state.placeholderRequests = state.placeholderRequests.map((item) => {
        if (item.id === state.currentFeedback.id) {
          item = state.currentFeedback;
        }
        return item;
      });
      state.currentlyDisplayed = state.placeholderRequests;
    },
    addAndRemoveUpvote: (state, {payload}) => {
      console.log(payload)
    }
  },
});

export const {
  sortProductRequests,
  getCurrentFeedbackDetail,
  createFeedback,
  deleteFeedback,
  updateFeedback,
  filterFeedbackList,
  setInitialRoadmapColumns,
  //
  addComment,
  addCommentReply,
  //
  addAndRemoveUpvote,
} = productRequests.actions;

export default productRequests.reducer;
