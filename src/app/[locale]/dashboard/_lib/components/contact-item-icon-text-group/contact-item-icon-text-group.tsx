import React from "react";
import { Group, Text } from "@mantine/core";

const IconTextGroup: React.FC<IIconTextGroupProps> = ({ icon: Icon, text }) => {
  return (
    <Group gap="xs">
      <Icon size={16} />
      <Text>{text}</Text>
    </Group>
  );
};

export default IconTextGroup;
