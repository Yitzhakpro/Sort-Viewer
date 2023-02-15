import { createTheme, ThemeProvider } from "@mui/material/styles";
import teal from "@mui/material/colors/teal";

const theme = createTheme({
  palette: {
    primary: teal,
  },
});

interface ICustomThemeProvider {
  children?: React.ReactNode | React.ReactNode[];
}

function CustomThemeProvider(props: ICustomThemeProvider): JSX.Element {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
