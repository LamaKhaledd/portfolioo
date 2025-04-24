import { Flex, Text, Title } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import PortfolioImage from "@/core/ui/components/image/image";
import "@/app/globals.css";
import { MAIN_COLORS } from "@/core/constants/colors";
import { TEXT_PROPS } from "@dashboard/constants/about-constants";
import { useTranslations } from "next-intl";

const AboutDetails: React.FC<IAboutDetailsProps> = ({ navigateToProjects }) => {
  const tBIO = useTranslations("UserBio");
  const tWelcome = useTranslations("WelcomeSection");

  return (
    <Flex
      direction="column"
      gap="sm"
      w={{ md: "50%" }}
      align={{ base: "center", md: "flex-start" }}
    >
      <Title order={2} className="font-montserrat" pt={20}>
        {tWelcome("welcomeUserName")}
      </Title>
      <Text {...TEXT_PROPS}>{tBIO("UserBioAbstract.bio")}</Text>
      <Text {...TEXT_PROPS}>{tBIO("UserBioExtended.bio")}</Text>

      <PortfolioButton
        onClick={navigateToProjects}
        schema={{
          size: "md",
          label: "What Can I Do?",
          variant: "outline",
          color: MAIN_COLORS.PRIMARY,
          leftSection: (
            <PortfolioImage
              schema={{
                src: "/icons/llama.png",
                alt: "Llama Icon",
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
    </Flex>
  );
};

export default AboutDetails;
