import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1><a style={{textDecoration: "none"}} href="/">The Grand Tome</a></h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/generators">Random Generators</Link> |{" "}
        <Link to="/dice">Dice Roller</Link>
      </nav>
      <Outlet />
    </div>
  );
}