import { Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import About from "../about/about";
import CV from "../cv/cv";
import UserSkillsPanel from "../user-skills-panel/user-skills-panel";
import { MAIN_COLORS } from "@/core/constants/colors";
import {
  TABS_STYLE,
  LEFT_SECTION_ICONS,
  RIGHT_SECTION_ICON,
  PANEL_PROPS,
} from "@dashboard/constants/profile-constants";
import { useTranslations } from "next-intl";

const ProfileTabs = () => {
    const tProfileTabs = useTranslations("ProfileTabs");
  
  return (
    <Tabs defaultValue="about">
      <TabsList grow>
        <TabsTab
          value="about"
          c={MAIN_COLORS.TAB1}
          leftSection={LEFT_SECTION_ICONS.about}
          rightSection={RIGHT_SECTION_ICON}
          {...TABS_STYLE}
        >
        {tProfileTabs("About")}
        </TabsTab>

        <TabsTab
          value="skills"
          c={MAIN_COLORS.TAB2}
          leftSection={LEFT_SECTION_ICONS.skills}
          rightSection={RIGHT_SECTION_ICON}
          {...TABS_STYLE}
        >
        {tProfileTabs("Skills")}
        </TabsTab>

      </TabsList>

      <TabsPanel value="about" {...PANEL_PROPS}>
        <About />
      </TabsPanel>
      <TabsPanel value="skills">
        <UserSkillsPanel />
      </TabsPanel>
    </Tabs>
  );
};

export default ProfileTabs;
