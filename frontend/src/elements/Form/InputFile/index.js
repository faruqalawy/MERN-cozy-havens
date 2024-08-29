import React, { useRef } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function InputFile(props) {
  const {
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  const handleInputChange = (event) => {
    // Mengambil nama file dari input file
    const fileName = event.target.files[0]?.name || "";

    // Menjalankan fungsi onChange dengan menyertakan event dan nama file
    props.onChange({
      target: {
        name,
        value: fileName,
      },
    });
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          onChange={handleInputChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          className={["form-control", inputClassName].join(" ")}
          placeholder={placeholder}
          readOnly
          value={props.value}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  placeholder: "Browse a file...",
};

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  value: propTypes.string, // Menambahkan properti value
};
