"use client";
import React from "react";
import {
  Stack,
  Title,
  Paper,
  Grid,
  GridCol,
  Flex,
} from "@mantine/core";
import { FormProvider } from "react-hook-form";
import InputRenderer from "@/core/ui/components/inputs-renderer/portfolio-inputs-renderer";
import { useSignUpForm } from "@auth/_lib/hooks/use-signup-form";
import { useGradientBackground } from "@auth/_lib/hooks/gradient-background";
import PortfolioAnchor from "@/core/ui/components/anchor/portfolio-anchor";
import PortfolioButton from "@/core/ui/components/button/portfolio-button";
import { signupSchema } from "@auth/_lib/utils/signup-schema";

const SignUpForm = () => {
  const { methods, loading, submit, handleLoginClick } = useSignUpForm();
  const background = useGradientBackground();
  return (
    <Flex bg={background} align="center" justify="center">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>
          <Paper p="xl" withBorder shadow="md" maw="40rem" mx="auto" my="5rem">
            <Stack>
              <Title ta="center" order={2} mb="lg">
                SIGN UP
              </Title>

              <Grid>
                {signupSchema.map((field, index) => (
                  <GridCol span={12} key={index} pb="md">
                    <InputRenderer schema={field} />
                  </GridCol>
                ))}
              </Grid>

              <PortfolioButton schema={{ type: "submit" }} loading={loading}>
                Sign Up
              </PortfolioButton>

              <PortfolioAnchor
                schema={{
                  label: "Already have an account? Login!",
                  underline: true,
                }}
                onClick={handleLoginClick}
              />
            </Stack>
          </Paper>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default SignUpForm;
