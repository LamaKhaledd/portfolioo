import { INPUT_TYPE } from "@/core/constants/input-renderer-constants";

export const CONTACT_FORM_SCHEMA = [
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Name",
    name: "username",
    required: true,
  },
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Phone Number",
    name: "phone",
    required: true,
  },
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Email",
    name: "email",
    required: true,
  },
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Subject",
    name: "subject",
    required: true,
  },
  {
    inputType: INPUT_TYPE.TEXT_AREA,
    label: "Message",
    name: "message",
    required: true,
  },
];
