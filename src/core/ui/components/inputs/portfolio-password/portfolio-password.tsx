import React from "react";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import { IPasswordInput } from "./models/portfolio-password.interface";

const PortfolioPasswordInput = ({
  schema,
  value,
  onChange,
}: {
  schema: IPasswordInput;
  value: string;
  onChange: ({ value }: { value: string }) => void;
}): React.ReactNode => {
  const {
    label,
    placeholder = "Enter your password",
    size = "md",
    color,
    required = false,
    toggleVisibility = true,
  } = schema;

  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange({ value });
    }
  };

  return (
    <MantinePasswordInput
      label={label}
      placeholder={placeholder}
      size={size}
      required={required}
      color={color}
      value={value}
      onChange={(event) => handleOnChange(event.currentTarget.value)}
    />
  );
};

export default PortfolioPasswordInput;
