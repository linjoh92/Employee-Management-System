"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import { EmployeeProvider } from "@/context/EmployeeContext";

type ClientProvidersProps = {
  children: React.ReactNode;
};

export default function ClientProviders({ children }: ClientProvidersProps) {
  const [userSessionKey, setUserSessionKey] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => {
      setUserSessionKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <EmployeeProvider key={userSessionKey}>{children}</EmployeeProvider>
    </ThemeProvider>
  );
}
