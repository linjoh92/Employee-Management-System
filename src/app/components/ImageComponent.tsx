import { Box } from "@mui/material";

type BasicButtonProps = {
  src: string;
  alt?: string;
  width: number;
  opacity?: number;
};

const ImageComponent = ({
  src,
  alt = src,
  width,
  opacity = 1,
}: BasicButtonProps) => {
  return (
    <Box
      component="img"
      src={`/assets/${src}`}
      alt={alt}
      sx={{ width, opacity }}
    />
  );
};

export default ImageComponent;
