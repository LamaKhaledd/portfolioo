import { Resolver } from "react-hook-form";
import { IContactFormInput } from "./models/contact-modal-validation.interface";

export const contactFormResolver: Resolver<IContactFormInput> = async (
  values
) => {
  const errors: Record<string, { type: string; message: string }> = {};

  if (!values.username) {
    errors.username = { type: "required", message: "Name is required" };
  }

  if (!values.phone) {
    errors.phone = { type: "required", message: "Phone number is required" };
  } else if (!/^\d{10,15}$/.test(values.phone)) {
    errors.phone = { type: "pattern", message: "Invalid phone number" };
  }

  if (!values.email) {
    errors.email = { type: "required", message: "Email is required" };
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = { type: "pattern", message: "Invalid email address" };
  }

  if (!values.subject) {
    errors.subject = { type: "required", message: "Subject is required" };
  }

  if (!values.message) {
    errors.message = { type: "required", message: "Message is required" };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};
