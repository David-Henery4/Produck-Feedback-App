import { useEffect, useState } from "react";

const useValidation = (callbackSubmit) => {
  const [errorsList, setErrorsList] = useState({});
  const [checkedValuesList, setCheckedValuesList] = useState({});
  const [numberOfValues, setNumberOfValues] = useState(0);

  const checkIfValueEmpty = (inputName, rawValue) => {
    const trimmedValue = rawValue.trim()
    if (rawValue === "") {
      setErrorsList((oldValues) => {
        return {
          ...oldValues,
          [inputName]: { isError: true, msg: "Can't be empty" },
        };
      });
      delete checkedValuesList[inputName]
    } else {
      setCheckedValuesList((oldValues) => {
        return {
          ...oldValues,
          [inputName]: trimmedValue,
        };
      });
      delete errorsList[inputName]
    }
  };

  const validation = (rawValues) => {
    setNumberOfValues(Object.entries(rawValues).length);
    Object.entries(rawValues).forEach((v) => {
      if (v[0] === "title" || v[0] === "comment") {
        checkIfValueEmpty(v[0], v[1]);
      } else {
        setCheckedValuesList((oldValues) => {
          return {
            ...oldValues,
            [v[0]]: v[1],
          };
        });
      }
    });
  };

  const completeValidationAndSubmit = () => {
    if (Object.entries(errorsList).length >= 1) return
    //
    if (numberOfValues > 0 && Object.entries(errorsList).length === 0){
      callbackSubmit(checkedValuesList)
    }
  }

  useEffect(() => {
    completeValidationAndSubmit()
  }, [checkedValuesList, errorsList])

  return { validation, errorsList };
};

export default useValidation;
