import { InputSchema } from "@models/input-base.type";

export interface InputComponentProps {
  schema: InputSchema;
  value?:
    | string
    | string[]
    | boolean
    | number
    | [number, number]
    | Date
    | Date[];
  onChange?: (value: any) => void;
}
