import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Employee } from "@/shared/types";
import { StyledRoleBadge, UserInfoContainer } from "./styles/SideBarStyles";

type UserInfoSectionProps = {
  user: Employee | null;
};

const UserInfoSection = ({ user }: UserInfoSectionProps) => (
  <Box
    sx={{
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <StyledRoleBadge variant="body2">{user?.role}</StyledRoleBadge>
    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1.2, mb: 0.5 }}>
      {user?.name}
    </Typography>

    <Divider
      sx={{ my: 1, width: "90%", mx: "auto", bgcolor: "primary.main" }}
    />
    <UserInfoContainer>
      <BusinessIcon fontSize="small" sx={{ color: "primary.main" }} />
      <Typography variant="body1">{user?.department}</Typography>
    </UserInfoContainer>

    <UserInfoContainer>
      <LocalDiningIcon fontSize="small" sx={{ color: "primary.main" }} />
      <Typography variant="body1">{user?.foodPreference}</Typography>
    </UserInfoContainer>

    <Divider
      sx={{ my: 1, width: "90%", mx: "auto", bgcolor: "primary.main" }}
    />
  </Box>
);

export default UserInfoSection;
