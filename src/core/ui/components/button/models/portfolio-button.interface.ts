import { ButtonVariant, MantineSize } from "@mantine/core";
import { ButtonType, CompactButtonSize } from "./portfolio-button.type";

export interface IPortfolioButton {
  type?: ButtonType;
  label?: string;
  color?: string;
  size?: MantineSize | CompactButtonSize;
  variant?: ButtonVariant;
  rightSection?: React.ReactNode;
  leftSection?: React.ReactNode;
  fullWidth?: boolean;
  radius?: number;
  loading?: boolean;
}
