const SubmitFeedbackBtns = ({ checkValues }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-4 lgTab:flex-row-reverse lgTab:justify-start lgTab:gap-4">
      <button
        onClick={(e) => {
          e.preventDefault();
          checkValues()
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
    </div>
  );
};

export default SubmitFeedbackBtns;
