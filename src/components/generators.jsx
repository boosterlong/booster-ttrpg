import { Container, Typography } from "@mui/material";
import { RandomMonster } from "../generators/monster";
import { WealthyMonster } from "../generators/wealthymonster";

export default function Generators() {
    return (
      <Container maxWidth="md">
        <Typography variant="h4">Generators</Typography>
        <details>
          <summary className="generator-title">Random Monster Generator</summary>
          <RandomMonster />
        </details>
        <details>
          <summary className="generator-title">Wealthy Monster Generator</summary>
          <WealthyMonster />
        </details>
      </Container>
    );
  }
