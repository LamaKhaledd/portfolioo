import { InputType } from "@/core/models/input-base.type";

export const CVPersonalInfoSchema = [
  {
    inputType: "text" as InputType,
    label: "Full Name",
    name: "name",
    placeholder: "Enter Your Full name",
  },
  {
    inputType: "text" as InputType,
    label: "Job Title",
    name: "title",
    placeholder: "Enter Your current job title",
  },
  {
    inputType: "text" as InputType,
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    inputType: "text" as InputType,
    label: "Phone Number",
    name: "phone",
    placeholder: "Enter your phone number",
  },
  {
    inputType: "text" as InputType,
    label: "LinkedIn Profile",
    name: "linkedin",
    placeholder: "Enter your LinkedIn profile URL",
  },
  {
    inputType: "text" as InputType,
    label: "GitHub Profile",
    name: "github",
    placeholder: "Enter your GitHub profile URL",
  },
  {
    inputType: "text" as InputType,
    label: "Address",
    name: "address",
    placeholder: "Enter your current address",
  },
  {
    inputType: "textarea" as InputType,
    label: "Bio",
    name: "bio",
    placeholder: "Write a short description about yourself",
  },
]

export const cvFormSchema = [
  {
    inputType: "select" as InputType,
    label: "Spoken Languages",
    name: "languages",
    multiple: true,
    options: [
      { id: "1", value: "English", label: "English" },
      { id: "2", value: "Spanish", label: "Spanish" },
      { id: "3", value: "French", label: "French" },
      { id: "4", value: "German", label: "German" },
      { id: "5", value: "Chinese", label: "Chinese" },
      { id: "6", value: "Japanese", label: "Japanese" },
      { id: "7", value: "Arabic", label: "Arabic" },
      { id: "8", value: "Russian", label: "Russian" },
    ],
  },
];



export const CVEducationSchema = [
  {
    inputType: "text" as InputType,
    label: "Degree",
    name: "degree",
    placeholder: "Enter your degree",
  },
  {
    inputType: "text" as InputType,
    label: "Institution",
    name: "institution",
    placeholder: "Enter institution name",
  },
  {
    inputType: "text" as InputType,
    label: "Duration",
    name: "duration",
    placeholder: "From - To (e.g., 2018 - 2022)",
  },
];


export const CVProjectsSchema = [
  {
    inputType: "text" as InputType,
    label: "Project Name",
    name: "name",
    placeholder: "Enter project name",
  },
  {
    inputType: "text" as InputType,
    label: "Duration",
    name: "duration",
    placeholder: "e.g., Jan 2023 - Present",
  },
  {
    inputType: "text" as InputType,
    label: "Short Description",
    name: "description",
    placeholder: "Briefly describe the project",
  },
  {
    inputType: "text" as InputType,
    label: "Tools Used",
    name: "tools",
    placeholder: "e.g., React, Node.js, PostgreSQL",
  },
];

export const CVContactSchema = [
  {
    inputType: "text" as InputType,
    label: "Email",
    name: "contact.email",
    placeholder: "Enter your email",
  },
  {
    inputType: "text" as InputType,
    label: "Phone Number",
    name: "contact.phone",
    placeholder: "Enter your phone number",
  },
  {
    inputType: "text" as InputType,
    label: "Residence Place",
    name: "contact.residence",
    placeholder: "Enter your residence place",
  },
];


export const LanguageProfficiencySchema = [
  {
    inputType: "radio" as InputType,
    label: "Language Profficiency",
    name: "Language Profficiency",
    options: [
      {
        id: "1",
        value: "Beginner",
        label: "Beginner",
      },
      {
        id: "2",
        value: "Intermediate",
        label: "Intermediate",
      },
      {
        id: "3",
        value: "Expert",
        label: "Expert",
      },
    ],
  },
]
