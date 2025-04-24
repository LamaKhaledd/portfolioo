"use client";
import {
  Text,
  Flex,
  Tabs,
  Box,
  Title,
  Paper,
  Divider,
  ScrollArea,
} from "@mantine/core";
import { skillsSchema } from "@dashboard/constants/skills-schema";
import { getCategoryIcon } from "@dashboard/utils/get-category-icon";
import { MAIN_COLORS } from "@/core/constants/colors";

const UserSkillsPanel = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(200, 230, 255, 0.4), white)",
        minHeight: "100vh",
      }}
    >
      <Flex justify="center" pt={60} px={20} mih="80vh">
        <Tabs
          defaultValue={skillsSchema[0].category}
          orientation="vertical"
          styles={{
            tab: {
              padding: "12px 20px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&[data-active]": {
                backgroundColor: MAIN_COLORS.BLUE_DARK,
                color: "white",
              },
            },
          }}
        >
          <Flex gap="xl" w="100%">
            {/* Tabs Menu */}
            <Box
              p="md"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                minWidth: "280px",
                maxWidth: "280px",
                flexShrink: 0,
              }}
            >
              <ScrollArea type="scroll" offsetScrollbars h={500} >
                <Tabs.List>
                  {skillsSchema.map(({ category }) => (
                    <Tabs.Tab key={category} value={category}>
                      <Flex align="center" gap="sm">
                        <Text>{getCategoryIcon(category)}</Text>
                        <Text fw={600}>{category}</Text>
                      </Flex>
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </ScrollArea>
            </Box>

            {/* Skills Panel */}
            <Box w="100%" ml={40} mt={80} style={{ flexGrow: 1 }}>
              {skillsSchema.map(({ category, skills }) => (
                <Tabs.Panel key={category} value={category}>
                  <Title order={3} mb="lg" c={MAIN_COLORS.BLUE_DARK}>
                    {category} Skills
                  </Title>
                  <Divider mb="md" />
                  <Flex wrap="wrap" gap="xl" justify="start">
                    {skills.map((skill, index) => (
                      <Paper
                        key={index}
                        shadow="sm"
                        radius="md"
                        p="lg"
                        withBorder
                        style={{
                          minWidth: "150px",
                          textAlign: "center",
                          transition: "all 0.2s ease",
                          background: "white",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.03)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        <Text fw={600} color={MAIN_COLORS.BLUE_DARK} size="lg">
                          {skill}
                        </Text>
                      </Paper>
                    ))}
                  </Flex>
                </Tabs.Panel>
              ))}
            </Box>
          </Flex>
        </Tabs>
      </Flex>
    </div>
  );
};

export default UserSkillsPanel;
