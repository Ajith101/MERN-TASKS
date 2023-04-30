import React from "react";

const SelectForms = ({ handleChange, handleBlur, errorValues }) => {
  return (
    <div className="input-section">
      <h2>
        Country <span>*</span>
      </h2>
      <select name="country" id="" onChange={handleChange} onBlur={handleBlur}>
        <option value="">Select</option>
        <option value="india">India</option>
        <option value="uae">Uae</option>
        <option value="qatar">Qatar</option>
      </select>
      {errorValues && <h3>Country is required</h3>}
    </div>
  );
};

export default SelectForms;
