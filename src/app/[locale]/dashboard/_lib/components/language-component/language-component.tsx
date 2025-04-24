import React from "react";
import { Badge } from "@mantine/core";
import { MAIN_COLORS } from "@/core/constants/colors";


const LanguageComponent: React.FC<ILanguageComponentProps> = ({ language, proficiency }) => {
    return (
      <Badge
        size="lg"
        variant="light"
        c={proficiency === "Native" ? MAIN_COLORS.NATIVE : MAIN_COLORS.PROEFFICIENT}
      >
        {`${language} (${proficiency})`}
      </Badge>
    );
  };
  
  export default LanguageComponent;