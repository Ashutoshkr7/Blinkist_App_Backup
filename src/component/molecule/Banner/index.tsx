import Image from "../../atom/Image";
import Typography from "../../atom/Typography";
import { Box } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((themes) => ({
  parent: {
    backgroundColor: "#F1F6F4",
    width: "auto",
    display: "flex",
    padding: "4.93%",
    boxSizing: "border-box",
    justifyContent: "center",
    margin: "auto",
  },
  [themes.breakpoints.down("sm")]: {
    heading: {
      fontSize: "20px",
    },
    para: {
      fontSize: "13px",
      fontWeight: "400",
    },
    image: {
      width: 250,
      height: 250,
    },
  },
}));

const BannerComponent = ({ heading, discription, img }: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.parent}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold" }}
          className={classes.heading}
          data-testid="heading"
        >
          {heading}
        </Typography>
        <Typography
          sx={{ color: "gray" }}
          className={classes.para}
          data-testid="discription"
        >
          {discription}
        </Typography>
      </Box>
      <Image src={img} className={classes.image} />
    </Box>
  );
};

export default BannerComponent;
