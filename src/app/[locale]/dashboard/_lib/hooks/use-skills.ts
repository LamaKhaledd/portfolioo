import { useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const trimmedSkill = skillInput.trim(); 

  const addSkill = () => {
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills([...skills, trimmedSkill]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return {
    skills, 
    skillInput,
    setSkillInput,
    addSkill,
    removeSkill, 
  };
};

export default useSkills;
