"use client";

import { Button } from "@mui/material";

type BasicButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const BasicButton = ({ text, onClick, type = "button" }: BasicButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "primary.main",
        boxShadow: "none",
        color: "#fff",
        padding: "5px 35px",
        borderRadius: "50px",
        textTransform: "none",
        transition:
          "transform 0.2s ease-in-out, background-color 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "primary.dark",
          boxShadow: "none",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default BasicButton;
