import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Generators from "./components/generators";
import Dice from "./components/dice";
import Home from "./components/home";
import "./assets/css/global.css";
import { Button } from "@mui/material";
import SingleMonster from "./pages/singlemonster";
import MonsterList from "./pages/monsterlist";
import DonationMachine from "./components/donationmachine"

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
          <Route path="monsters" element={<MonsterList />} />
          <Route
            path="monsters/:id"
            element={<SingleMonster />}
          />
          <Route path="donate" element={<DonationMachine />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  rootElement
);
