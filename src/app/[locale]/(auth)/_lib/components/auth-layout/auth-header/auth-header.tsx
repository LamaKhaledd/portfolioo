import React from "react";
import { Box, Flex, Group, Text } from "@mantine/core";
import Image from "next/image";
import PortfolioButton from "@components/button/portfolio-button";
import { MAIN_COLORS } from "@/core/constants/colors";
import { useAuthRedirect } from "@hooks/use-auth-header-redirect";
import "@/app/globals.css";
import { useTranslations } from "next-intl";

export const AuthHeader = () => {
  const { onLoginButtonClick } = useAuthRedirect();
  const t = useTranslations("Nav");

  return (
    <Box
      style={{
        boxShadow: "var(--mantine-shadow-md)",
        backgroundColor: "white",
      }}
      py={"1rem"}

    >
      <Group justify="space-between" h="2.8rem" p="0 5rem" bg="white">
        <Flex align="center">
          <Image
            src="/icons/llama.png"
            alt="Llama Icon"
            width={50}
            height={50}
          />
          <Text
            size="xl"
            fw="bold"
            ps="0.5rem"
            c={MAIN_COLORS.BLUE_DARK}
            lts="1px"
          >
            {t("name")}
          </Text>
        </Flex>

        <Group me="2rem">
          <Flex gap="md" me="2rem">
            {Object.keys(t.raw("navItems")).map((key, index) => (
              <Text
                key={index}
                fw="bold"
                c={MAIN_COLORS.GRAY_DARK}
                className="cursor-pointer"
              >
                {t(`navItems.${key}`)}
              </Text>
            ))}
          </Flex>
          <PortfolioButton
            onClick={onLoginButtonClick}
            schema={{
              label: t("hireme"),
              size: "md",
              variant: "light",
              color: "blue",
              radius: 5,
              leftSection: (
                <Image
                  src="/icons/tap.png"
                  alt="Tap Icon"
                  width={20}
                  height={20}
                />
              ),
            }}
          />
        </Group>
      </Group>
    </Box>
  );
};

export default AuthHeader;
