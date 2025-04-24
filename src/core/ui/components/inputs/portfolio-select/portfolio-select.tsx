import React, { useState } from "react";
import { Text } from "@mantine/core";
import {
  Combobox,
  InputBase,
  CloseButton,
  useCombobox,
  ComboboxDropdown,
  ComboboxSearch,
  ComboboxOptions,
  ComboboxTarget,
  ComboboxChevron,
  PillsInput,
  Pill
} from "@mantine/core";
import { IPortfolioSelectInput } from "./models/portfolio-select.interface";
import { filterOptions } from "./utils/filtering-function";
import PortfolioComboboxOption from "../portfolio-comboboxoption/portfolio-comboboxoption";
import PortfolioNoResultFound from "../../no-result-found/portfolio-no-result-found";

const PortfolioSelect: React.FC<{
  schema: IPortfolioSelectInput;
  onChange?: (selectedValues: string[]) => void;
}> = ({ schema, onChange }) => {
  const {
    options = [],
    multiple = false,
    searchable = false,
    clearable = false,
    creatable = false,
    placeholder = "Select an option",
    fullWidth = false,
  } = schema;

  const [value, setValue] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(options);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch("");
    },
    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const handleSelect = (val: string) => {
    setValue((prevValue) => {
      if (multiple) {
        if (prevValue.includes(val)) return prevValue;
        const newValue = [...prevValue, val];
        onChange?.(newValue);
        return newValue;
      } else {
        onChange?.([val]);
        combobox.closeDropdown();
        return [val];
      }
    });
  };

  const handleClear = () => {
    setValue([]);
    onChange?.([]);
  };

  const handleValueRemove = (val: string) => {
    setValue((prevValue) => prevValue.filter((item) => item !== val));
    onChange?.(value.filter((item) => item !== val));
  };

  const filteredOptions = filterOptions(data, search);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => handleSelect(val)}
    >
      <ComboboxTarget>
        {multiple ? (
          <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
            <Pill.Group>
              {value.length > 0 ? (
                value.map((item) => (
                  <Pill key={item} onRemove={() => handleValueRemove(item)}>
                    {item}
                  </Pill>
                ))
              ) : (
                <Text>{placeholder}</Text>
              )}

              <Combobox.EventsTarget>
                <PillsInput.Field
                  type="hidden"
                  onBlur={() => combobox.closeDropdown()}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace') {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        ) : (
          <InputBase
            component="button"
            type="button"
            pointer
            onClick={() => combobox.toggleDropdown()}
            rightSection={
              clearable && value.length > 0 ? (
                <CloseButton
                  size="sm"
                  onClick={handleClear}
                  aria-label="Clear value"
                />
              ) : (
                <ComboboxChevron />
              )
            }
          >
            {value.length > 0 ? value.join(", ") : <Text>{placeholder}</Text>}
          </InputBase>
        )}
      </ComboboxTarget>

      <ComboboxDropdown>
        {searchable && (
          <ComboboxSearch
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search..."
          />
        )}
        <ComboboxOptions>
          {!!filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((item) => (
              <PortfolioComboboxOption
                key={item}
                value={item}
                selected={value.includes(item)}
                onClick={() => handleSelect(item)}
              >
                {item}
              </PortfolioComboboxOption>
            ))
          ) : (
            <PortfolioNoResultFound />
          )}
          {creatable && search.trim().length > 0 && !data.includes(search) && (
            <PortfolioComboboxOption
              value={search}
              onClick={() => {
                setData((prevData) => [...prevData, search]);
                handleSelect(search);
              }}
            >
              + Create {search}
            </PortfolioComboboxOption>
          )}
        </ComboboxOptions>
      </ComboboxDropdown>
    </Combobox>
  );
};

export default PortfolioSelect;
