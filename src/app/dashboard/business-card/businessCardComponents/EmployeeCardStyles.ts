/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Divider, styled } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  width: 280,
  height: 380,
  textAlign: "center",
  boxShadow: "3px 4px 0px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
}));

export const BackgroundCircleTop = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -20,
  left: -20,
  width: 120,
  height: 120,
  backgroundColor: theme.palette.primary.light,
  borderRadius: "50%",
  zIndex: 0,
}));

export const BackgroundCircleBottom = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: -60,
  right: -30,
  width: 150,
  height: 150,
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "50%",
  zIndex: 0,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  letterSpacing: theme.spacing(0.25),
}));

export const DepartmentDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  borderColor: theme.palette.secondary.main,
  borderWidth: "2px",
  width: "70%",
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));
