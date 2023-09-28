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
        <p className="text-gray font-medium mt-1">{inputDescription}</p>
      </div>

      <div
        className="relative mt-4 w-full bg-offWhite"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <input
          type="text"
          id={inputName}
          name={inputName}
          className="w-full h-full p-4 rounded-md font-medium capitalize hover:cursor-pointer bg-offWhite outline-blue tab:text-[15px]"
          readOnly
          value={value}
        />
        <ArrowDownIcon className="stroke-blue absolute top-1/2 -translate-y-1/2 right-4" />
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
