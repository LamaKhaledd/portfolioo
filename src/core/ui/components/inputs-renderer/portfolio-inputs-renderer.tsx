import React from "react";
import { getInputComponent } from "@/core/utils/inputs";
import { InputSchema, ValuesTypes } from "@models/input-base.type";
import { Control, Controller, useFormContext } from "react-hook-form";

interface InputComponentProps {
  schema: InputSchema;
  value?: ValuesTypes;
  onChange?: (event: { value: ValuesTypes }) => void;
  onBlur?: () => void;
}

interface InputRendererProps {
  schema: InputSchema;
  value?: any;
}

const InputRenderer: React.FC<InputRendererProps> = ({ schema, value }) => {
  const { name, ...rest } = schema;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const Component = getInputComponent(
    schema.inputType
  ) as React.ComponentType<InputComponentProps>;

  const handleInputChange = <T extends string | string[] | number | undefined>({
    event,
    name,
    onChange,
  }: {
    event: { value: T };
    name: string;
    onChange: React.Dispatch<React.SetStateAction<T>>;
  }) => {
    onChange(event?.value);
    console.log(name, event?.value);
  };

  if (Component) {
    return (
      <div>
        <Controller
          name={name}
          control={control as Control}
          render={({ field: { value, onChange, onBlur } }) => (
            <div>
              <Component
                schema={{ ...rest, name: name }}
                onChange={(event: { value: ValuesTypes }) => {
                  handleInputChange({ event, name, onChange });
                }}
                onBlur={() => {
                  onChange(typeof value === "string" ? value?.trim() : value);
                }}
                value={value}
              />
              {errors[name] && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors[name]?.message as string}
                </p>
              )}
            </div>
          )}
        />
      </div>
    );
  }

  return null;
};

export default InputRenderer;
