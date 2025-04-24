// src/hooks/useCVForm.ts
import { useEffect, useState } from "react";
import { UseFieldArrayAppend } from "react-hook-form";

// Define the type for education entries
interface Education {
  degree: string;
  institution: string;
  duration: string;
}

// Define the type for project entries
interface Project {
  name: string;
  description: string;
  tools: string;
  duration: string;
}

const useCVForm = (
  append: UseFieldArrayAppend<Education>, 
  appendProject: UseFieldArrayAppend<Project>
) => {
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
    event: React.KeyboardEvent<HTMLInputElement>,
    skillInput: string,
    setSkillInput: (value: string) => void
  ) => {
    if (event.key === "Enter" && skillInput.trim() !== "") {
      event.preventDefault();
      setTechnicalSkills((prevSkills) => [...prevSkills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setTechnicalSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
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
      setSelectedLanguages((prevLanguages) => [
        ...prevLanguages,
        { language: currentLanguage, proficiency: currentProficiency },
      ]);
      setOpenModal(false);
      setCurrentLanguage("");
      setCurrentProficiency("");
    }
  };

  const handleLanguageRemove = (languageToRemove: string) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.filter((lang) => lang.language !== languageToRemove)
    );
  };

  return {
    technicalSkills,
    setTechnicalSkills,
    selectedLanguages,
    setSelectedLanguages,
    openModal,
    setOpenModal,
    currentLanguage,
    setCurrentLanguage,
    currentProficiency,
    setCurrentProficiency,
    handleSkillInputKeyDown,
    handleSkillRemove,
    handleLanguageSelect,
    handleProficiencySubmit,
    handleLanguageRemove,
  };
};

export default useCVForm;
