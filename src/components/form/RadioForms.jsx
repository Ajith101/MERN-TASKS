import React from "react";

const RadioForms = ({ handleChange, handleBlur, errorValues }) => {
  return (
    <div className="radio-section">
      <h2>
        Gender <span>*</span>
      </h2>
      <div className="radio-lists">
        <input
          type="radio"
          value="male"
          name="gender"
          id="male"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          value="female"
          name="gender"
          id="female"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="female">Female</label>
      </div>
      {errorValues && <h3>Gender required</h3>}
    </div>
  );
};

export default RadioForms;
