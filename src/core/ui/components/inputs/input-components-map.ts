import { INPUT_TYPE } from "@/core/constants/input-renderer-constants";
import { InputComponentProps } from "./input-component-props";
import PortfolioCheckboxInput from "./portfolio-checkbox/portfolio-checkbox";
import PortfolioPasswordInput from "./portfolio-password/portfolio-password";
import PortfolioRadioInput from "./portfolio-radio/portfolio-radio";
import PortfolioSelectInput from "./portfolio-select/portfolio-select";
import PortfolioSwitchInput from "./portfolio-switch/portfolio-switch";
import PortfolioTextInput from "./portfolio-text/portfolio-text";
import PortfolioTextarea from "./portfolio-textarea/portfolio-textarea";

export const INPUT_COMPONENTS_MAP = {
  [INPUT_TYPE.TEXT]: PortfolioTextInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.PASSWORD]: PortfolioPasswordInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.TEXT_AREA]: PortfolioTextarea as React.FC<InputComponentProps>,
  [INPUT_TYPE.CHECKBOX]: PortfolioCheckboxInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.RADIO]: PortfolioRadioInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.SELECT]: PortfolioSelectInput as React.FC<InputComponentProps>,
  [INPUT_TYPE.SWITCH]: PortfolioSwitchInput as React.FC<InputComponentProps>,
};
