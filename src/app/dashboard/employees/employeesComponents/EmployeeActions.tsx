import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowModesModel } from "@mui/x-data-grid";

type EmployeeActionsProps = {
  id: number;
  rowModesModel: GridRowModesModel;
  handleEditClick: (id: number) => void;
  handleSaveClick: (id: number) => void;
  handleCancelClick: (id: number) => void;
};

export function EmployeeActions({
  id,
  rowModesModel,
  handleEditClick,
  handleSaveClick,
  handleCancelClick,
}: EmployeeActionsProps) {
  const isInEditMode = rowModesModel[id]?.mode === "edit";

  return isInEditMode ? (
    <>
      <Tooltip title="Save Changes">
        <IconButton onClick={() => handleSaveClick(id)}>
          <SaveIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cancel">
        <IconButton onClick={() => handleCancelClick(id)}>
          <CancelIcon color="secondary" />
        </IconButton>
      </Tooltip>
    </>
  ) : (
    <Tooltip title="Edit Employee">
      <IconButton onClick={() => handleEditClick(id)}>
        <EditIcon color="primary" />
      </IconButton>
    </Tooltip>
  );
}
