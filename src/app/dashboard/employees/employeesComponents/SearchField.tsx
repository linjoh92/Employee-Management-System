import React from "react";
import { TextField } from "@mui/material";
import { useEmployeeContext } from "@/context/EmployeeContext"; // Adjust path if needed

export default function SearchField() {
  const { searchTerm, setSearchTerm } = useEmployeeContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      label="Search by name, department or role"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}
