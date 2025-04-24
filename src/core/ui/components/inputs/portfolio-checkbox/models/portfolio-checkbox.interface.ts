import {
  IBaseInputSchema,
  IPortfolioOption,
} from "@/core/models/input-base.interface";

export interface IPortfolioCheckboxInput extends IBaseInputSchema {
  options?: IPortfolioOption[];
  indeterminate?: boolean;
}
