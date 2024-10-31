import React from "react";
import { Avatar } from "@mui/material";
import { getInitials } from "@/shared/utils/stringUtils";

type AvatarIconProps = {
  name: string;
  bgColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

const AvatarIcon = ({
  name,
  bgColor = "primary.main",
  textColor = "text.light",
  width = 35,
  height = 35,
}: AvatarIconProps) => {
  return (
    <Avatar
      sx={{
        backgroundColor: bgColor,
        mr: 1,
        width: width,
        height: height,
        fontSize: width / 2.7,
        letterSpacing: width / 15,
        pl: width / 100,
        color: textColor,
      }}
    >
      {getInitials(name)}
    </Avatar>
  );
};

export default AvatarIcon;
