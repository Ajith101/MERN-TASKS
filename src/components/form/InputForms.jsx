import React from "react";

const InputForms = ({ handleBlur, handleChange, errorValues, values }) => {
  const { name, type } = values;

  return (
    <>
      <div className="input-section">
        <h2>
          First Name <span>*</span>
        </h2>
        <input
          type={type}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errorValues && <h3>{name} Rquired</h3>}
      </div>
    </>
  );
};

export default InputForms;
