"use client";
import React, { useState, useEffect } from "react";
import { DataGrid, GridRowModesModel, GridRowModes } from "@mui/x-data-grid";
import { useMediaQuery, Theme } from "@mui/material";
import { Employee } from "@/shared/types";
import { getColumns } from "./EmplyeeColumns";

type EmployeeDataGridProps = {
  employees: Employee[];
  activeUser: Employee | null;
};

export default function EmployeeDataGrid({
  employees,
  activeUser,
}: EmployeeDataGridProps) {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [updatedEmployees, setUpdatedEmployees] =
    useState<Employee[]>(employees);

  const isTabletOrLarger = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  useEffect(() => {
    setUpdatedEmployees(employees);
  }, [employees]);

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employeesData");
    if (savedEmployees) setUpdatedEmployees(JSON.parse(savedEmployees));
  }, []);

  const saveToLocalStorage = (newEmployees: Employee[]) => {
    localStorage.setItem("employeesData", JSON.stringify(newEmployees));
  };

  const processRowUpdate = (newRow: Employee) => {
    const updatedEmployee = updatedEmployees.map((emp) =>
      emp.id === newRow.id ? { ...newRow } : emp
    );
    setUpdatedEmployees(updatedEmployee);
    saveToLocalStorage(updatedEmployee);
    return newRow;
  };

  const handleEditClick = (id: number) =>
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  const handleSaveClick = (id: number) =>
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  const handleCancelClick = (id: number) =>
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

  const canViewAllEmployees =
    activeUser?.role === "Admin" || activeUser?.role === "Manager";
  const canEdit = activeUser?.role === "Admin";
  const displayEmployees = canViewAllEmployees
    ? updatedEmployees
    : updatedEmployees.filter((emp) => emp.id === activeUser?.id);

  return (
    <div style={{ overflowX: "auto", height: "100%" }}>
      <DataGrid
        rows={displayEmployees}
        columns={getColumns(
          isTabletOrLarger,
          canEdit,
          canViewAllEmployees,
          rowModesModel,
          handleEditClick,
          handleSaveClick,
          handleCancelClick
        )}
        getRowId={(row: Employee) => row.id}
        rowModesModel={rowModesModel}
        processRowUpdate={processRowUpdate}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        pagination
        sx={{
          flexGrow: 1,
          height: "100%",
          minWidth: 600,
          "& .MuiDataGrid-virtualScroller": {
            minHeight: "100%",
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
}
