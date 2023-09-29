import { useState } from "react";


const FeedbackTitleInput = ({ formInfo, errorsList }) => {
  const {setFormInputs, formInputs} = formInfo
  const [isFocused, setIsFocused] = useState(false) // try to solve
  return (
    <div>
      <div>
        <label htmlFor="feedback-title">Feedback Title</label>
        <p className="text-gray font-medium mt-1">
          Add a short, descriptive headline
        </p>
      </div>
      <input
        type="text"
        id="feedback-title"
        name="feedback-title"
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        className={`w-full p-4 mt-4 rounded-md bg-offWhite outline-none border tab:text-[15px] ${
          errorsList?.title?.isError
            ? "border-red"
            : "border-offWhite hover:border-blue"
        }`}
        value={formInputs?.title}
        onChange={(e) =>
          setFormInputs((oldValues) => {
            return { ...oldValues, title: e.target.value };
          })
        }
      />
      {errorsList?.title?.isError && (
        <p className="text-red font-medium mt-1">{errorsList?.title?.msg}</p>
      )}
    </div>
  );
};

export default FeedbackTitleInput