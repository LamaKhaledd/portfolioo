"use client";

import React, { useState } from "react";
import {
  Container,
  Flex,
  Title,
  Box,
  Stepper,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import FadeUpTransition from "@/core/utils/fade-up-transition"; // Ensure this exists and works

export const EDUCATION = [
  {
    degree: "BACHELOR OF COMPUTER ENGINEERING",
    institution: "An - Najah National University",
    duration: "2020 - Currently",
    gpa: "3.78",
    details:
      "Focused on programming, hardware, and systems. Took part in workshops, and student groups to build strong technical and teamwork skills.",
  },
  {
    degree: "SECONDARY SCHOOL",
    institution: "Kufur-Rai girls secondary school",
    duration: "2016 - 2020",
    gpa: "97.7",
    details:
      "Excelled in math, physics, and chemistry. Built problem-solving, time management, and collaboration skills.",
  },
];

const EXPERIENCE = [
  {
    title: "Tap Trainee Program",
    date: "April 2025",
    details:
      "Training program focused on strengthening my skills and focusing more on how to improve them in terms of the job world.",
  },
  {
    title: "UI/UX Course — Udacity",
    date: "February 2025 – Currently",
    details:
      "Ongoing course focused on user-centered design, wireframing, and usability principles to create intuitive and accessible digital experiences.",
  },
  {
    title: "Web Development Bootcamp — Udemy",
    date: "April 20, 2025",
    details:
      "Completed a 13.5-hour course covering HTML, CSS, PHP, MySQL, and WordPress development. Taught by Marcus Menti and Zechariah Tech.",
  },
  {
    title: "Fratello Software House Training",
    date: "Sep 2024 – Dec 2024",
    details:
      "Frontend Development training focusing on React, Next.js, and Mantine UI components. Built modern, responsive UIs and learned scalable frontend best practices.",
  },
  {
    title: "ASP.NET — The Hope International",
    date: "Aug 2023 – Oct 2023",
    details:
      "Completed an ASP.NET course focusing on MVC, routing, data binding, and authentication.",
  },
  {
    title: "Adobe Photoshop — Korean Palestinian IT Center of Excellence",
    date: "Aug 2021 – Sep 2021",
    details:
      "Enhanced design skills in Photoshop. Built on a foundation from architectural engineering studies.",
  },
];

const ExperienceAndStudy: React.FC = () => {
  const [eduStep, setEduStep] = useState(0);
  const [expStep, setExpStep] = useState(0);

  const nextEdu = () =>
    setEduStep((current) =>
      current < EDUCATION.length ? current + 1 : current
    );
  const prevEdu = () =>
    setEduStep((current) => (current > 0 ? current - 1 : current));

  const nextExp = () =>
    setExpStep((current) =>
      current < EXPERIENCE.length ? current + 1 : current
    );
  const prevExp = () =>
    setExpStep((current) => (current > 0 ? current - 1 : current));

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: flexRef, inView: flexInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, rgba(200, 230, 255, 0.4), white)",
        minHeight: "100vh",
      }}
    >
      <Container size="lg" py="10rem">
        {/* Title section with line animation */}
        <Flex ref={titleRef} align="center" justify="center" my="3rem">
          <Box
            w={titleInView ? "30%" : "0%"}
            mih="2px"
            bg="black"
            style={{ transition: "width 0.6s ease-in-out" }}
          />
          <Title mx="md">EXPERIENCE & STUDY</Title>
          <Box
            w={titleInView ? "30%" : "0%"}
            mih="2px"
            bg="black"
            style={{ transition: "width 0.6s ease-in-out" }}
          />
        </Flex>

        {/* Transition for Flex Container */}
        <div ref={flexRef}>
          <FadeUpTransition mounted={flexInView}>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap="xl"
              justify="center"
            >
              {/* Education Column */}
              <Box
                p="lg"
                bg="white"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                w={{ base: "100%", md: "50%" }}
              >
                <Title order={3} mb="md">
                  Education
                </Title>
                <Stepper
                  active={eduStep}
                  onStepClick={setEduStep}
                  orientation="vertical"
                >
                  {EDUCATION.map((edu, index) => (
                    <Stepper.Step
                      key={`edu-${index}`}
                      label={edu.degree}
                      description={edu.institution}
                    >
                      <Text fw={500}>GPA: {edu.gpa}</Text>
                      <Text mt="xs">{edu.duration}</Text>
                      <Text mt="xs">{edu.details}</Text>
                    </Stepper.Step>
                  ))}
                  <Stepper.Completed>
                    All education steps complete
                  </Stepper.Completed>
                </Stepper>
                <Group justify="center" mt="md">
                  <Button variant="default" onClick={prevEdu}>
                    Back
                  </Button>
                  <Button onClick={nextEdu}>Next</Button>
                </Group>
              </Box>

              {/* Experience Column */}
              <Box
                p="lg"
                bg="white"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                w={{ base: "100%", md: "50%" }}
              >
                <Title order={3} mb="md">
                  Experience
                </Title>
                <Stepper
                  active={expStep}
                  onStepClick={setExpStep}
                  orientation="vertical"
                >
                  {EXPERIENCE.map((exp, index) => (
                    <Stepper.Step
                      key={`exp-${index}`}
                      label={exp.title}
                      description={exp.date}
                    >
                      <Text>{exp.details}</Text>
                    </Stepper.Step>
                  ))}
                  <Stepper.Completed>
                    All experience steps complete
                  </Stepper.Completed>
                </Stepper>
                <Group justify="center" mt="md">
                  <Button variant="default" onClick={prevExp}>
                    Back
                  </Button>
                  <Button onClick={nextExp}>Next</Button>
                </Group>
              </Box>
            </Flex>
          </FadeUpTransition>
        </div>
      </Container>
    </div>
  );
};

export default ExperienceAndStudy;
