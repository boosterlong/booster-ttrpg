import { Container, Typography, Button } from "@mui/material"
import { getRandomInt } from "../routes/generators";
import { useState } from "react";

export default function GetRandomMonster() {

  const [monster, setMonster] = useState('Bart Harley Jarvis')

  async function getRandomMonster() {
    const response = await fetch('https://www.dnd5eapi.co/api/monsters/');
    const monster = await response.json();
    const name = monster.results[getRandomInt(monster.count)].index;
    const response2 = await fetch(`https://www.dnd5eapi.co/api/monsters/${name}`);
    const monsterStatBlock = await response2.json();
    return monsterStatBlock
  }

  async function randomlyGenerateMonster() {
    let randoMonster = await getRandomMonster()
    setMonster(
    <div><Typography variant="h6">{randoMonster.name}</Typography>{randoMonster.size} {randoMonster.type}<br />{randoMonster.hit_points} HP | {randoMonster.armor_class} AC</div>)
  }

  return (
    <Container className="generator-card" maxWidth="md">
      {monster}
      <Button variant="contained" onClick={()=> randomlyGenerateMonster()}>Generate Random Monster</Button>
    </Container>)
}
