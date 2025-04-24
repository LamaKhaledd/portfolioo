import { Flex, Container, Transition } from "@mantine/core";
import useAbout from "@dashboard/hooks/use-about";
import { FormProvider } from "react-hook-form";
import AboutDetails from "../about-details/about-details";
import ContactModal from "../contact-modal/contact-modal";
import AboutCard from "../about-card/about-card";
import { useInView } from "react-intersection-observer";

const About = () => {
  const {
    navigateToProjects,
    openContactModal,
    closeContactModal,
    contactModalOpened,
    methods,
  } = useAbout();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% of the section should be visible
  });

  return (
    <Container size="lg" py={30}>
      <div ref={ref}>
        <Transition
          mounted={inView}
          transition="slide-up"
          duration={500}
          timingFunction="ease"
        >
          {(styles) => (
            <Flex
              align="center"
              mih="80vh"
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              pb={50}
              style={styles}
            >
              <AboutCard openContactModal={openContactModal} />
              <AboutDetails navigateToProjects={navigateToProjects} />
            </Flex>
          )}
        </Transition>
      </div>

      <FormProvider {...methods}>
        <Container size="lg">
          <ContactModal
            opened={contactModalOpened}
            onClose={closeContactModal}
          />
        </Container>
      </FormProvider>
    </Container>
  );
};

export default About;
