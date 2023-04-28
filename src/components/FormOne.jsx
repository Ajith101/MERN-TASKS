import React, { useState } from "react";
import bgTwo from "../assets/user.png";
import { FormValidation } from "./FormValidation";

const FormOne = () => {
  const [formValue, setFormvalue] = useState({
    firstName: "",
    email: "",
    gender: "",
    dob: "",
    languages: [],
    country: "",
  });
  const [errorValues, setErrorValues] = useState({
    firstName: "",
    email: "",
    gender: false,
    dob: "",
    // languages: [],
    languages: { html: false, css: false, javaScript: false },
    languageError: false,
    country: false,
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
      errors.gender = true;
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
        errors.languageError = true;
      }
    } else {
      errors.languageError = false;
    }
    if (formValue.country === "") {
      errors.country = true;
    } else {
      errors.country = false;
    }
    setErrorValues(errors);
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
      <div className="main-body">
        {/* <h1 className="main-heading">Registration Page</h1> */}
        <div className="first-section">
          <img src={bgTwo} alt="" />
        </div>
        <div className="second-section">
          <h1 className="form-title">Form 1</h1>
          <form onSubmit={submitHandler} className="form-menu">
            <div className="input-itemes">
              <input
                placeholder="Name"
                type="text"
                onChange={onchangeHandler}
                name="firstName"
              />
              {errorValues.firstName && <h3>{errorValues.firstName}</h3>}
            </div>
            <div className="input-itemes">
              <input
                placeholder="Email"
                type="text"
                onChange={onchangeHandler}
                name="email"
              />
              {errorValues.email && <h3>{errorValues.email}</h3>}
            </div>
            <div className="radio">
              <div className="selector">
                <input
                  type="radio"
                  onChange={onchangeHandler}
                  name="gender"
                  value="male"
                />
                <label htmlFor="">Male</label>
                <input
                  type="radio"
                  onChange={onchangeHandler}
                  name="gender"
                  value="female"
                />
                <label htmlFor="">Female</label>
              </div>
              {errorValues.gender && <h3>Select One</h3>}
            </div>
            <div className="input-itemes">
              <input type="date" onChange={onchangeHandler} name="dob" />
              {errorValues.dob && <h3>{errorValues.dob}</h3>}
            </div>
            <div className="languages">
              <div className="languages-section">
                <div>
                  <span>Languages</span>
                </div>
                <div className="language-checkbox">
                  <div>
                    <input
                      type="checkbox"
                      name="languages"
                      value="html"
                      id=""
                      onChange={checkBoxHandler}
                    />

                    <label htmlFor="">HTML</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="languages"
                      value="css"
                      id=""
                      onChange={checkBoxHandler}
                    />
                    <label htmlFor="">css</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="languages"
                      value="javaScript"
                      id=""
                      onChange={checkBoxHandler}
                    />
                    <label htmlFor="">JavaScript</label>
                  </div>
                </div>
              </div>
              {errorValues.languageError && <h3>errorss</h3>}
            </div>
            <div className="counrty">
              <label htmlFor="">Country</label>
              <select name="country" id="country" onChange={onchangeHandler}>
                <option value="">Select</option>
                <option value="india">India</option>
                <option value="uae">Uae</option>
                <option value="qatar">Qatar</option>
              </select>
              {errorValues.country && <h3>Select a Value</h3>}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormOne;
