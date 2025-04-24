import React from "react";
import { Container, Flex, Text } from "@mantine/core";
import { FOOTER_LINKS } from "@auth/_lib/constants/footer-constants";
import PortfolioAnchor from "@/core/ui/components/anchor/portfolio-anchor";
import { useTranslations } from "next-intl";

const AuthFooter = () => {
  const t = useTranslations("Footer");

  return (
    <Container size="xl" mih="2rem" mt="1rem">
      <Text size="xs" c="dimmed" ta="center">
        <Flex align="center" gap="4px" justify="center" wrap="wrap">
          {t("programmedBy")}
          {FOOTER_LINKS.map((link, index) => (
            <React.Fragment key={link.href}>
              <PortfolioAnchor>{link.label}</PortfolioAnchor>
              {index < FOOTER_LINKS.length - 1 && <span>,</span>}
            </React.Fragment>
          ))}
          <Text>This work is still under development.</Text>
        </Flex>
      </Text>
    </Container>
  );
};

export default AuthFooter;
