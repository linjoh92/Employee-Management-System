import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const LoginSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  minWidth: "fit-content",
  minHeight: "100vh",
}));

export const BackgroundSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(10),
  backgroundImage: "url('/assets/bg-login.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.palette.primary.main,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
