import React from "react";
import { ComboboxEmpty, Text } from "@mantine/core";
import { IconSearchOff } from "@tabler/icons-react";

const PortfolioNoResultFound = ({
  label = "No results found",
  icon: Icon = IconSearchOff,
}: IPortfolioNoResultFound): React.ReactElement => {
  return (
    <ComboboxEmpty
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Icon size={32} stroke={1.5} />
      <Text size="sm" mt={8} c="dimmed">
        {label}
      </Text>
    </ComboboxEmpty>
  );
};

export default PortfolioNoResultFound;
