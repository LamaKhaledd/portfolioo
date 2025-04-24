import { IBaseInputSchema } from "@/core/models/input-base.interface";

export interface IPortfolioTextarea extends IBaseInputSchema {
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
}
