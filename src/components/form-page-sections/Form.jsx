"use client";
import { FeedbackTitleInput, FeedbackDropdownInput } from "./form-components";
import { useSelector } from "react-redux";

const Form = () => {
  const { currentCategoryData, currentStatusData, statusData, categoryData } =
    useSelector((store) => store.dropdownReducer);
  //
  return (
    <form className="w-full grid gap-6 mt-6">
      <FeedbackTitleInput />
      <FeedbackDropdownInput
        value={currentCategoryData?.dataType}
        inputTitle="Category"
        inputDescription="Choose a category for your feedback"
        inputName="category-input"
        inputOptions={categoryData}
      />
      {/* For edit only */}
      <FeedbackDropdownInput
        value={currentStatusData?.dataType}
        inputTitle="Update Status"
        inputDescription="Change feature state"
        inputName="status-input"
        inputOptions={statusData}
      />
    </form>
  );
};

export default Form;
