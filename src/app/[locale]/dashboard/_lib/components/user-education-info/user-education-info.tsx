import React from "react";
import { Stack, Title } from "@mantine/core";
import { EDUCATION } from "@dashboard/constants/cv-constants";
import { MAIN_COLORS } from "@/core/constants/colors";
import UserEducationCard from "../user-education-card/user-education-card";

const UserEducationInfo = () => {
  return (
    <Stack>
      <Title order={2} c={MAIN_COLORS.TITLE_COLOR}>
        Education
      </Title>
      <Stack gap="xs">
        {EDUCATION.map(({ degree, institution, duration }) => (
          <UserEducationCard key={degree} degree={degree} institution={institution} duration={duration} />
        ))}
      </Stack>
    </Stack>
  );
};

export default UserEducationInfo;
