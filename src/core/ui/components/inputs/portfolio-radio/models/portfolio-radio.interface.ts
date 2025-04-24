import {
  IBaseInputSchema,
  IPortfolioOption,
} from "@/core/models/input-base.interface";

export interface IPortfolioRadioInput extends IBaseInputSchema {
  options: IPortfolioOption[];
}
