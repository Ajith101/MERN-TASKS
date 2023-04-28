export const FormValidation = ({
  event,
  errorValues,
  setErrorValues,
  // languageIsexist,
}) => {
  const { name, value, checked } = event.target;
  let error = { ...errorValues };

  // console.log(languageIsexist);

  switch (name) {
    case "firstName":
      error.firstName =
        value === ""
          ? "Enter name"
          : "" || value.length < 4
          ? "Add morethan 3 charactor"
          : "";
      break;
    case "email":
      error.email =
        value === ""
          ? "Enter Mail"
          : "" || !/\S+@\S+\.\S+/.test(value)
          ? "Enter Valid Mail"
          : "";
      break;
    case "gender":
      if (checked) {
        error.gender = "";
      }
      break;
    case "dob":
      error.dob = value === "" ? "Enter dob" : "";
      break;

    case "languages":
      if (checked) {
        error.languages = { ...error.languages, [value]: checked };
        error.languageError = "";
      } else {
        error.languages = { ...error.languages, [value]: checked };
      }
      break;
    case "country":
      error.country = value === "" ? "select" : "";
      break;
    default:
      break;
  }

  setErrorValues(error);
};
