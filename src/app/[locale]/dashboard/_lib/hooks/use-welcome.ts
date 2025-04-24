import { useEffect, useState } from "react";
import { typeTextEffect } from "@dashboard/utils/text-typing";
import { useTranslations } from "next-intl";


export const useWelcomeText = () => {
  const [showArrow, setShowArrow] = useState(false);
  const t = useTranslations("WelcomeSection");
  

  useEffect(() => {
    const typingSpeed = 150;
    const cleanUp = typeTextEffect(
      t("welcomeUserName"),
      t("welcomeUserRole"),
      typingSpeed,
      setShowArrow,
      "name",
      "role"
    );

    return cleanUp;
  }, []);

  return { showArrow };
};
