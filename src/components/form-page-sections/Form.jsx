"use client";
import { useEffect, useState } from "react";
import {
  FeedbackTitleInput,
  FeedbackDropdownInput,
  FeedbackContentInput,
  SubmitFeedbackBtns,
  FormModal
} from "./form-components";
import { useSelector, useDispatch } from "react-redux";
import useValidation from "@/hooks/useValidation";
import { getCurrentFeedbackDetail, createFeedback } from "@/redux/features/prodReqsSlice";
import defaultFormInputs from "@/data/defaultFormInputs";

const Form = ({ type }) => {
  const dispatch = useDispatch()
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  const [isFeedbackSubmitted,setIsFeedbackSubmited] = useState(false)
  const [isModalActive,setIsModalActive] = useState(false)
  //
  const submitValues = (readyValues) => {
    // Create conditional for the edit
    dispatch(createFeedback(readyValues))
    setFormInputs({
      ...defaultFormInputs,
      id: +new Date()
    });
    setIsFeedbackSubmited(true)
  };
  const { validation, errorsList } = useValidation(submitValues);
  //
  const { currentCategoryData, currentStatusData, statusData, categoryData } =
    useSelector((store) => store.dropdownReducer);
  const { currentFeedback } = useSelector(
    (store) => store.productRequestsReducer
  );
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
    if (type[0] === "edit" || Object.entries(currentFeedback).length > 0){
      dispatch(getCurrentFeedbackDetail(type[1]))
      setFormInputs(currentFeedback)
    }
  }, [type])
  //
  return (
    <form className="w-full grid gap-6 mt-6">
      {isModalActive && (
        <FormModal type={type} modal={{ isModalActive, setIsModalActive }} />
      )}
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
      <SubmitFeedbackBtns
        checkValues={checkValues}
        type={type}
        isFeedbackSubmitted={isFeedbackSubmitted}
        setIsFeedbackSubmited={setIsFeedbackSubmited}
        modal={{ isModalActive, setIsModalActive }}
      />
    </form>
  );
};

export default Form;
