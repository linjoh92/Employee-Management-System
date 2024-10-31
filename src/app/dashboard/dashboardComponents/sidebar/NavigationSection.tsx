import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Employee } from "@/shared/types";

type NavigationSectionProps = {
  user: Employee | null;
};

const NavigationSection = ({ user }: NavigationSectionProps) => {
  const pathname = usePathname();

  const getActiveItemColor = (path: string) => ({
    color: pathname === path ? "primary.main" : "inherit",
  });

  const getActiveIconColor = (path: string) =>
    pathname === path ? "primary" : "inherit";

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Divider />
      <List>
        {user?.role !== "Employee" && (
          <Link href="/dashboard/employees" passHref legacyBehavior>
            <ListItemButton sx={getActiveItemColor("/dashboard/employees")}>
              <ListItemIcon>
                <PeopleIcon
                  color={getActiveIconColor("/dashboard/employees")}
                />
              </ListItemIcon>
              <ListItemText primary="Employee System" />
            </ListItemButton>
          </Link>
        )}
        <Link href="/dashboard/business-card" passHref legacyBehavior>
          <ListItemButton sx={getActiveItemColor("/dashboard/business-card")}>
            <ListItemIcon>
              <BusinessIcon
                color={getActiveIconColor("/dashboard/business-card")}
              />
            </ListItemIcon>
            <ListItemText primary="Business Card" />
          </ListItemButton>
        </Link>
      </List>
      <Divider />
    </Box>
  );
};

export default NavigationSection;
