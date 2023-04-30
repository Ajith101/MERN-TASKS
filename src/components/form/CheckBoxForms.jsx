import React from "react";

const CheckBoxForms = ({ checkBoxHandler, handleBlur, errorValues }) => {
  return (
    <div className="radio-section">
      <h2>
        Languages <span>*</span>
      </h2>
      <div className="radio-lists">
        <input
          type="checkbox"
          value="html"
          name="languages"
          id="html"
          onChange={checkBoxHandler}
          onBlur={handleBlur}
        />
        <label htmlFor="html">Html</label>
        <input
          type="checkbox"
          value="css"
          name="languages"
          id="css"
          onChange={checkBoxHandler}
          onBlur={handleBlur}
        />
        <label htmlFor="css">Css</label>
        <input
          type="checkbox"
          value="javaScript"
          name="languages"
          id="javaScript"
          onChange={checkBoxHandler}
          onBlur={handleBlur}
        />
        <label htmlFor="javaScript">JavaScript</label>
      </div>
      {errorValues.languages && <h3>Languages required</h3>}
    </div>
  );
};

export default CheckBoxForms;
