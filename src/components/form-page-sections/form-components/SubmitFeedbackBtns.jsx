import { useEffect } from "react";

const SubmitFeedbackBtns = ({
  checkValues,
  type,
  isFeedbackSubmitted,
  setIsFeedbackSubmited,
  modal: { isModalActive, setIsModalActive },
  resetFormToEditValues,
  resetFormToDefault,
}) => {
  //
  useEffect(() => {
    if (isFeedbackSubmitted) {
      const timerForNotification = setTimeout(() => {
        setIsFeedbackSubmited(false);
      }, 5000);
      return () => clearTimeout(timerForNotification);
    }
  }, [isFeedbackSubmitted]);
  //
  return (
    <>
      {isFeedbackSubmitted && (
        <p className="text-center font-medium text-green">
          {type[0] === "edit"
            ? "Changes saved successfully"
            : "Your feedback has been submitted"}
        </p>
      )}
      <div className="w-full flex flex-col justify-center items-center mt-4 lgTab:flex-row-reverse lgTab:justify-start lgTab:gap-4">
        <button
          onClick={(e) => {
            // Create conditional for the edit (after validation)
            e.preventDefault();
            checkValues();
          }}
          className="w-full py-3 px-7 rounded-xl bg-purple dark:bg-blue hover:bg-pink dark:hover:bg-blueShade active:bg-purple dark:active:bg-blue text-white lgTab:w-36 lgTab:px-6"
        >
          {type[0] === "edit" ? "Save Changes" : "Add Feedback"}
        </button>
        <button
          onClick={(e) => {
            // ADD conditional for create/edit
            e.preventDefault();
            if (type[0] === "edit") {
              resetFormToEditValues();
              return;
            }
            resetFormToDefault();
          }}
          className="w-full py-3 px-7 mt-4 rounded-xl bg-lightNavy dark:bg-gray text-white hover:bg-lighterNavy dark:hover:bg-lightGray active:bg-lightNavy dark:active:bg-gray lgTab:w-24 lgTab:px-6 lgTab:mt-0"
        >
          Cancel
        </button>
        {type[0] === "edit" && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsModalActive(true);
            }}
            className="w-full py-3 px-7 mt-4 rounded-xl bg-red hover:bg-lightRed active:bg-red text-white lgTab:w-24 lgTab:px-6 lgTab:mt-0 lgTab:mr-auto"
          >
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default SubmitFeedbackBtns;
