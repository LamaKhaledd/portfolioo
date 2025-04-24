"use client";
import {
  Stack,
  Title,
  Paper,
  Grid,
  GridCol,
  Flex,
  Modal,
  TextInput,
} from "@mantine/core";
import { FormProvider } from "react-hook-form";
import InputRenderer from "@InputRenderer/portfolio-inputs-renderer";
import { useGradientBackground } from "@auth/_lib/hooks/gradient-background";
import { useLoginForm } from "@auth/_lib/hooks/use-login-form";
import PortfolioAnchor from "@components/anchor/portfolio-anchor";
import PortfolioButton from "@/core/ui/components/button/portfolio-button";
import { loginSchema } from "@auth/_lib/utils/login-schema";

const LoginForm = () => {
  const {
    methods,
    loading,
    modalOpened,
    forgotEmail,
    setForgotEmail,
    setModalOpened,
    submit,
    handleForgotPasswordSubmit,
  } = useLoginForm();

  const background = useGradientBackground();

  return (
    <Flex bg={background} mih="100vh" align="center" justify="center">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>
          <Paper p="xl" withBorder shadow="md" miw="40rem" mx="auto">
            <Stack>
              <Title ta="center" order={2} mb="lg">
                LOGIN
              </Title>

              <Grid>
                {loginSchema.map((schema) => (
                  <GridCol span={12} key={schema.name}>
                    <InputRenderer schema={schema} />
                  </GridCol>
                ))}
              </Grid>

              <PortfolioAnchor
                schema={{
                  label: "Forgot your password?",
                  size: "sm",
                }}
                onClick={() => setModalOpened(true)}
              />

              <PortfolioButton schema={{ type: "submit" }} loading={loading}>
                Login
              </PortfolioButton>

              <PortfolioAnchor
                schema={{
                  label: "Don’t have an account? Sign up!",
                }}
                onClick={() => methods.reset()}
              />
            </Stack>
          </Paper>
        </form>
      </FormProvider>

      <Modal
        size="md"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Forgot Password?"
        pt="xl"
        centered
      >
        <Stack>
          <TextInput
            label="Enter your email to send you a link to reset your password"
            placeholder="example@domain.com"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.currentTarget.value)}
          />
          <PortfolioButton onClick={handleForgotPasswordSubmit}>
            Submit
          </PortfolioButton>
        </Stack>
      </Modal>
    </Flex>
  );
};

export default LoginForm;
