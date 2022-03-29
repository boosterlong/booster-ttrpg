import { Typography, ThemeProvider, createTheme, Container } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

export default function App() {

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#1b5e20',
      },
      secondary: {
        main: '#2196f3',
      },
    },
    typography: {
      fontFamily: 'League Spartan',
      fontSize: 16,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className="main-container">
        <Typography variant="h3">
          <a className="unstyle header-title" href="/">The Grand Tome</a>
        </Typography>
        <nav>
          <Typography variant="h6">
            <Link className="nav-link unstyle" to="/monsters">Monsters</Link> |{" "}
            <Link className="nav-link unstyle" to="/generators">Random Generators</Link> |{" "}
            <Link className="nav-link unstyle" to="/dice">Dice Roller</Link>
          </Typography>
        </nav>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
