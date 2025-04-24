import { MantineSize } from "@mantine/core";
import { InputType } from "./input-base.type";
import { ValuesTypes } from "./input-base.type";

export interface IBaseInputSchema {
  inputType: InputType;
  label?: string;
  name: string;
  size?: MantineSize;
  color?: string;
  required?: boolean;
  placeholder?: string;
  children?: IBaseInputSchema[]; 
  textLimit?: number;
  validations?: IPortfolioValidation[];
}

export interface IPortfolioOption {
  id: string;
  value: string;
  label: string;
}

export interface IPortfolioValidation {
rule: string;
message: string;
value: ValuesTypes;
};