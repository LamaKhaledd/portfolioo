import { INPUT_TYPE } from "@/core/constants/input-renderer-constants";

export const loginSchema = [
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Email",
    name: "username",
  },

  {
    inputType: INPUT_TYPE.PASSWORD,
    label: "Password",
    name: "password",
  },
];

export const forgotPasswordSchema = [
  {
    inputType: INPUT_TYPE.TEXT,
    name: "forgotEmail",
    label: "Enter your email to reset your password",
    placeholder: "example@domain.com",
  },
];

