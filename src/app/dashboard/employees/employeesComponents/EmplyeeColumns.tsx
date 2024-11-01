import { GridColDef, GridRowModesModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import AvatarIcon from "@/app/components/AvatarIcon";
import { EmployeeActions } from "./EmployeeActions";

export function getColumns(
  isTabletOrLarger: boolean,
  canEdit: boolean,
  canViewAllEmployees: boolean,
  rowModesModel: GridRowModesModel,
  handleEditClick: (id: number) => void,
  handleSaveClick: (id: number) => void,
  handleCancelClick: (id: number) => void
): GridColDef[] {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: canEdit,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          {isTabletOrLarger && <AvatarIcon name={params.value} />}
          {params.value}
        </Box>
      ),
    },
    { field: "email", headerName: "Email", flex: 1, editable: canEdit },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
      editable: canEdit,
    },
    {
      field: "foodPreference",
      headerName: "Food Preference",
      flex: 1,
      editable: canEdit,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      editable: canEdit,
    },
  ];

  if (canEdit) {
    columns.push({
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: (params) => (
        <EmployeeActions
          id={params.row.id}
          rowModesModel={rowModesModel}
          handleEditClick={handleEditClick}
          handleSaveClick={handleSaveClick}
          handleCancelClick={handleCancelClick}
        />
      ),
      sortable: false,
    });
  }

  return columns;
}
