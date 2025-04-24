import React from "react";
import { TextInput as MantineTextInput } from "@mantine/core";
import { IPortfolioTextInput } from "./models/portfolio-text.interface";

const PortfolioTextInput = ({
  schema,
  value,
  onChange,
}: {
  schema: IPortfolioTextInput;
  value?: string;
  onChange?: ({ value }: { value: string }) => void;
}): React.ReactNode => {
  const {
    label,
    placeholder = "Enter text",
    size = "md",
    color,
    required = false,
  } = schema;

  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange({ value });
    }
  };

  return (
    <MantineTextInput
      label={label}
      placeholder={placeholder}
      size={size}
      required={required}
      color={color}
      value={value}
      onChange={(event) => handleOnChange(event.target.value)}
    />
  );
};

export default PortfolioTextInput;
