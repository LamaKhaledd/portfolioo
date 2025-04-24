import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@auth/_lib/utils/sign-up-validation-schema";
import { AUTH_ROUTES } from "@auth/_lib/constants/auth-routes";
import { submitHandler } from "@/core/utils/submit-handler";

export const useSignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const submit = async () => {
    setLoading(true);
    await submitHandler(AUTH_ROUTES.MAINCONTENT);
    setLoading(false);
  };

  const handleLoginClick = () => {
      router.replace(AUTH_ROUTES.LOGIN);
  };

  return {
    methods,
    loading,
    submit,
    handleLoginClick,
  };
};
