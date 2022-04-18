import React from "react"
import { useState } from "react"
import { getMonsterStats, monsterBlock } from "./monster"
import { Container, Typography } from "@mui/material"
import { Button } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAC } from "./equipment"
import { getRandomInt } from "../assets/js/global"
import { armorByWealth } from "../assets/data/equipmentbywealth"
import { weaponsByWealth } from "../assets/data/equipmentbywealth"

const raceOptions = ['orc', 'gnoll', 'bugbear', 'skeleton', 'hobgoblin', 'goblin', 'kobold']

export function WealthyMonster(race) {

  const [selectRace, setSelectRace] = useState('');
  const [raceName, setRaceName] = useState('');
  const [wealthLevel, setWealthLevel] = useState('');
  const [armorName, setArmorName] = useState('armor');
  const [armorDesc, setArmorDesc] = useState('');

  const [wealthyMonster, setWealthyMonster] = useState('');

  async function generateWealthyMonster(race, wealth) {
    if (selectRace && wealthLevel) {
      let defaultSheet = await getMonsterStats(race)
      let armor = ''
      let weapon = ''
      document.getElementById('output').style.display = 'block'

      switch (wealth) {
        case 'poor':
          armor = armorByWealth.cheap[getRandomInt(armorByWealth.cheap.length)]
          defaultSheet.armor_class = getAC(armor.ac,defaultSheet.dexterity,armor.max_dex);
          break;
        case 'rich':
          armor = armorByWealth.rich[getRandomInt(armorByWealth.rich.length)]
          defaultSheet.armor_class = getAC(armor.ac,defaultSheet.dexterity,armor.max_dex);
          break;
        case 'legendary':
          armor = armorByWealth.legendary[getRandomInt(armorByWealth.legendary.length)]
          defaultSheet.armor_class = getAC(armor.ac,defaultSheet.dexterity,armor.max_dex);
          defaultSheet.actions.push({name: armor.special_ability[0].name, desc: armor.special_ability[0].desc})
          weapon = weaponsByWealth.legendary[getRandomInt(weaponsByWealth.legendary.length)]
          console.log(weapon)
        }

      let processedSheet = monsterBlock(defaultSheet)
      setRaceName(race)
      setWealthyMonster(processedSheet)
      setArmorName(armor.name)
      try {
        setArmorDesc(armor.desc)
      } catch {
        return
      }
    } else {
      alert('Please pick a race and wealth level.')
    }
  }

  const handleRaceChange = (event) => {
    setSelectRace(event.target.value);
  };
  const handleWealthChange = (event) => {
    setWealthLevel(event.target.value);
  };

  const raceSelect = (
  <Select
    style={{textTransform:'capitalize'}}
    labelId="race-label"
    id="race-select"
    value={selectRace}
    label="Race"
    onChange={handleRaceChange}
  >
    {raceOptions.map((item) => {
      return <MenuItem style={{textTransform:'capitalize'}} value={item}>{item}</MenuItem>
    })}
  </Select>
  )

  return (
    <Container className="card" maxWidth="md">
      <div style={{backgroundColor:'white',padding:'1rem',borderRadius:'10px'}}>
      <FormControl style={{width:'120px'}} >
        <InputLabel id="race">Race</InputLabel>
        {raceSelect}
      </FormControl>
      <FormControl style={{width:'120px'}} >
      <InputLabel id="wealth">Wealth</InputLabel>
        <Select
          labelId="wealth-label"
          id="wealth-select"
          value={wealthLevel}
          label="Wealth"
          onChange={handleWealthChange}
        >
          <MenuItem value={'poor'}>Poor</MenuItem>
          <MenuItem value={'rich'}>Rich</MenuItem>
          <MenuItem value={'legendary'}>Legendary</MenuItem>
        </Select>
      </FormControl>
      </div>
      <Button style={{margin:'1rem'}} variant="contained" onClick={() => generateWealthyMonster(selectRace, wealthLevel)}>Generate Monster by Wealth</Button>
      <Typography id="output" style={{display:'none'}} sx={{ fontStyle: 'italic' }}>A {raceName} clad in {armorName}. {armorDesc}</Typography>
      {wealthyMonster}
    </Container>)
}
