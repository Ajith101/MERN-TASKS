import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    email: "",
    gender: "",
    country: "",
    languages: [],
  });
  const [errorValues, setErrorValues] = useState({
    firstName: false,
    email: false,
    gender: false,
    country: false,
    languages: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (validOnSubmit()) {
      console.log("SubMitted");
      alert("Submitted");
      return;
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
    handleBlur(event);
  };
  const checkBoxHandler = (event) => {
    const { value, checked } = event.target;
    let Newlanguages = [...formValue.languages];
    if (checked) {
      Newlanguages.push(value);
      setErrorValues((pre) => ({ ...pre, languages: false }));
    } else {
      Newlanguages = Newlanguages.filter((item) => item !== value);
      Newlanguages.length === 0
        ? setErrorValues((pre) => ({ ...pre, languages: true }))
        : null;
    }
    setFormValue({ ...formValue, languages: Newlanguages });
  };

  const validOnSubmit = () => {
    const errors = {
      firstName: false,
      email: false,
      gender: false,
      country: false,
      languages: false,
    };

    if (formValue.firstName === "" || formValue.firstName.length < 3) {
      errors.firstName = true;
    }
    if (formValue.email === "") {
      errors.email = true;
    }
    if (formValue.country === "") {
      errors.country = true;
    }
    if (formValue.gender === "") {
      errors.gender = true;
    }

    if (formValue.languages.length === 0) {
      errors.languages = true;
    }

    setErrorValues(errors);
    if (Object.values(errors).some((item) => item === true)) {
      return false;
    }
    return true;
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    let error = false;
    if (name === "firstName" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }
    setErrorValues((pre) => ({ ...pre, [name]: error }));
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        <p>Please Fill The Form</p>
        <div className="input-section">
          <h2>
            First Name <span>*</span>
          </h2>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorValues.firstName && <h3>Name Rquired</h3>}
        </div>
        <div className="input-section">
          <h2>
            Email <span>*</span>
          </h2>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorValues.email && <h3>Email is required</h3>}
        </div>
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
            <label htmlFor="female">Female</label>{" "}
          </div>
          {errorValues.gender && <h3>Gender required</h3>}
        </div>
        <div className="input-section">
          <h2>
            Country <span>*</span>
          </h2>
          <select
            name="country"
            id=""
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="uae">Uae</option>
            <option value="qatar">Qatar</option>
          </select>{" "}
          {errorValues.country && <h3>Country is required</h3>}
        </div>{" "}
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
            <label htmlFor="male">Html</label>
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
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
