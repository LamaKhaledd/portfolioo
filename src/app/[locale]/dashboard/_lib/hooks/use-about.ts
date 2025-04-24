import { useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@auth/_lib/constants/auth-routes";
import { useForm } from "react-hook-form";

const useAbout = () => {
  const [contactModalOpened, setContactModalOpened] = useState(false);
  const router = useRouter();
  const methods = useForm();

  const navigateToProjects = () => {
    router.push(AUTH_ROUTES.PROJECTS);
  };

  const openContactModal = () => setContactModalOpened(true);
  const closeContactModal = () => setContactModalOpened(false);

  return {
    navigateToProjects,
    contactModalOpened,
    openContactModal,
    closeContactModal,
    methods,
  };
};

export default useAbout;
