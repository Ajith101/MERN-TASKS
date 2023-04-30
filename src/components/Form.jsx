import React, { useState } from "react";
import "../App.css";
import InputForms from "./form/InputForms";
import RadioForms from "./form/RadioForms";
import SelectForms from "./form/SelectForms";
import CheckBoxForms from "./form/CheckBoxForms";

const Form = () => {
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
    if (
      formValue.email === "" ||
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        formValue.email
      )
    ) {
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
    if (name === "firstName" && (value === "" || value.length < 3)) {
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
        <InputForms
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorValues={errorValues.firstName}
          values={{ name: "firstName", type: "text", title: "First Name" }}
        />
        <InputForms
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorValues={errorValues.email}
          values={{ name: "email", type: "email", title: "Email" }}
        />
        <RadioForms
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorValues={errorValues.gender}
        />
        <SelectForms
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorValues={errorValues.country}
        />
        <CheckBoxForms
          checkBoxHandler={checkBoxHandler}
          handleBlur={handleBlur}
          errorValues={errorValues}
        />
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
