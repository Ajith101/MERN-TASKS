import React, { useState } from "react";
import bgTwo from "../assets/user.png";
import { FormValidation } from "./FormValidation";

const FormOneNew = () => {
  const [formValue, setFormvalue] = useState({
    firstName: "",
    email: "",
    gender: "",
    dob: "",
    languages: [],
    country: "",
  });
  const [submitButton, setSubmitButton] = useState(false);
  const [errorValues, setErrorValues] = useState({
    firstName: "",
    email: "",
    gender: "",
    // gender: false,
    dob: "",
    // languages: [],
    languages: { html: false, css: false, javaScript: false },
    languageError: "",
    country: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    let errors = { ...errorValues };
    if (formValue.firstName === "") {
      errors.firstName = "Enter name";
    } else if (formValue.firstName.length < 4) {
      errorValues.firstName = "Add morethan 3 charactor";
    }
    if (formValue.gender === "") {
      errors.gender = "Select one";
    } else {
      errors.gender = "";
    }
    if (!formValue.email) {
      errors.email = "Enter Mail";
    } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
      errors.email = "Enter Valid Mail";
    }
    if (formValue.dob === "") {
      errors.dob = "DOB required";
    }

    const languageIsexists = Object.values(errorValues.languages).some(
      (item) => item === true
    );
    if (languageIsexists === false) {
      {
        errors.languageError = "Select";
      }
    } else {
      errors.languageError = "";
    }
    if (formValue.country === "") {
      errors.country = "select";
    } else {
      errors.country = "";
    }
    setErrorValues(errors);

    const itemExist = Object.values(formValue).some((item) => item === "");
    const itemExistError = Object.values(errorValues).some(
      (item) => item === ""
    );
    console.log();

    if (itemExist === true) {
      window.alert("Please Fill The Form");
    } else if (formValue.firstName.length > 3) {
      window.alert("Submitted");
    }
  };

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    FormValidation({
      event: event,
      errorValues: errorValues,
      setErrorValues: setErrorValues,
    });

    setFormvalue({ ...formValue, [name]: value });
  };

  const languageIsexist = Object.values(errorValues.languages).some(
    (item) => item === true
  );
  // console.log(languageIsexist);
  const checkBoxHandler = (event) => {
    const { value, checked, name } = event.target;
    if (checked) {
      setFormvalue({
        ...formValue,
        languages: [...formValue.languages, value],
      });
    } else {
      setFormvalue({
        ...formValue,
        languages: [...formValue.languages.filter((item) => item !== value)],
      });
    }
    FormValidation({
      event: event,
      errorValues: errorValues,
      setErrorValues: setErrorValues,
    });
  };

  return (
    <>
      <div className="container">
        <div className="first-section">
          <div className="nav-bar">MERN Task 4.1 & 4.2</div>
          <div className="top-content">
            <a className="show-titles" href="/show-titl">
              Show Title
            </a>
            <img src={bgTwo} alt="" />
          </div>
        </div>
        <div className="second-section">
          <div className="box">
            <form onSubmit={submitHandler}>
              {submitButton && <p>Submitted</p>}
              <div className="title">
                <h1>Form 1</h1>
              </div>
              <div className="input-forms">
                <input
                  placeholder="Name"
                  type="text"
                  onChange={onchangeHandler}
                  name="firstName"
                />
                {errorValues.firstName && <h3>{errorValues.firstName}</h3>}
              </div>
              <div className="input-forms">
                <input
                  placeholder="Email"
                  type="email"
                  onChange={onchangeHandler}
                  name="email"
                />
                {errorValues.email && <h3>{errorValues.email}</h3>}
              </div>
              <div className="radio-forms">
                <div className="radio">
                  <h2>Gender :</h2>
                  <input
                    type="radio"
                    onChange={onchangeHandler}
                    name="gender"
                    value="male"
                    id="male"
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    onChange={onchangeHandler}
                    name="gender"
                    value="female"
                    id="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                {errorValues.gender && <h3>Select One</h3>}
              </div>
              <div className="date-forms">
                <div className="date">
                  {" "}
                  <h2>DOB :</h2>
                  <input type="date" onChange={onchangeHandler} name="dob" />
                </div>
                {errorValues.dob && <h3>{errorValues.dob}</h3>}
              </div>
              <div className="languages-form">
                <div className="languages">
                  <h2>Langauges :</h2>
                  <input
                    type="checkbox"
                    name="languages"
                    value="html"
                    id="html"
                    onChange={checkBoxHandler}
                  />
                  <label htmlFor="html">Html</label>
                  <input
                    type="checkbox"
                    name="languages"
                    value="css"
                    id="css"
                    onChange={checkBoxHandler}
                  />
                  <label htmlFor="css">Css</label>
                  <input
                    type="checkbox"
                    name="languages"
                    value="javaScript"
                    id="javaScript"
                    onChange={checkBoxHandler}
                  />
                  <label htmlFor="javaScript">JavaScript</label>
                </div>
                {errorValues.languageError && (
                  <h3>{errorValues.languageError}</h3>
                )}
              </div>
              <div className="country-form">
                <div className="country">
                  <h2>Country :</h2>
                  <select
                    name="country"
                    id="country"
                    onChange={onchangeHandler}
                  >
                    <option value="">Select</option>
                    <option value="india">India</option>
                    <option value="uae">Uae</option>
                    <option value="qatar">Qatar</option>
                  </select>
                </div>
                {errorValues.country && <h3>{errorValues.country}</h3>}
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOneNew;
