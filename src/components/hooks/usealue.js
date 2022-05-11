import { useState } from "react";

const usealue = (validateValue) => {
  const [enterValue, setEnterValue] = useState("");
  const [enterTouch, setEnterTouch] = useState(false);

  const valueIsValid = validateValue(enterValue);
  const hasError = !valueIsValid && enterTouch;

  const inputChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };
  const blurChangeHandler = (event) => {
    setEnterTouch(true);
  };

  const resetHandler = () => {
    setEnterValue("");
    setEnterTouch(true);
  };

  return {
    value: enterValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    blurChangeHandler,
    resetHandler,
  };
};

export default usealue;
