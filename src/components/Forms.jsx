import { useState } from "react";
import bgTwo from "../assets/user.png";

const Forms = () => {
  const initialValues = {
    firstName: "",
    email: "",
    gender: "",
    date: "",
    languages: [],
    country: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [eroors, setEroors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  // console.log();

  const onchangeHandler = (event) => {
    const { name, value } = event.target;

    let error = { ...eroors };

    switch (name) {
      case "firstName":
        if (value.length === 0) {
          error.firstName = "Name required";
        } else {
          error.firstName = value.length < 3 ? "add morethan 3" : "";
          // error.firstName = value.length < 3 ? "add morethan 3" : "✓";
        }
        break;
      case "email":
        if (value === "") {
          error.email = "Email requires";
        } else {
          error.email =
            value.length < 4
              ? "morethan 3 charecter required"
              : "" || !/\S+@\S+\.\S+/.test(value)
              ? "Email Invalid"
              : "";
        }

        break;
      case "gender":
        if (!value) {
          error.gender = "select one";
        } else {
          error.gender = "";
        }

        // error.gender = !value.length ? "select one" : "";
        break;
      case "date":
        error.date = value.length === 0 ? "select your Dob" : "";
      default:
        break;
    }
    setEroors(error);

    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  // console.log(eroors);

  const errorValues = Object.values(eroors);
  console.log(errorValues);

  console.log(errorValues.includes(""));

  const checkBoxHandler = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, languages: [...formData.languages, value] });
    } else {
      setFormData({
        ...formData,
        languages: [...formData.languages.filter((item) => item !== value)],
      });
    }
  };

  return (
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
              onChange={(e) => onchangeHandler(e)}
              name="firstName"
              value={formData.firstName}
            />
            {eroors.firstName && <h3>{eroors.firstName}</h3>}
          </div>
          <div className="input-itemes">
            <input
              placeholder="Email"
              type="text"
              onChange={onchangeHandler}
              name="email"
            />
            {eroors.email && <h3>{eroors.email}</h3>}
          </div>
          <div className="radio">
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
            {eroors.gender && <h3>{eroors.gender}</h3>}
          </div>
          <div className="input-itemes">
            <input type="date" onChange={onchangeHandler} name="date" />
            {eroors.date && <h3>{eroors.date}</h3>}
          </div>
          <div className="languages">
            <label htmlFor="">Languages</label>
            <input
              type="checkbox"
              name="languages"
              value="html"
              id=""
              onChange={checkBoxHandler}
            />
            <label htmlFor="">HTML</label>
            <input
              type="checkbox"
              name="languages"
              value="css"
              id=""
              onChange={checkBoxHandler}
            />
            <label htmlFor="">css</label>
            <input
              type="checkbox"
              name="languages"
              value="javaScript"
              id=""
              onChange={checkBoxHandler}
            />
            <label htmlFor="">JavaScript</label>
          </div>
          <div className="counrty">
            <label htmlFor="">Country</label>
            <select name="country" id="country" onChange={onchangeHandler}>
              <option value="">Select</option>
              <option value="india">India</option>
              <option value="uae">Uae</option>
              <option value="qatar">Qatar</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
