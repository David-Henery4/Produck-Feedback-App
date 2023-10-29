"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FeedbackTitleInput,
  FeedbackDropdownInput,
  FeedbackContentInput,
  SubmitFeedbackBtns,
  FormModal,
} from "./form-components";
import { useSelector} from "react-redux";
import useValidation from "@/hooks/useValidation";
import defaultFormInputs from "@/data/defaultFormInputs";
import { updateDropdownData } from "@/redux/features/dropdownInputSlice";
import createFeedback from "@/lib/createFeedback";
import updateFeedback from "@/lib/updateFeedback";

const Form = ({ type, feedbackValuesForEdit }) => {
  const router = useRouter()
  const [formInputs, setFormInputs] = useState(
    type[0] === "create" ? defaultFormInputs : feedbackValuesForEdit
  );
  const [isFeedbackSubmitted, setIsFeedbackSubmited] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  //
  const resetFormToDefault = () => {
    setFormInputs({
      ...defaultFormInputs,
      id: +new Date(),
    });
    dispatch(
      updateDropdownData({
        inputName: "status-input",
        dataType: "planned",
      })
    );
    dispatch(
      updateDropdownData({
        inputName: "category-input",
        dataType: "feature",
      })
    );
  };
  //
  const resetFormToEditValues = () => {
    setFormInputs(feedbackValuesForEdit);
    dispatch(
      updateDropdownData({
        inputName: "status-input",
        dataType: feedbackValuesForEdit.status,
      })
    );
    dispatch(
      updateDropdownData({
        inputName: "category-input",
        dataType: feedbackValuesForEdit.category,
      })
    );
  };
  //
  const handleCreateFeedback = async (newData) => {
    await createFeedback(newData)
  }
  //
  const handleUpdateFeedback = async (feedbackId, updatedData) => {
    await updateFeedback(feedbackId, updatedData)
    // MAYBE check for success before refresh?
    router.refresh()
  }
  //
  const submitValues = (readyValues) => {
    // Create conditional for the edit
    if (type[0] === "edit") {
      handleUpdateFeedback(type[1], readyValues)
    }
    if (type[0] === "create") {
      handleCreateFeedback(readyValues)
      resetFormToDefault();
    }
    setIsFeedbackSubmited(true);
  };
  const { validation, errorsList } = useValidation(submitValues);
  //
  const { currentCategoryData, currentStatusData, statusData, categoryData } =
    useSelector((store) => store.dropdownReducer);
  //
  const checkValues = () => {
    validation(formInputs);
  };
  //
  // **~Updating the dropdown values~**
  useEffect(() => {
    setFormInputs((oldValues) => {
      return {
        ...oldValues,
        category: currentCategoryData?.dataType,
      };
    });
  }, [currentCategoryData]);
  //
  useEffect(() => {
    setFormInputs((oldValues) => {
      return {
        ...oldValues,
        status: currentStatusData?.dataType,
      };
    });
  }, [currentStatusData]);
  // **~End of updating the dropdown values~**
  //
  useEffect(() => {
    if (type[0] === "create") {
      resetFormToDefault();
    }
    if (type[0] === "edit") {
      resetFormToEditValues()
    }
  }, [type]);
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
        value={formInputs.category}
        inputTitle="Category"
        inputDescription="Choose a category for your feedback"
        inputName="category-input"
        inputOptions={categoryData}
      />
      {/* For edit only */}
      {type[0] === "edit" && (
        <FeedbackDropdownInput
          value={formInputs.status}
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
        resetFormToEditValues={resetFormToEditValues}
        resetFormToDefault={resetFormToDefault}
      />
    </form>
  );
};

export default Form;

/////////*****OLD COMPONENT IMPORTS*********//////////

// "use client";
// import { useEffect, useState } from "react";
// import {
//   FeedbackTitleInput,
//   FeedbackDropdownInput,
//   FeedbackContentInput,
//   SubmitFeedbackBtns,
//   FormModal,
// } from "./form-components";
// import { useSelector, useDispatch } from "react-redux";
// import useValidation from "@/hooks/useValidation";
// import {
//   createFeedback,
//   updateFeedback
// } from "@/redux/features/prodReqsSlice";
// import defaultFormInputs from "@/data/defaultFormInputs";
// import { updateDropdownData } from "@/redux/features/dropdownInputSlice"; 

/////////***********OLD*COMPONENT*LOGIC***************////////////

  // const dispatch = useDispatch();
  // const [formInputs, setFormInputs] = useState(defaultFormInputs);
  // const [isFeedbackSubmitted, setIsFeedbackSubmited] = useState(false);
  // const [isModalActive, setIsModalActive] = useState(false);
  // //
  // const resetFormToDefault = () => {
  //   setFormInputs({
  //     ...defaultFormInputs,
  //     id: +new Date(),
  //   });
  //   dispatch(
  //     updateDropdownData({
  //       inputName: "status-input",
  //       dataType: "planned",
  //     })
  //   );
  //   dispatch(
  //     updateDropdownData({
  //       inputName: "category-input",
  //       dataType: "feature",
  //     })
  //   );
  // };
  // //
  // const resetFormToEditValues = () => {
  //   setFormInputs(currentFeedback);
  //   dispatch(
  //     updateDropdownData({
  //       inputName: "status-input",
  //       dataType: currentFeedback.status,
  //     })
  //   );
  //   dispatch(
  //     updateDropdownData({
  //       inputName: "category-input",
  //       dataType: currentFeedback.category,
  //     })
  //   );
  // };
  // //
  // const submitValues = (readyValues) => {
  //   // Create conditional for the edit
  //   if (type[0] === "edit") {
  //     dispatch(updateFeedback({ data: readyValues, id: type[1] }));
  //   }
  //   if (type[0] === "create") {
  //     dispatch(createFeedback(readyValues));
  //     resetFormToDefault();
  //   }
  //   // dispatch(createFeedback(readyValues));
  //   setIsFeedbackSubmited(true);
  // };
  // const { validation, errorsList } = useValidation(submitValues);
  // //
  // const { currentCategoryData, currentStatusData, statusData, categoryData } =
  //   useSelector((store) => store.dropdownReducer);
  // const { currentFeedback } = useSelector(
  //   (store) => store.productRequestsReducer
  // );
  // //
  // const checkValues = () => {
  //   validation(formInputs);
  // };
  // //
  // // **~Updating the dropdown values~**
  // useEffect(() => {
  //   setFormInputs((oldValues) => {
  //     return {
  //       ...oldValues,
  //       category: currentCategoryData?.dataType,
  //     };
  //   });
  // }, [currentCategoryData]);
  // //
  // useEffect(() => {
  //   setFormInputs((oldValues) => {
  //     return {
  //       ...oldValues,
  //       status: currentStatusData?.dataType,
  //     };
  //   });
  // }, [currentStatusData]);
  // // **~End of updating the dropdown values~**
  // //
  // useEffect(() => {
  //   if (type[0] === "create") {
  //     resetFormToDefault();
  //   }
  //   if (type[0] === "edit") {
  //     dispatch(getCurrentFeedbackDetail(type[1]));
  //   }
  //   if (Object.entries(currentFeedback).length > 0 && type[0] !== "create") {
  //     resetFormToEditValues();
  //   }
  // }, [type, currentFeedback]);
  // //