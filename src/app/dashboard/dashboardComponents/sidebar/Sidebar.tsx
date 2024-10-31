"use client";
import React, { useState } from "react";
import { Box, useMediaQuery, Theme } from "@mui/material";
import { Employee } from "@/shared/types";
import AppBarHeader from "./AppBarHeader";
import LogoutButton from "./LogoutButton";
import NavigationSection from "./NavigationSection";
import UserInfoSection from "./UserInfoSection";
import { StyledDrawer } from "./styles/SideBarStyles";

type SidebarProps = {
  user: Employee | null;
  onLogout: () => void;
  drawerWidth: number;
};

export default function Sidebar({ user, onLogout, drawerWidth }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <AppBarHeader
        drawerWidth={drawerWidth}
        isTablet={isTablet}
        toggleSidebar={toggleSidebar}
        user={user}
      />
      <StyledDrawer
        variant={isTablet ? "temporary" : "permanent"}
        open={isTablet ? isOpen : true}
        onClose={toggleSidebar}
        drawerWidth={drawerWidth}
      >
        <UserInfoSection user={user} />
        <Box>
          <NavigationSection user={user} />
          <LogoutButton onLogout={onLogout} />
        </Box>
      </StyledDrawer>
    </>
  );
}
