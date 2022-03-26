import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import Weapons from "../assets/data/weaponlist.json"
import GetRandomMonster from "../generators/monster";

export default function Generators() {
    return (
      <Container maxWidth="md">
        <Typography variant="h3">Generators</Typography>
        <details>
          <summary className="generator-title">Random Monster Generator</summary>
          <GetRandomMonster />
        </details>
        <details>
          <summary className="generator-title">Random Item Generator</summary>
          <GetRandomMonster />
        </details>
      </Container>
    );
  }
