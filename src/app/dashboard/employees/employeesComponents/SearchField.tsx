import React from "react";
import { TextField } from "@mui/material";
interface SearchFieldProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchField({
  searchTerm,
  handleSearch,
}: SearchFieldProps) {
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
