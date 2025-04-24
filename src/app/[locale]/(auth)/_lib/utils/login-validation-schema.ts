import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email cannot be longer than 255 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,20}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (including .)."
    ),
});
