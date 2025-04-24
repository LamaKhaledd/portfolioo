"use client";
import React from "react";
import { Text, Box, Flex } from "@mantine/core";
import { useGradientBackground } from "@hooks/gradient-background";
import { useWelcomeText } from "@dashboard/hooks/use-welcome";
import "@/app/globals.css";
import { scroll } from "@dashboard/utils/scroll";
import ArrowButton from "@components/arrow-button/arrow-button";

export const Welcome = () => {
  const { showArrow } = useWelcomeText();
  const background = useGradientBackground();

  return (
    <Flex
      mih="100vh"
      direction="column"
      justify="center"
      align="center"
      bg={background}
    >
      <Text
        id="name"
        lts={2}
        fw="bold"
        fz={{ base: "2.5rem", md: "5rem" }}
        my={30}
        className="font-montserrat"
      ></Text>

      <Text
        id="role"
        fw="bold"
        fz={{ base: "1rem", md: "2rem" }}
        className="font-space-mono"
      ></Text>

      <Box mih="3rem" my={30}>
        <ArrowButton show={showArrow} onClick={scroll} />
      </Box>
    </Flex>
  );
};
