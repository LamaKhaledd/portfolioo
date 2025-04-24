import { INPUT_TYPE } from "@/core/constants/input-renderer-constants";

export const contactSchema = [
  {
    inputType: INPUT_TYPE.TEXT,
    label: "Name",
    name: "Your Name",
  },

  {
    inputType: INPUT_TYPE.TEXT,
    label: "Email",
    name: "Enter Your Email",
  },

  {
    inputType: INPUT_TYPE.TEXT_AREA,
    label: "Message",
    name: "Message",
  },
];
