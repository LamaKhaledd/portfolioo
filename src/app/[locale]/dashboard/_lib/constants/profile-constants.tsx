import {
  IconUser,
  IconFileText,
  IconTools,
  IconChevronRight,
} from "@tabler/icons-react";

export const LEFT_SECTION_ICONS = {
  about: <IconUser size={18} />,
  skills: <IconTools size={18} />,
  cv: <IconFileText size={18} />,
};

export const RIGHT_SECTION_ICON = <IconChevronRight size={14} />;

export const PANEL_PROPS = {
  keepMounted: true,
  bg: "linear-gradient(to bottom, rgba(23, 96, 159, 0.8), rgba(20, 100, 140, 5))",
};

export const TABS_STYLE = {
  fw: "bold",
  h: 60,
  fz: 18,
};
