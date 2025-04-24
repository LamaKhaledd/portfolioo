import { INPUT_COMPONENTS_MAP } from "@components/inputs/input-components-map";
import { InputSchema } from "@models/input-base.type";

export const getInputComponent = (inputType: InputSchema["inputType"]) => {
  return INPUT_COMPONENTS_MAP[inputType] || null;
};
