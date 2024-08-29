import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function InputNumber(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;

  const formatValue = (val) => {
    const formatted = `${prefix}${val}${suffix}${isSuffixPlural && val > 1 ? "s" : ""}`;
    return formatted;
  };

  const [inputValue, setInputValue] = useState(formatValue(value || min));

  useEffect(() => {
    setInputValue(formatValue(value || min));
  }, [value, min, prefix, suffix, isSuffixPlural]);

  const onChange = (e) => {
    let newValue = e.target.value.replace(prefix, "").replace(suffix, "").replace("s", "");
    const isNumeric = /^\d+$/.test(newValue);

    if (isNumeric || newValue === "") {
      let numericValue = +newValue;
      if (numericValue > max) {
        numericValue = max;
      }
      if (numericValue < min) {
        numericValue = min;
      }
      props.onChange({
        target: {
          name: name,
          value: numericValue,
        },
      });
      setInputValue(formatValue(numericValue));
    } else {
      setInputValue(e.target.value); // Allow displaying the non-numeric value temporarily
    }
  };

  const handleMinusClick = () => {
    if (value > min) {
      const newValue = value - 1;
      props.onChange({
        target: {
          name: name,
          value: newValue,
        },
      });
      setInputValue(formatValue(newValue));
    }
  };

  const handlePlusClick = () => {
    if (value < max) {
      const newValue = value + 1;
      props.onChange({
        target: {
          name: name,
          value: newValue,
        },
      });
      setInputValue(formatValue(newValue));
    }
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={handleMinusClick}>-</span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={inputValue}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={handlePlusClick}>+</span>
        </div>
      </div>
    </div>
  );
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  name: propTypes.string,
  isSuffixPlural: propTypes.bool,
};
