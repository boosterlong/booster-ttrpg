import React from "react"
import { useState } from "react"
import { getMonsterStats, monsterBlock } from "./monster"
import { Container, Typography } from "@mui/material"
import { Button } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BrandingWatermarkRounded } from "@mui/icons-material"
import { getAC } from "./equipment"
import { getRandomInt } from "../assets/js/global"

const armorByWealth = (
  {
    "cheap": [
      {
        "name": "Padded Armor",
        "ac": 11,
        "max_dex": 100
      },
      {
        "name": "Leather Armor",
        "ac": 11,
        "max_dex": 100
      },
      {
        "name": "no armor",
        "ac": 8,
        "max_dex": 100
      },
      {
        "name": "Animal Skins",
        "ac": 12,
        "max_dex": 2
      }
    ],
    "rich": [
      {
        "name": "Fine Studded Leather Armor",
        "ac": 12,
        "max_dex": 100
      },
      {
        "name": "Elegant Halfplate",
        "ac":14,
        "max_dex": 3
      },
      {
        "name": "Full Plate",
        "ac":18,
        "max_dex": 0
      },
      {
        "name": "Enchanted Travelling Clothes",
        "ac":15,
        "max_dex": 2
      }
    ],
    "legendary": [
      {
        "name": "Crystal Armor",
        "ac": 18,
        "max_dex": 3,
        "desc": "This crystal armor shimmers in the light."
      },
      {
        "name": "+2 Full Plate",
        "ac": 20,
        "max_dex": 0 
      },
      {
        "name": "Demonskin Leather Armor",
        "ac": 16,
        "max_dex": 100,
        "desc": "This armor stitched from the hide of a demon grants resistance to fire damage."
      },
      {
        "name": "Chimeric Hide Armor",
        "ac": 17,
        "max_dex": 4,
        "desc": "This armor is patched together from various mythical beasts."
      }
    ],
  }
  )

export function WealthyMonster(race) {

  const [selectRace, setSelectRace] = useState('');
  const [wealthLevel, setWealthLevel] = useState('');
  const [armorName, setArmorName] = useState('');
  const [armorDesc, setArmorDesc] = useState('');

  const [wealthyMonster, setWealthyMonster] = useState('');

  async function generateWealthyMonster(race, wealth) {
    let defaultSheet = await getMonsterStats(race)
    
    let armor = ''

    switch (wealth) {
      case 'poor':
        armor = armorByWealth.cheap[getRandomInt(armorByWealth.cheap.length)]
        defaultSheet.armor_class = getAC(armor.ac,defaultSheet.dexterity,armor.max_dex);
        break;
      case 'rich':
        armor = armorByWealth.rich[getRandomInt(armorByWealth.cheap.length)]
        defaultSheet.armor_class = getAC(armor.ac,defaultSheet.dexterity,armor.max_dex);
        break;
      case 'legendary':
        armor = armorByWealth.legendary[getRandomInt(armorByWealth.cheap.length)]
        defaultSheet.armor_class = getAC(armor.ac,defaultSheet.dexterity,armor.max_dex);
      }

    let processedSheet = monsterBlock(defaultSheet)
    setWealthyMonster(processedSheet)
    setArmorName(armor.name)
    try {
      setArmorDesc(armor.desc)
    } catch {
      return
    }
  }

  const handleRaceChange = (event) => {
    setSelectRace(event.target.value);
  };
  const handleWealthChange = (event) => {
    setWealthLevel(event.target.value);
  };


  return (
    <Container className="card" maxWidth="md">
      <div style={{backgroundColor:'white',padding:'1rem',borderRadius:'10px'}}>
      <FormControl style={{width:'120px'}} >
        <InputLabel id="race">Race</InputLabel>
        <Select
          labelId="race-label"
          id="race-select"
          value={selectRace}
          label="Race"
          onChange={handleRaceChange}
        >
          <MenuItem value={'orc'}>Orc</MenuItem>
          <MenuItem value={'gnoll'}>Gnoll</MenuItem>
          <MenuItem value={'bugbear'}>Bugbear</MenuItem>
        </Select>
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
      <Typography sx={{ fontStyle: 'italic' }}>A {selectRace} clad in {armorName}. {armorDesc}</Typography>
      {wealthyMonster}
    </Container>)
}
