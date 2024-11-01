"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import DashboardLayout from "./dashboardLayout";
import BasicButton from "../components/BasicButton";
import { DashboardContainer, WelcomeSection } from "./styles/DashboardStyles";
import { useEmployeeContext } from "@/context/EmployeeContext";
import ImageComponent from "../components/ImageComponent";

export default function DashboardPage() {
  const { user, handleLogout } = useEmployeeContext();
  const router = useRouter();

  return (
    <DashboardLayout user={user} onLogout={handleLogout} isGrid={false}>
      <DashboardContainer>
        <WelcomeSection>
          <ImageComponent src="Icon_company.svg" width={50} />

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: {
                xs: "32px",
                md: "42px",
              },
            }}
          >
            Welcome {user?.name}!
          </Typography>
        </WelcomeSection>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {user?.role !== "Employee" && (
            <BasicButton
              text="Employee System"
              onClick={() => router.push("/dashboard/employees")}
            />
          )}
          <BasicButton
            text="Business Card"
            onClick={() => router.push("/dashboard/business-card")}
          />
        </Box>

        <ImageComponent src="TextLogo_company.svg" width={100} />
      </DashboardContainer>
    </DashboardLayout>
  );
}
