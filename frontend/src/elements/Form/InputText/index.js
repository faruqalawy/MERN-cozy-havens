import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function InputText(props) {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
    errorResponse,
    onChange,
  } = props;

  const [HasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (type === "tel") pattern = "[0-9]*";

  const handleOnChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) onChange(target);
    } else {
      onChange(target);
    }
  };

  return (
    <div className={["input-text-mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={type === "tel" ? pattern : undefined}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            {HasError && <span className="error-helper">{HasError}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
