import Box from "@mui/material/Box";
const IconComponent = ({ icon, ...props }: any) => {
  return (
    <Box {...props} sx={{ padding: "0px" }}>
      {icon}
    </Box>
  );
};

export default IconComponent;
