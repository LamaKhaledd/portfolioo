import React from "react";
import { Transition } from "@mantine/core";

interface FadeUpTransitionProps {
  mounted: boolean;
  duration?: number;
  timingFunction?: string;
  children: React.ReactNode;
}

const FadeUpTransition: React.FC<FadeUpTransitionProps> = ({
  mounted,
  duration = 600,
  timingFunction = "ease",
  children,
}) => {
  return (
    <Transition
      mounted={mounted}
      transition="fade-up"
      duration={duration}
      timingFunction={timingFunction}
    >
      {(styles) => <div style={styles}>{children}</div>}
    </Transition>
  );
};

export default FadeUpTransition;
