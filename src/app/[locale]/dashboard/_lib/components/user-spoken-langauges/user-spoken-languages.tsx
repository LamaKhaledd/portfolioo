import React from "react";
import { Group, Stack, Title } from "@mantine/core";
import { LANGUAGES } from "@dashboard/constants/cv-constants";
import { MAIN_COLORS } from "@/core/constants/colors";
import LanguageComponent from "../language-component/language-component";

const UserSpokenLanguages = () => {
  return (
    <Stack>
      <Title order={2} c={MAIN_COLORS.TITLE_COLOR}>
        Languages
      </Title>
      <Group gap="xs">
        {LANGUAGES.map(({ language, proficiency }) => (
          <LanguageComponent key={language} language={language} proficiency={proficiency} />
        ))}
      </Group>
    </Stack>
  );
};

export default UserSpokenLanguages;
