

const feedbackContentInput = ({ formInfo, errorsList }) => {
  const { setFormInputs, formInputs } = formInfo;
  return (
    <div>
      <div>
        <label htmlFor="feedback-content">Feedback Detail</label>
        <p className="text-gray font-medium mt-1">
          Include any specific comments on what should be improved, added, etc.
        </p>
      </div>

      <textarea
        className={`resize-none w-full p-4 mt-4 rounded-md outline-none bg-offWhite border min-h-[120px] tab:text-[15px] ${
          errorsList?.description?.isError
            ? "border-red"
            : "border-offWhite hover:border-blue"
        }`}
        name="feedback-content"
        id="feedback-content"
        value={formInputs?.description}
        onChange={(e) =>
          setFormInputs((oldValues) => {
            return { ...oldValues, description: e.target.value };
          })
        }
      ></textarea>
      {errorsList?.description?.isError && (
        <p className="text-red font-medium mt-1">{errorsList?.description?.msg}</p>
      )}
    </div>
  );
};

export default feedbackContentInput