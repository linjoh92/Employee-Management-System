import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const LayoutContainer = styled(Box)({
  height: "100vh",
  display: "flex",
});

export const MainContent = styled("main")(({ theme }) => ({
  position: "relative",
  minWidth: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  padding: theme.spacing(1.5),
  paddingTop: "85px",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    paddingTop: "98px",
  },
}));

export const BreadcrumbContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 70,
  left: 12,
  [theme.breakpoints.up("sm")]: {
    top: 80,
    left: 30,
  },
}));

export const CenteredContent = styled(Box)({
  flexGrow: 1,
  paddingTop: 4,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
