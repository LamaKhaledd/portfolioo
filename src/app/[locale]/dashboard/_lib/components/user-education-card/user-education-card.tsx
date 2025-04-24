import React from "react";
import { Box, Text } from "@mantine/core";
import { MAIN_COLORS } from "@/core/constants/colors";

const UserEducationCard: React.FC<IUserEducationCardProps> = ({ degree, institution, duration }) => {
  return (
    <Box
      p="xs"
      style={{
        border: "1px solid var(--mantine-color-border)",
        borderRadius: 10,
      }}
    >
      <Text fw="bold">{degree}</Text>
      <Text fz="sm" c={MAIN_COLORS.TEXT_SECONDARY}>
        {institution}
      </Text>
      <Text fz="sm" c={MAIN_COLORS.TEXT_SECONDARY}>
        {duration}
      </Text>
    </Box>
  );
};

export default UserEducationCard;
