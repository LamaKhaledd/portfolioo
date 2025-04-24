import React from "react";
import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Title,
  Flex,
  Box,
  Anchor,
} from "@mantine/core";
import { MAIN_COLORS } from "@/core/constants/colors";
import Image from "next/image";

const ProjectCard: React.FC<{ project: ProjectCardInterface }> = ({
  project,
}) => {
  return (
    <Anchor
      href={project.sourceUrl}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Box
        p="lg"
        h={530}
        bg={"white"}
        style={{
          cursor: "pointer",
          border: "1px solid var(--mantine-color-border)",
          borderRadius: "var(--mantine-radius-md)",
          overflow: "hidden",
        }}
      >
        {project.image && (
          <Box pos="relative" h={240}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "var(--mantine-radius-md)",
                borderTopRightRadius: "var(--mantine-radius-md)",
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </Box>
        )}

        <Flex direction="column" justify="space-between" h="100%">
          <Stack gap="xs" mt="md">
            <Title order={3} c={MAIN_COLORS.TITLE_COLOR}>
              {project.title}
            </Title>
            <Group justify="space-between" align="center">
              <Text fz="sm" c={MAIN_COLORS.TEXT_SECONDARY}>
                {project.date}
              </Text>
              <Badge variant="filled" color="blue">
                Check it out
              </Badge>
            </Group>
            

            <Text fz="sm">{project.description}</Text>
            <Group gap="xs" mt="sm" wrap="wrap">
              {project.badges.map((badge: string) => (
                <Badge key={badge} c={MAIN_COLORS.INFO} variant="light">
                  {badge}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Flex>
      </Box>
    </Anchor>
  );
};

export default ProjectCard;
