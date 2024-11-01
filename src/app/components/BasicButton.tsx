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
        fontWeight: 700,
        letterSpacing: 0.3,
        boxShadow: "none",
        color: "#fff",
        textTransform: "none",
        padding: "7px 40px",
        borderRadius: "50px",
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
