"use client";

import React from "react";
import {
  Container,
  Flex,
  Title,
  Box,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/app/[locale]/projects/_lib/constants/projects-data";
import ProjectCard from "../project-card/project-card";
import FadeUpTransition from "@/core/utils/fade-up-transition";

const UserProjects: React.FC = () => {
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");

  // Dynamically set slideSize based on screen width
  const slideSize = isSmall ? "100%" : isMedium ? "50%" : "33.333%";
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(200, 230, 255, 0.4), white)",
        minHeight: "100vh",
      }}
    >
    <Container size="lg" py={"10rem"}>
      <Flex ref={ref} align="center" justify="center" my="3rem">
        <Box
          w={inView ? "20%" : "0%"}
          mih="2px"
          bg="black"
          style={{
            transition: "width 0.6s ease-in-out",
          }}
        />
        <Title mx="md">MY PROJECTS</Title>
        <Box
          w={inView ? "55%" : "0%"}
          mih="2px"
          bg="black"
          style={{
            transition: "width 0.6s ease-in-out",
          }}
        />
      </Flex>

      <Carousel
      withIndicators
      height={550}
      slideSize="40%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
        {projectsData.map((project, index) => (
          <Carousel.Slide key={index}>
            <FadeUpTransition mounted={true}>
              <ProjectCard project={project} />
            </FadeUpTransition>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
    </div>
  );
};

export default UserProjects;
