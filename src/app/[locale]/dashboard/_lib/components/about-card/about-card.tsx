import { Title, Text, Box, Flex } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import { USER_USERNAME } from "@dashboard/constants/dashboard-data";
import PortfolioImage from "@/core/ui/components/image/image";
import { MAIN_COLORS } from "@/core/constants/colors";
import SocialMediaGroup from "../social-media-group/social-media-group";
import { useTranslations } from "next-intl";

const AboutCard: React.FC<IAboutCardProps> = ({ openContactModal }) => {
  const tWelcome = useTranslations("WelcomeSection");
  const tContact = useTranslations("ContactMeButton");

  return (
    <Box
    bg="white"
      style={{
        borderRadius: "var(--mantine-radius-md)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        minWidth: "40%",
        boxShadow: "var(--mantine-shadow-sm)",
      }}
    >
      <Flex justify="center" align="center">
        <PortfolioImage
          schema={{
            src: "/images/Icon.jpg",
            height: 120,
            width: 120,
            radius: "200",
          }}
        />
      </Flex>

      <Title ta="center" order={3} mt="md">
        {tWelcome("welcomeUserName")}
      </Title>
      <Text ta="center" fz={13} c={MAIN_COLORS.TEXT_SECONDARY}>
        {USER_USERNAME}
      </Text>

      <SocialMediaGroup />

    </Box>
  );
};

export default AboutCard;
