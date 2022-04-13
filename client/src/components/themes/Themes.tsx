import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactElement } from "react";

export function Themes(props: { children: ReactElement }) {
  const theme = createTheme({
    palette: {
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
