import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import PortfolioButton from "@components/button/portfolio-button";
import PersonalInfo from "../user-personal-info/user-personal-info";
import CoreProjects from "../user-core-projects/user-core-projects";
import UserTechnicalSkills from "../user-technical-skills/user-technical-skills";
import UserEducationInfo from "../user-education-info/user-education-info";
import UserContactInfo from "../user-contact-info/user-contact-info";
import { MAIN_COLORS } from "@/core/constants/colors";
import { useTranslations } from "next-intl";
import UserSpokenLanguages from "../user-spoken-langauges/user-spoken-languages";
import FadeUpTransition from "@/core/utils/fade-up-transition"; // Make sure this exists

// PDF download helper
const downloadPDF = async (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error("Element not found:", elementId);
    return;
  }

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName);
};

const CV = () => {
  const tCVButton = useTranslations("CVButtons");

  // Intersection observers for transitions
  const { ref: personalRef, inView: personalInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: languagesRef, inView: languagesInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(200, 230, 255, 0.4), white)",
        minHeight: "100vh",
      }}
    >
      <Container size="lg" py={100}>
        <Group justify="end" mb={20}>
          <PortfolioButton
            onClick={() => downloadPDF("cv-content", "Lama-Ibrahim-CV.pdf")}
            schema={{
              variant: "filled",
              size: "compact-lg",
              color: MAIN_COLORS.PRIMARY_BUTTON,
              label: tCVButton("DownloadButton.Download"),
            }}
          />
        </Group>

        <div id="cv-content">
          <Stack gap="xl">
            <div ref={personalRef}>
              <FadeUpTransition mounted={personalInView}>
                <PersonalInfo />
              </FadeUpTransition>
            </div>

            <div ref={projectsRef}>
              <FadeUpTransition mounted={projectsInView}>
                <CoreProjects />
              </FadeUpTransition>
            </div>

            <Grid my={30}>
              <GridCol span={{ md: 4 }}>
                <div ref={skillsRef}>
                  <FadeUpTransition mounted={skillsInView}>
                    <UserTechnicalSkills />
                  </FadeUpTransition>
                </div>
              </GridCol>

              <GridCol span={{ md: 4 }}>
                <div ref={languagesRef}>
                  <FadeUpTransition mounted={languagesInView}>
                    <UserSpokenLanguages />
                  </FadeUpTransition>
                </div>
              </GridCol>

              <GridCol span={{ md: 4 }}>
                <div ref={educationRef}>
                  <FadeUpTransition mounted={educationInView}>
                    <UserEducationInfo />
                  </FadeUpTransition>
                </div>
              </GridCol>
            </Grid>

            <div ref={contactRef}>
              <FadeUpTransition mounted={contactInView}>
                <UserContactInfo />
              </FadeUpTransition>
            </div>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default CV;
