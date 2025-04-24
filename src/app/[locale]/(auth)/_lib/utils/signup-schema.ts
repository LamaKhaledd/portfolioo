import { INPUT_TYPE } from "@/core/constants/input-renderer-constants";


export const signupSchema = [
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Username",
    name: "username",
  },
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Email",
    name: "email",
  },
  {
    inputType: INPUT_TYPE.PASSWORD,
    label: "Password",
    name: "password",
  },
  {
    inputType: INPUT_TYPE.PASSWORD,
    label: "Confirm Password",
    name: "confirmPassword",
  },
  {
    inputType: INPUT_TYPE.CHECKBOX,
    label: "Terms and conditions",
    name: "terms",
    options: [
      {
        id: "terms",
        value: "terms",
        label: "I accept the terms and conditions",
      },
      {
        id: "privacy",
        value: "privacy",
        label: "I accept the privacy policy",
      },
    ],
  },
  {
    inputType: INPUT_TYPE.RADIO,
    label: "Gender",
    name: "gender",
    options: [
      {
        id: "male",
        value: "male",
        label: "Male",
      },
      {
        id: "female",
        value: "female",
        label: "Female",
      },
      {
        id: "other",
        value: "other",
        label: "Other",
      },
    ],
  },
];
