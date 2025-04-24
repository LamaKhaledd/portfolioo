import { MantineSize } from "@mantine/core";
import { TextAlignment } from "./portfolio-anchor.type";

export interface IPortfolioAnchor {
  label?: string;
  color?: string;
  href?: string;
  size?: MantineSize;
  fullWidth?: boolean;
  underline?: boolean;
  target?: string;
  rel?: string;
  textAlign?: TextAlignment;
}
