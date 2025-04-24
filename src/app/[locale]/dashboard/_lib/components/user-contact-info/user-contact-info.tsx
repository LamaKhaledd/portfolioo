import React from "react";
import { Anchor, Box, Group, Text } from "@mantine/core";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { PERSONAL_INFO } from "@dashboard/constants/cv-constants";

const UserContactInfo = () => {
  const { email, phone, address } = PERSONAL_INFO;

  return (
    <Box
      p="md"
      mt="xl"
      style={{
        border: "1px solid var(--mantine-color-border)",
        borderRadius: "var(--mantine-radius-md)",
      }}
    >
      <Group justify="center" gap="xl">
        <Group gap="xs">
          <IconMail size={16} />
          <Anchor href={`mailto:${email}`}>{email}</Anchor>
        </Group>
        <Group gap="xs">
          <IconPhone size={16} />
          <Anchor href={`tel:${phone}`}>{phone}</Anchor>
        </Group>
        <Group gap="xs">
          <IconMapPin size={16} />
          <Text>{address}</Text>
        </Group>
      </Group>
    </Box>
  );
};

export default UserContactInfo;
