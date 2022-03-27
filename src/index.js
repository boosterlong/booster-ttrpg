import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Generators from "./routes/generators";
import Dice from "./routes/dice";
import Home from "./routes/home";
import "./assets/css/global.css";
import { Button } from "@mui/material";
import SingleMonster from "./pages/singlemonster";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="generators" element={<Generators />} />
          <Route path="dice" element={<Dice />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <Button variant="outlined">There's nothing here!</Button>
              </main>
            }
          />
          <Route
            path="monster/:id"
            element={<SingleMonster />}
          />
        </Route>
      </Routes>
    </BrowserRouter>,
  rootElement
);