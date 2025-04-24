
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useSkills from "@dashboard/hooks/use-skills";
import { cvFormSchema } from "@dashboard/utils/cv-schema";

const useCVForm = () => {
  const methods = useForm();
  const { control, register, setValue, handleSubmit } = methods;

  const { skillInput, setSkillInput } = useSkills();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({ control, name: "projects" });

  const [technicalSkills, setTechnicalSkills] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<
    { language: string; proficiency: string }[]
  >([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [currentProficiency, setCurrentProficiency] = useState<string>("");

  useEffect(() => {
    append({ degree: "", institution: "", duration: "" });
    appendProject({ name: "", description: "", tools: "", duration: "" });
  }, [append, appendProject]);

  const handleSkillInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && skillInput.trim() !== "") {
      event.preventDefault();
      setTechnicalSkills([...technicalSkills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setTechnicalSkills(
      technicalSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleLanguageSelect = (value: string | null) => {
    if (value) {
      setCurrentLanguage(value);
      setOpenModal(true);
    }
  };

  const handleProficiencySubmit = () => {
    if (currentLanguage && currentProficiency) {
      setSelectedLanguages([
        ...selectedLanguages,
        { language: currentLanguage, proficiency: currentProficiency },
      ]);
      setOpenModal(false);
      setCurrentLanguage("");
      setCurrentProficiency("");
    }
  };

  const handleLanguageRemove = (languageToRemove: string) => {
    setSelectedLanguages(
      selectedLanguages.filter((lang) => lang.language !== languageToRemove)
    );
  };

    const handleSkillAdd = () => {
      if (skillInput.trim() && !technicalSkills.includes(skillInput.trim())) {
        setTechnicalSkills([...technicalSkills, skillInput.trim()]);
        setSkillInput(""); 
      }
    };

  return {
    methods,
    technicalSkills,
    handleSkillInputKeyDown,
    handleSkillRemove,
    handleLanguageSelect,
    selectedLanguages,
    setSelectedLanguages,
    openModal,
    setOpenModal,
    currentLanguage,
    currentProficiency,
    setCurrentProficiency,
    handleProficiencySubmit,
    handleLanguageRemove,
    fields,
    projectFields,
    register,
    handleSubmit,
    setValue,
    append,
    remove,
    appendProject,
    removeProject,
    handleSkillAdd,
  };
};

export default useCVForm;
