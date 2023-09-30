"use client"
import { useSelector } from "react-redux";

const FormTitle = ({ type }) => {
  const { currentFeedback } = useSelector(
    (store) => store.productRequestsReducer
  );
  return (
    <h1 className="text-lg tab:text-2xl">
      {type[0] === "edit"
        ? `Editing ‘${currentFeedback?.title || ""}’`
        : "Create New Feedback"}
    </h1>
  );
};

export default FormTitle