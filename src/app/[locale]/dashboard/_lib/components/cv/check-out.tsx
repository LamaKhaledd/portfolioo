import { useEffect, useState } from "react";
import { Container, Text, Flex, Box } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

const CheckOutSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sectionElement = document.getElementById("check-out-section");
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <Container
      id="check-out-section"
      mt={"30"}
      style={{
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Flex direction="column" align="center" justify="center">
        <Text
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            color: "#333",
          }}
        >
          CHECK OUT MY CV!
        </Text>

        <Box
          style={{
            marginTop: "20px",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease-in-out",
          }}
        >
          <IconArrowDown
            size={50}
            stroke={1.5}
            style={{
              color: "#333",
              animation: inView ? "bounce 1.5s infinite" : "none",
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default CheckOutSection;
