import { styled } from "@mui/system";
import { Drawer as MuiDrawer, Box, Typography } from "@mui/material";

export const StyledDrawer = styled(MuiDrawer)<{ drawerWidth: number }>(
  ({ theme, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      paddingBottom: theme.spacing(1),
      boxSizing: "border-box",
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  })
);

export const StyledRoleBadge = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: 12,
  fontWeight: 700,
  color: theme.palette.text.light,
  backgroundColor: theme.palette.text.secondary,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  letterSpacing: 1.5,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 5,
  width: "fit-content",
  marginX: "auto",
}));

export const UserInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  margin: theme.spacing(1, 0),
  width: "90%",
}));
