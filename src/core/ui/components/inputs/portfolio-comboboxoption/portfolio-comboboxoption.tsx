import React from "react";
import { ComboboxOption } from "@mantine/core";

const PortfolioComboboxOption = ({
  value,
  selected = false,
  color = "blue",
  onClick,
  children,
}: IPortfolioComboboxOption): React.ReactElement => {
  return (
    <ComboboxOption
      value={value}
      c={selected ? "red" : color}
      onClick={onClick}
    >
      {children || value}
    </ComboboxOption>
  );
};

export default PortfolioComboboxOption;
