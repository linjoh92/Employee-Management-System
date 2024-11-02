import { TextField, InputAdornment } from "@mui/material";
import React from "react";

type InputFieldProps = {
  id: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
};

export default function InputField({
  id,
  placeholder,
  type,
  value,
  onChange,
  icon,
}: InputFieldProps) {
  return (
    <TextField
      required
      id={id}
      placeholder={placeholder}
      type={type}
      variant="filled"
      fullWidth
      value={value}
      onChange={onChange}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        },
      }}
      sx={{
        mb: 2,
        "& .MuiFilledInput-root": {
          fontSize: 14,
          backgroundColor: "transparent",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-focused": {
            backgroundColor: "transparent",
          },
        },
      }}
    />
  );
}
