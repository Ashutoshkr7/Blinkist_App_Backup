import Template from "./component/template/Template";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/mainTheme";
// import { useAuth0 } from "@auth0/auth0-react";
import Button from "./component/atom/Button";
// import CircularProgress from "@mui/material/CircularProgress";
const App = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      {/* <Button
        size="medium"
        label="Log in"
        variant="contained"
        color="success"
        sx={{ position: "absolute", top: "48vh", left: "48vw" }}
      /> */}
      <Template />
    </>
    //  <>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //     <Button
    //       size="medium"
    //       label="Log in"
    //       variant="contained"
    //       color="success"
    //       sx={{ position: "absolute", top: "48vh", left: "48vw" }}
    //     />
    //     <Template />
    //   </ThemeProvider>
    // </>
  );
};

export default App;
