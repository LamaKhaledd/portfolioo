import React from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { Transition } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";

const ArrowButton: React.FC<IArrowButtonProps> = ({ show, onClick }) => (
  <Transition
    mounted={show}
    transition="fade-down"
    duration={1000}
    timingFunction="ease"
  >
    {() => (
      <PortfolioButton
        schema={{
          variant: "subtle",
        }}
        onClick={onClick}
      >
        <IconArrowDown size={32} />
      </PortfolioButton>
    )}
  </Transition>
);

export default ArrowButton;
