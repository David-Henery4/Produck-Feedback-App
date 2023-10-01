import { useEffect } from "react";

const SubmitFeedbackBtns = ({
  checkValues,
  type,
  isFeedbackSubmitted,
  setIsFeedbackSubmited,
  modal: {isModalActive, setIsModalActive}
}) => {
  //
  useEffect(() => {
    if (isFeedbackSubmitted){
      const timerForNotification = setTimeout(() => {
        setIsFeedbackSubmited(false)
      }, 5000)
      return () => clearTimeout(timerForNotification)
    }
  }, [isFeedbackSubmitted])
  //
  return (
    <>
      {isFeedbackSubmitted && (
        <p className="text-center font-medium text-green">
          Your feedback has been submitted
        </p>
      )}
      <div className="w-full flex flex-col justify-center items-center mt-4 lgTab:flex-row-reverse lgTab:justify-start lgTab:gap-4">
        <button
          onClick={(e) => {
            // Create conditional for the edit
            e.preventDefault();
            checkValues();
          }}
          className="w-full py-3 px-7 rounded-xl bg-purple hover:bg-pink active:bg-purple text-white lgTab:w-36 lgTab:px-6"
        >
          Add Feedback
        </button>
        <button
          onClick={(e) => e.preventDefault()}
          className="w-full py-3 px-7 mt-4 rounded-xl bg-lightNavy text-white hover:bg-lighterNavy active:bg-lightNavy lgTab:w-24 lgTab:px-6 lgTab:mt-0"
        >
          Cancel
        </button>
        {type[0] === "edit" && (
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsModalActive(true)
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
