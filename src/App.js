import { Typography, ThemeProvider, createTheme } from "@mui/material";
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
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h3">
          <a className="unstyle" href="/">The Grand Tome</a>
        </Typography>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Typography variant="h6">
            <Link className="nav-link unstyle" to="/monsters">Monsters</Link> |{" "}
            <Link className="nav-link unstyle" to="/generators">Random Generators</Link> |{" "}
            <Link className="nav-link unstyle" to="/dice">Dice Roller</Link>
          </Typography>
        </nav>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
