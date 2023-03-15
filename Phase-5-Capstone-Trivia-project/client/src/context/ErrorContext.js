import { createContext, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const ErrorContext = createContext();

export function ErrorContextProvider({ children }) {
  const [errors, setErrors] = useState({});
  const errorRef = useRef(null);
  errorRef.current = errors;

  function removeError(id) {
    const { [id]: remove, ...fileredErrors } = errors;
    setErrors(fileredErrors);
  }

  function addError() {
    const id = uuidv4();
    const newError = {
      id,
      message: "New Error!",
      status: "Error"
    };

    setTimeout(() => {
      removeError(id);
    }, 5000);

    setErrors({ ...errors, [id]: newError });
  }

  return (
    <ErrorContext.Provider
      value={{
        errors,
        addError,
        removeError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
}

