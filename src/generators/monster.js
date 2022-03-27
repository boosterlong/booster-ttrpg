import { Container, Typography, Button } from "@mui/material"
import { getRandomInt, getScoreBonusString } from "../assets/js/global.js";
import { useState } from "react";
import ShieldIcon from '@mui/icons-material/Shield';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HikingIcon from '@mui/icons-material/Hiking';
import PoolIcon from '@mui/icons-material/Pool';
import FlightIcon from '@mui/icons-material/Flight';

export function monsterBlock(monster) {

  let actions, specialAbilities, walk, climb, swim, fly = null

  try {
    specialAbilities = monster.special_abilities.map(ability =>
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
    actions = monster.actions.map(actions =>
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

  if (monster.speed.walk) {
    walk = monster.speed.walk
  } else {
    walk = '0 ft.'
  }

  if (monster.speed.climb) {
    climb = monster.speed.climb
  } else {
    climb = '0 ft.'
  }

  if (monster.speed.swim) {
    swim = monster.speed.swim
  } else {
    swim = '0 ft.'
  }

  if (monster.speed.fly) {
    fly = monster.speed.fly
  } else {
    fly = '0 ft.'
  }

  return (<div>
    {/* Name / Type / HP / AC / Speed */}
          <Typography variant="h5">
            {monster.name}
          </Typography>
          <Typography className="capitalize" variant="subtitle2">
            {monster.size} {monster.type}
          </Typography>
          <Typography className="capitalize" variant="subtitle2">
            {monster.alignment} {monster.subtype}
          </Typography>
          <Typography className="inline-center v-padding-1" variant="h5">
            {monster.hit_points}<HealthAndSafetyIcon /> {monster.armor_class}<ShieldIcon />
          </Typography>
          <Typography className="inline-center v-padding-1" variant="h6">
            |{walk}<DirectionsRunIcon />|
            {climb}<HikingIcon />|
            {swim}<PoolIcon />|
            {fly}<FlightIcon />|
          </Typography>
    {/* Ability Scores */}
          <Typography style={{display:'flex',flexDirection:'row'}} variant="subtitle1">
            <span className="stat-box tooltip"><span>Str</span>{getScoreBonusString(monster.strength)}
              <span className="tooltiptext">{monster.strength}</span>
            </span>
            <span className="stat-box tooltip"><span>Dex</span>{getScoreBonusString(monster.dexterity)}
              <span className="tooltiptext">{monster.dexterity}</span>
            </span>
            <span className="stat-box tooltip"><span>Con</span>{getScoreBonusString(monster.constitution)}
              <span className="tooltiptext">{monster.constitution}</span>
            </span>
            <span className="stat-box tooltip"><span>Wis</span>{getScoreBonusString(monster.wisdom)}
              <span className="tooltiptext">{monster.wisdom}</span>
            </span>
            <span className="stat-box tooltip"><span>Int</span>{getScoreBonusString(monster.intelligence)}
              <span className="tooltiptext">{monster.intelligence}</span>
            </span>
            <span className="stat-box tooltip"><span>Cha</span>{getScoreBonusString(monster.charisma)}
              <span className="tooltiptext">{monster.charisma}</span>
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

export function RandomMonster() {

  const [randomMonster, setRandomMonster] = useState('')

  async function getRandomMonster() {
    const response = await fetch('https://blakechartrand.com/5e-SRD-Monsters.json');
    const monster = await response.json();
    const monsterData = monster[getRandomInt(monster.length)];
    return monsterData
  }

  async function randomlyGenerateMonster() {
    let randoMonster = await getRandomMonster()
    setRandomMonster(monsterBlock(randoMonster)
    )
  }

  return (
    <Container className="generator-card" maxWidth="md">
      {randomMonster}
      <Button variant="contained" onClick={()=> randomlyGenerateMonster()}>Generate Random Monster</Button>
    </Container>)
}

export function MonsterCard(name) {

  const [monster, setMonster] = useState('')

  async function nameToIndex(name) {
    const response = await fetch('https://blakechartrand.com/5e-SRD-Monsters.json');
    const monsterList = await response.json();
    const result = await monsterList.findIndex(x => x.index === name)
    console.log(result)
    return result
  }
  
  async function getMonster(index) {
    const response = await fetch('https://blakechartrand.com/5e-SRD-Monsters.json');
    const monster = await response.json();
    const monsterData = monster[index];
    return monsterData
  }

  async function generateMonster(name) {
    let index = await nameToIndex(name)
    let monster = await getMonster(index)
    setMonster(monsterBlock(monster))
  }

  return(
    <Container className="generator-card" maxWidth="md">
    {monster}
    <Button variant="contained" onClick={()=> generateMonster(name)}>Generate Random Monster</Button>
  </Container>)
}