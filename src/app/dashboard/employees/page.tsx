"use client";
import React from "react";
import DashboardLayout from "../dashboardLayout";
import SearchField from "./employeesComponents/SearchField";
import EmployeeDataGrid from "./employeesComponents/EmployeeDataGrid";
import { Box } from "@mui/material";
import { useEmployeeContext } from "@/context/EmployeeContext";

export default function EmployeesPage() {
  const { user, filteredEmployees, setSearchTerm, handleLogout } =
    useEmployeeContext();

  return (
    <DashboardLayout user={user} onLogout={handleLogout} isGrid={true}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <SearchField
            searchTerm=""
            handleSearch={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <EmployeeDataGrid employees={filteredEmployees} activeUser={user} />
        </Box>
      </Box>
    </DashboardLayout>
  );
}
