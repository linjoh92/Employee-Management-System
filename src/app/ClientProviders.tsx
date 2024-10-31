"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import { EmployeeProvider } from "@/context/EmployeeContext";

type ClientProvidersProps = {
  children: React.ReactNode;
};

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <EmployeeProvider>{children}</EmployeeProvider>
    </ThemeProvider>
  );
}
