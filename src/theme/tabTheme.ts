import { createTheme } from "@mui/material/styles";
const tabTheme = createTheme({
  palette: {
    secondary: {
      main: "#2CE080",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          alignItems: "flex-start !important",
          "&.Mui-selected": {
            color: "#03314B",
            fontSize: "16px",
            lineHeight: "20.11px",
            weight: "400",
            borderBottom: "2px solid #2CE080",
            padding: "0px",
          },
        },
      },
    },
  },
});

export default tabTheme;
