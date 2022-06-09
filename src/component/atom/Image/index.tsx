import { Box } from "@mui/material";
const ImageComponent = (props: any) => {
  return (
    // <Box {...props} alt="not found" component="img" />
    <Box
      component="img"
      {...props}
      alt="not found"
      // src="../../../assets/Image/Logo/Blinklist_Logo.png"
    />
  );
};

export default ImageComponent;
