"use client";
import { useEffect, useState } from "react";
import {
  FeedbackTitleInput,
  FeedbackDropdownInput,
  FeedbackContentInput,
  SubmitFeedbackBtns,
} from "./form-components";
import { useSelector, useDispatch } from "react-redux";
import useValidation from "@/hooks/useValidation";
import { getCurrentFeedbackDetail, createFeedback } from "@/redux/features/prodReqsSlice";

const Form = ({ type }) => {
  const dispatch = useDispatch()
  const submitValues = (readyValues) => {
    // console.log(readyValues);
    dispatch(createFeedback(readyValues))
  };
  const { validation, errorsList } = useValidation(submitValues);
  const { currentCategoryData, currentStatusData, statusData, categoryData } =
    useSelector((store) => store.dropdownReducer);
  const { currentFeedback } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  const [formInputs, setFormInputs] = useState({
    id: +new Date(),
    title: "",
    category: currentCategoryData?.dataType,
    upvotes: 0,
    status: currentStatusData?.dataType,
    description: "",
    comments: []
  });
  //
  const checkValues = () => {
    validation(formInputs);
  };
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
  useEffect(() => {
    if (type[0] === "edit"){
      dispatch(getCurrentFeedbackDetail(type[1]))
      setFormInputs(currentFeedback) // data needs to be gotten with the id (type[0])
    }
  }, [type, currentFeedback])
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
      {type[0] === "edit" && (
        <FeedbackDropdownInput
          value={currentStatusData?.dataType}
          inputTitle="Update Status"
          inputDescription="Change feature state"
          inputName="status-input"
          inputOptions={statusData}
        />
      )}
      <FeedbackContentInput
        formInfo={{ setFormInputs, formInputs }}
        errorsList={errorsList}
      />
      <SubmitFeedbackBtns checkValues={checkValues} type={type}/>
    </form>
  );
};

export default Form;
