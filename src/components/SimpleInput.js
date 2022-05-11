import useInput from "./hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: enterName,
    isValid: enterNameValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    nameInputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterEmail,
    isValid: enterEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    nameInputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") !== "");

  let formIsValid = false;

  if (enterNameValid && enterEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enterEmailIsValid) {
      return;
    }
    console.log(enterName);
    console.log(enterEmail);
    resetNameInput();
    resetEmailInput();
  };

  const checkValid = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailCheck = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={checkValid}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enterName}
        />

        {nameInputHasError && (
          <p className="error-text">You have to fill the input</p>
        )}
      </div>

      <div className={emailCheck}>
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enterEmail}
        />

        {emailHasError && (
          <p className="error-text">You have to fill the input</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
