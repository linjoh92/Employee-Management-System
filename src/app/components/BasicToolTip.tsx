import { Tooltip, Zoom } from "@mui/material";
import React, { ReactElement } from "react";

type BasicTooltipProps = {
  title: string;
  children: ReactElement;
};

export default function BasicTooltip({ title, children }: BasicTooltipProps) {
  return (
    <Tooltip
      title={title}
      arrow
      TransitionComponent={Zoom}
      enterTouchDelay={0}
      leaveTouchDelay={3000}
      slotProps={{
        tooltip: {
          sx: {
            borderRadius: "50px",
            padding: "8px 15px",
            color: "text.primary",
            backgroundColor: "background.paper",
            opacity: 0.9,
          },
        },
        arrow: {
          sx: {
            color: "background.paper",
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}
