import * as Yup from "yup";

export const signupValidation = Yup.object({
  name: Yup.string().min(6).required("Please entre the name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please entre the email"),
  password: Yup.string().min(5).required("Please enter password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please enter the correct password"),
});
