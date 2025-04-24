import {
  IBaseInputSchema,
} from "@/core/models/input-base.interface";
export interface IPortfolioSelectInput extends IBaseInputSchema {
  options: string[]; 
  multiple?: boolean;
  searchable?: boolean; 
  clearable?: boolean; 
  creatable?: boolean; 
  placeholder?: string; 
  fullWidth?: boolean; 
}
