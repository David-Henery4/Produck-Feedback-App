"use client";
import { useEffect, useState } from "react";
import { FeedbackTitleInput, FeedbackDropdownInput, FeedbackContentInput, SubmitFeedbackBtns } from "./form-components";
import { useSelector } from "react-redux";
import useValidation from "@/hooks/useValidation";

const Form = () => {
  const submitValues = (readyValues) => {
    console.log(readyValues)
  }
  const { validation, errorsList } = useValidation(submitValues);
  const { currentCategoryData, currentStatusData, statusData, categoryData } =
    useSelector((store) => store.dropdownReducer);
  //
  const [formInputs, setFormInputs] = useState({
    id: 1,
    title: "",
    category: currentCategoryData?.dataType,
    status: currentStatusData?.dataType,
    comment: "",
  });
  //
  const checkValues = () => {
    validation(formInputs)
  }
  //
  useEffect(() => {
    setFormInputs((oldValues) => {
      return {
        ...oldValues,
        category: currentCategoryData?.dataType,
        status: currentStatusData?.dataType,
      };
    });
  }, [currentCategoryData, currentStatusData]);
  //
  return (
    <form className="w-full grid gap-6 mt-6">
      <FeedbackTitleInput
        formInfo={{ setFormInputs, formInputs }}
        errorsList={errorsList}
      />
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
      <FeedbackContentInput
        formInfo={{ setFormInputs, formInputs }}
        errorsList={errorsList}
      />
      <SubmitFeedbackBtns checkValues={checkValues} />
    </form>
  );
};

export default Form;
