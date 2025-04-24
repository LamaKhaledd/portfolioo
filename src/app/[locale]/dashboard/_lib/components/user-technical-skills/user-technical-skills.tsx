import React from "react";
import { Group, Stack, Title } from "@mantine/core";
import { TECHNICAL_SKILLS } from "@dashboard/constants/cv-constants";
import { MAIN_COLORS } from "@/core/constants/colors";
import TechnicalSkillComponent from "../technical-skill-component/technical-skill-component";

const UserTechnicalSkills = () => {
  return (
    <Stack>
      <Title order={2} c={MAIN_COLORS.TITLE_COLOR}>
        Technical Skills
      </Title>
      <Group gap="xs">
        {TECHNICAL_SKILLS.map((skill) => (
          <TechnicalSkillComponent key={skill} skill={skill} />
        ))}
      </Group>
    </Stack>
  );
};

export default UserTechnicalSkills;
