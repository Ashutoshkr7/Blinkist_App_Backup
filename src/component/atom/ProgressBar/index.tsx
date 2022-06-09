import { LinearProgress } from "@mui/material";

const ProgressBarComponent = ({ value, ...props }: any) => {
  return (
    <LinearProgress
      value={!value ? 0 : value}
      {...props}
      sx={{
        height: "15px",
        opacity: "0.5",
        borderRadius: "0px 0px 10px 10px",
        backgroundColor: "#DFE8F6",
      }}
      variant="determinate"
      data-testid="progress-bar"
    />
  );
};

export default ProgressBarComponent;
