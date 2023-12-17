import * as yup from "yup";

export const signInSignUpSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
