import React from "react";
import { Stack, Title } from "@mantine/core";
import { projectsData } from "@dashboard/constants/cv-projects-data";
import { MAIN_COLORS } from "@/core/constants/colors";
import ProjectDetails from "../project-details/project-details";

const CoreProjects = () => {
  return (
    <Stack my={20}>
      <Title order={2} c={MAIN_COLORS.TITLE_COLOR}>
        Core Projects
      </Title>
      {projectsData.map((project) => (
        <ProjectDetails
          key={project.title}
          title={project.title}
          date={project.date}
          description={project.description}
          badges={project.badges}
        />
      ))}
    </Stack>
  );
};

export default CoreProjects;
