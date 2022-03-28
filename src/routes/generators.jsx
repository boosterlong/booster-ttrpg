import { Container, Typography } from "@mui/material";
import { RandomMonster, MonsterCard } from "../generators/monster";

export default function Generators() {
    return (
      <Container maxWidth="md">
        <Typography variant="h3">Generators</Typography>
        <details>
          <summary className="generator-title">Random Monster Generator</summary>
          <RandomMonster />
        </details>
        <details>
          <summary className="generator-title">Orc Stats</summary>
          <MonsterCard />
        </details>
      </Container>
    );
  }
