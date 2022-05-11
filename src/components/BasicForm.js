import useInput from "./hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enterName,
    isValid: enterNameValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    nameInputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enterLastName,
    isValid: enterLastNameValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: LastNameChangeHandler,
    nameInputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enterEmail,
    isValid: enterEmailValid,
    hasError: EmailInputHasError,
    valueChangeHandler: EmailChangeHandler,
    nameInputBlurHandler: EmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@.com"));

  let formIsValid = false;
  if (enterNameValid && enterLastNameValid && enterEmailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enterName);
    console.log(enterLastName);
    console.log(enterEmail);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  const checkValid = nameInputHasError
    ? " form-control invalid"
    : "form-control";
  const checkLastNameValid = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailValidCheck = EmailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={checkValid}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enterName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Fill this input also</p>
          )}
        </div>
        <div className={checkLastNameValid}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enterLastName}
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Fill this input also</p>
          )}
        </div>
      </div>
      <div className={emailValidCheck}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enterEmail}
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
        />
        {EmailInputHasError && (
          <p className="error-text">Fill this input also</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
