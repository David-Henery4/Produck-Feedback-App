import { useState } from "react";
import { FormDropdown } from ".";
import { ArrowDownIcon } from "public/assets/shared";

const FeedbackDropdownInput = ({
  inputTitle,
  inputDescription,
  value,
  inputName,
  inputOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //
  return (
    <div>
      <div>
        <label htmlFor={inputName}>{inputTitle}</label>
        <p className="text-gray dark:text-offWhite font-medium mt-1">{inputDescription}</p>
      </div>

      <div
        className="relative mt-4 w-full rounded-[10px] bg-offWhite dark:bg-navy"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <input
          type="text"
          id={inputName}
          name={inputName}
          className="w-full h-full p-4 rounded-md font-medium capitalize hover:cursor-pointer bg-offWhite dark:bg-navy outline-blue dark:outline-pink tab:text-[15px]"
          readOnly
          value={value}
        />
        <ArrowDownIcon className="stroke-blue dark:stroke-pink absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none" />
        <FormDropdown
          inputName={inputName}
          isDropdownOpen={isDropdownOpen}
          inputOptions={inputOptions}
        />
      </div>
    </div>
  );
};

export default FeedbackDropdownInput;
