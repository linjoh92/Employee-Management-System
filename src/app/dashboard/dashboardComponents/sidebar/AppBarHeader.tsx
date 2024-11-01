import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Employee } from "@/shared/types";
import AvatarIcon from "@/app/components/AvatarIcon";
import ImageComponent from "@/app/components/ImageComponent";

type AppBarHeaderProps = {
  drawerWidth: number;
  isTablet: boolean;
  toggleSidebar: () => void;
  user: Employee | null;
};

const AppBarHeader = ({
  drawerWidth,
  isTablet,
  toggleSidebar,
  user,
}: AppBarHeaderProps) => (
  <AppBar
    position="fixed"
    sx={{
      width: isTablet ? "100%" : `calc(100% - ${drawerWidth}px)`,
      backgroundColor: isTablet ? "primary.main" : "white",
      color: isTablet ? "white" : "inherit",
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: { xs: 2, sm: 4 },
        paddingRight: { xs: 1, sm: 3 },
      }}
    >
      {" "}
      {isTablet && (
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>
      )}
      {!isTablet && (
        <Link href="/dashboard" passHref>
          <ImageComponent src="logoIcon_company.svg" width={100} />
        </Link>
      )}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body1">{user?.name}</Typography>
        <AvatarIcon
          name={user?.name || "User"}
          bgColor={isTablet ? "white" : "primary.main"}
          textColor={isTablet ? "primary.main" : ""}
        />
      </Box>
    </Toolbar>
  </AppBar>
);

export default AppBarHeader;
