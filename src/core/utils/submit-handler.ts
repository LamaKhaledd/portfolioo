import { delay } from "./delay";
import { useRouter } from "next/navigation";

export const submitHandler = async (
  successRoute: string
) => {
  try {
    const router = useRouter();
    await delay(1000);
    router.replace(successRoute);
  } catch (error) {
    console.error("Submission failed", error);
  }
};
