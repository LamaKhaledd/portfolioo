import { useState, useEffect } from "react";
import { useWindowScroll } from "@mantine/hooks";
import { calculateGradient } from "../utils/calculate-gradient";

export const useGradientBackground = () => {
  const [background, setBackground] = useState(
    "linear-gradient(to bottom, rgba(23, 96, 159, 0.3), white)"
  );

  const [scroll] = useWindowScroll();

  useEffect(() => {
    setBackground(calculateGradient(scroll.y));
  }, [scroll.y]);

  return background;
};
