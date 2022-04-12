import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Themes(props) {
  const theme = createTheme({
    pallet: {
      primary: {
        main: "#B5783F",
        contrastText: "#542916",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
