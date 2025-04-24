import React from "react";
import { Checkbox, CheckboxGroup } from "@mantine/core";
import { ICheckboxInput } from "./models/portfolio-checkbox.interface";

const PortfolioCheckboxInput = ({
  schema,
  value,
  onChange,
}: {
  schema: ICheckboxInput;
  value: string[];
  onChange: ({ value }: { value: string[] }) => void;
}): React.ReactNode => {
  const { label, size = "md", color, options } = schema;

  const handleOnChange = (checkedValues: string[]) => {
    if (onChange) {
      onChange({ value: checkedValues });
    }
  };

  return (
    <CheckboxGroup
      label={label}
      size={size}
      color={color}
      value={value}
      onChange={(checkedValues) => handleOnChange(checkedValues)}
    >
      {options?.map((option) => (
        <Checkbox key={option.id} value={option.value} label={option.label} />
      ))}
    </CheckboxGroup>
  );
};

export default PortfolioCheckboxInput;
