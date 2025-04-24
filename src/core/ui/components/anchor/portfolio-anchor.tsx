import React from "react";
import { Anchor } from "@mantine/core";
import { IPortfolioAnchor } from "./models/portfolio-anchor.interface";

const PortfolioAnchor = ({
  schema = {},
  children = null,
  onClick,
}: {
  schema?: IPortfolioAnchor;
  children?: React.ReactNode;
  onClick?: () => void;
}): React.ReactElement => {
  const {
    label,
    href,
    color = "blue",
    size = "xs",
    target = "_blank",
    fullWidth = false,
    textAlign = "center", 
    rel = "noopener noreferrer",
  } = schema || {};

  return (
    <div style={{ width: fullWidth ? "100%" : "auto", textAlign }}>
      <Anchor
        href={href}
        onClick={onClick}
        c={color}
        rel={rel}
        size={size}
      >
        {label || children}
      </Anchor>
    </div>
  );
};

export default PortfolioAnchor;
