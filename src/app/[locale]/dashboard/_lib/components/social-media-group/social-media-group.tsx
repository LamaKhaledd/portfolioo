import { ActionIcon, Group } from "@mantine/core";
import Link from "next/link";
import { SOCIAL_LINKS } from "@dashboard/constants/dashboard-data";

const SocialMediaGroup = () => {
  return (
    <Group justify="center" my="md">
      {SOCIAL_LINKS.map(({ href, icon: Icon }, index) => (
        <ActionIcon
          key={index}
          component={Link}
          href={href}
          size="lg"
          variant="light"
        >
          <Icon size={24} />
        </ActionIcon>
      ))}
    </Group>
  );
};

export default SocialMediaGroup;
