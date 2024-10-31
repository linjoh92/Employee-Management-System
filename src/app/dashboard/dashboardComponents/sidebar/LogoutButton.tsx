import React from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";

type LogoutButtonProps = {
  onLogout: () => void;
};

const LogoutButton = ({ onLogout }: LogoutButtonProps) => (
  <Box sx={{ mt: 1 }}>
    <ListItemButton onClick={onLogout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </Box>
);

export default LogoutButton;
