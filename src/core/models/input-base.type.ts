import { IPortfolioCheckboxInput } from "@components/inputs/portfolio-checkbox/models/portfolio-checkbox.interface";
import { IPortfolioPasswordInput } from "@components/inputs/portfolio-password/models/portfolio-password.interface";
import { IPortfolioRadioInput } from "@components/inputs/portfolio-radio/models/portfolio-radio.interface";
import { IPortfolioSelectInput } from "@components/inputs/portfolio-select/models/portfolio-select.interface";
import { IPortfolioSwitchInput } from "@components/inputs/portfolio-switch/models/portfolio-switch.interface";
import { IPortfolioTextInput } from "@components/inputs/portfolio-text/models/portfolio-text.interface";
import { IPortfolioTextarea } from "@components/inputs/portfolio-textarea/models/prtofolio-textarea.interface";

export type InputSchema =
  | IPortfolioTextInput
  | IPortfolioPasswordInput
  | IPortfolioTextarea
  | IPortfolioRadioInput
  | IPortfolioSwitchInput
  | IPortfolioSelectInput
  | IPortfolioCheckboxInput;

export type InputType =
  | "text"
  | "password"
  | "textarea"
  | "checkbox"
  | "radio"
  | "select"
  | "switch";

export type ValuesTypes =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | Date
  | Date[]
  | [number, number];
