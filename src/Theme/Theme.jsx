import { createTheme, ThemeProvider } from "@mui/material";
// eslint-disable-next-line
export default function Theme({ mode, children }) {
    const theme = createTheme({
        typography: {},
        palette: {
            text: {
                1000: `${mode === "light" ? "#111827" : "#FFFFFF"}`,
                900: "#616161",
                800: "#424242",
                700: "#686868",
                600: "#757575",
                500: "#1E2532",
                400: "#828BA2",
                300: "#E0E0E0",
                200: "#EEEEEE",
                100: "#F5F5F5",
                50: "#FAFAFA",
            },
            primary: {
                light: "#8097AD",
                main: "#254E75",
                dark: "#0D3B66",
            },
        },
    });
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}