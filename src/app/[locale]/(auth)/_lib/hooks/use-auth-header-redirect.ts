import { useState } from "react";
import { AUTH_ROUTES } from "@auth/_lib/constants/auth-routes";
import { submitHandler } from "@/core/utils/submit-handler";

export const useAuthRedirect = () => {
  const [loading, setLoading] = useState(false);

  const onLoginButtonClick = async () => {
    setLoading(true);
    try {
      await submitHandler(AUTH_ROUTES.LOGIN);
    } catch (error) {
      console.error("Login page redirection failed", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, onLoginButtonClick };
};
