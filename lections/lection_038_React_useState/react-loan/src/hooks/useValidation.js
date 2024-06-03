import { useState } from "react";

const initialUseValidation = (validators, inital) => () => {
  const [error, setError] = useState(inital);

  const validate = (name, value) => {
    const validator = validators[name];

    if (typeof validator === "function") {
      const valid = validator(value);

      setError((prev) => ({
        ...prev,
        [name]: {
          valid,
          invalid: !valid,
          touched: true,
        },
      }));
    }
  };

  const onValidate = (event) => {
    validate(event.target.name, event.target.value);
  };

  return {
    error,
    onValidate,
  };
};

export default initialUseValidation;
