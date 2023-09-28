import { useEffect, useState } from "react";


const useValidation = (callbackSubmit) => {
  const [errorsList, setErrorsList] = useState({})
  const [checkedValuesList, setCheckedValuesList] = useState({})
  const [numberOfValues, setNumberOfValues ]= useState()


  const checkIfValueEmpty = (inputName, rawValue) => {
    console.log(inputName, rawValue);
    if (rawValue === "") {
      
    } else {
      
    }
  };
  
  const validation = (rawValues) => {
    Object.entries(rawValues).forEach((v) => {
      if (v[0] === "title" || v[0] === "comment"){
        checkIfValueEmpty(v[0], v[1])
      } else{
        setCheckedValuesList((oldValues) => {
          return {
            ...oldValues,
            [v[0]]: v[1]
          }
        })
      }
    })
  }
  
  return {validation};
};

export default useValidation;
