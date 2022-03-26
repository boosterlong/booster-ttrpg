import { Container, Typography, Button } from "@mui/material"
import { getRandomInt, getScoreBonusString } from "../assets/js/global.js";
import { useState } from "react";
import ShieldIcon from '@mui/icons-material/Shield';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HikingIcon from '@mui/icons-material/Hiking';
import PoolIcon from '@mui/icons-material/Pool';
import FlightIcon from '@mui/icons-material/Flight';

export default function GetRandomMonster() {

  const [monster, setMonster] = useState('')

  async function getRandomMonster() {
    const response = await fetch('https://blakechartrand.com/5e-SRD-Monsters.json');
    const monster = await response.json();
    const monsterStatBlock = monster[getRandomInt(monster.length)];
    return monsterStatBlock
  }

  async function randomlyGenerateMonster() {
    let randoMonster = await getRandomMonster()
    let actions, specialAbilities, walk, climb, swim, fly = null
    try {
      specialAbilities = randoMonster.special_abilities.map(ability =>
          <div className="ability-desc">
            <Typography variant="h6">
              {ability.name}
            </Typography>
            <Typography variant="body1">
              {ability.desc}
            </Typography>
            </div>)
    } catch
    { specialAbilities = 'No special abilities.'}

    try {
      actions = randoMonster.actions.map(actions =>
          <div className="ability-desc">
            <Typography variant="h6">
              {actions.name}
            </Typography>
            <Typography variant="body1">
              {actions.desc}
            </Typography>
            </div>)
    } catch
    { actions = 'Could not load action data.'}

    if (randoMonster.speed.walk) {
      walk = randoMonster.speed.walk
    } else {
      walk = '0 ft.'
    }

    if (randoMonster.speed.climb) {
      climb = randoMonster.speed.climb
    } else {
      climb = '0 ft.'
    }

    if (randoMonster.speed.swim) {
      swim = randoMonster.speed.swim
    } else {
      swim = '0 ft.'
    }

    if (randoMonster.speed.fly) {
      fly = randoMonster.speed.fly
    } else {
      fly = '0 ft.'
    }

    setMonster(
    <div>
{/* Name / Type / HP / AC */}
      <Typography variant="h5">
        {randoMonster.name}
      </Typography>
      <Typography className="capitalize" variant="subtitle2">
        {randoMonster.size} {randoMonster.type}
      </Typography>
      <Typography className="capitalize" variant="subtitle2">
        {randoMonster.alignment} {randoMonster.subtype}
      </Typography>
      <Typography className="inline-center v-padding-1" variant="h5">
        {randoMonster.hit_points}<HealthAndSafetyIcon /> {randoMonster.armor_class}<ShieldIcon />
      </Typography>
      <Typography className="inline-center v-padding-1" variant="h6">
        |{walk}<DirectionsRunIcon />|
        {climb}<HikingIcon />|
        {swim}<PoolIcon />|
        {fly}<FlightIcon />|
      </Typography>
{/* Ability Scores */}
      <Typography style={{display:'flex',flexDirection:'row'}} variant="subtitle1">
        <span className="stat-box tooltip"><span>Str</span>{getScoreBonusString(randoMonster.strength)}
          <span className="tooltiptext">{randoMonster.strength}</span>
        </span>
        <span className="stat-box tooltip"><span>Dex</span>{getScoreBonusString(randoMonster.dexterity)}
          <span className="tooltiptext">{randoMonster.dexterity}</span>
        </span>
        <span className="stat-box tooltip"><span>Con</span>{getScoreBonusString(randoMonster.constitution)}
          <span className="tooltiptext">{randoMonster.constitution}</span>
        </span>
        <span className="stat-box tooltip"><span>Wis</span>{getScoreBonusString(randoMonster.wisdom)}
          <span className="tooltiptext">{randoMonster.wisdom}</span>
        </span>
        <span className="stat-box tooltip"><span>Int</span>{getScoreBonusString(randoMonster.intelligence)}
          <span className="tooltiptext">{randoMonster.intelligence}</span>
        </span>
        <span className="stat-box tooltip"><span>Cha</span>{getScoreBonusString(randoMonster.charisma)}
          <span className="tooltiptext">{randoMonster.charisma}</span>
        </span>
      </Typography>
{/* Attacks */}
      <Typography>
        {actions}
      </Typography>
      <Typography>
        {specialAbilities}
      </Typography>
    </div>)
  }

  return (
    <Container className="generator-card" maxWidth="md">
      {monster}
      <Button variant="contained" onClick={()=> randomlyGenerateMonster()}>Generate Random Monster</Button>
    </Container>)
}
