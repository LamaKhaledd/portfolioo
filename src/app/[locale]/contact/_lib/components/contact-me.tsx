import React from "react";
import {
  Container,
  Title,
  Text,
  Flex,
  Box,
  Grid,
  GridCol,
} from "@mantine/core";
import { useForm, FormProvider } from "react-hook-form";
import { MAIN_COLORS } from "@/core/constants/colors";
import PortfolioImage from "@/core/ui/components/image/image";
import PortfolioButton from "@/core/ui/components/button/portfolio-button";
import FadeUpTransition from "@/core/utils/fade-up-transition";
import { contactSchema } from "../utils/contact-schema";
import InputRenderer from "@/core/ui/components/inputs-renderer/portfolio-inputs-renderer";
import AuthFooter from "@/app/[locale]/(auth)/_lib/components/auth-layout/auth-footer/auth-footer";
import { useInView } from "react-intersection-observer";

const ContactMe: React.FC = () => {
  const methods = useForm();

  // Intersection Observer for animation trigger
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container size="lg" py="xl" mt="5rem">
      {/* Animated Title Section */}
      <Flex align="center" justify="center" my="3rem" ref={titleRef}>
        <Box
          w={titleInView ? "20%" : 0}
          mih="2px"
          bg="black"
          style={{
            transition: "width 0.8s ease-in-out",
          }}
        />
        <Title mx="md">CONTACT</Title>
        <Box
          w={titleInView ? "80%" : 0}
          mih="2px"
          bg="black"
          style={{
            transition: "width 0.8s ease-in-out",
          }}
        />
      </Flex>

      <Text mb="lg" c={MAIN_COLORS.TEXT_SECONDARY}>
        I would love to hear from you! Please fill out the form below to get in touch.
      </Text>

      {/* Animated Form Entry */}
      <div ref={formRef}>
        <FadeUpTransition mounted={formInView}>
          <Flex justify="center" mb={"3rem"}>
            <Box
              w={1200}
              p="lg"
              style={{
                border: "1px solid var(--mantine-color-border)",
                borderRadius: "var(--mantine-radius-lg)",
              }}
            >
              <Flex justify="center" align="center" mb="md">
                <Box mx="md">
                  <PortfolioImage
                    schema={{
                      src: "/images/contact1.gif",
                      alt: "Contact Image",
                      width: 300,
                      height: 400,
                    }}
                  />
                </Box>
                <FormProvider {...methods}>
                  <form>
                    <Grid mb="lg">
                      {contactSchema.map((schema) => (
                        <GridCol key={schema.name}>
                          <InputRenderer schema={schema} />
                        </GridCol>
                      ))}
                    </Grid>
                    <PortfolioButton schema={{ fullWidth: true }}>
                      Send Message
                    </PortfolioButton>
                  </form>
                </FormProvider>
              </Flex>
            </Box>
          </Flex>
        </FadeUpTransition>
      </div>

      <AuthFooter />
    </Container>
  );
};

export default ContactMe;
