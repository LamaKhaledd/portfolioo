import React from "react";
import { Badge, Box, Group, Stack, Text, Title } from "@mantine/core";

const ProjectDetails: React.FC<IProjectDetailsProps> = ({
  title,
  date,
  description,
  badges,
}) => {
  return (
    <Box p="md" style={{ border: "1px solid var(--mantine-color-border)", borderRadius: "var(--mantine-radius-md)" }}>
      <Stack gap="xs">
        <Group justify="space-between">
          <Group>
            <Title order={3}>{title}</Title>
          </Group>
          <Text>{date}</Text>
        </Group>
        <Text>{description}</Text>
        <Group gap="xs">
          {badges.map((badge) => (
            <Badge key={badge} size="sm">
              {badge}
            </Badge>
          ))}
        </Group>
      </Stack>
    </Box>
  );
};

export default ProjectDetails;
