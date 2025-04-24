import React from "react";
import { Group } from "@mantine/core";
import PortfolioAnchor from "@/core/ui/components/anchor/portfolio-anchor";
import IconTextGroup from "../contact-item-icon-text-group/contact-item-icon-text-group";

const ContactItem: React.FC<IContactItemProps> = ({ icon, text, href }) => {
  return (
    <Group gap="xs">
      {href ? (
        <PortfolioAnchor schema={{ href }}>
          <IconTextGroup icon={icon} text={text} />
        </PortfolioAnchor>
      ) : (
        <IconTextGroup icon={icon} text={text} />
      )}
    </Group>
  );
};

export default ContactItem;
