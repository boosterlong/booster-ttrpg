import React from "react"
import { useState } from "react"
import { generateMonster } from "./monster"
import { Container } from "@mui/material"
import { Button } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function WealthyMonster(race) {

  const [selectRace, setSelectRace] = useState('');

  const [wealthyMonster, setWealthyMonster] = useState('')

  async function generateWealthyMonster(race) {
    const baddy =  await generateMonster(race)
    setWealthyMonster(baddy)
  }

  const handleChange = (event) => {
    setSelectRace(event.target.value);
  };

  return (
    <Container className="card" maxWidth="md">
      <div style={{backgroundColor:'white',padding:'1rem',borderRadius:'10px'}}>
      <FormControl style={{width:'120px'}} >
        <InputLabel id="race">Race</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectRace}
          label="Race"
          onChange={handleChange}
        >
          <MenuItem value={'orc'}>Orc</MenuItem>
          <MenuItem value={'gnoll'}>Gnoll</MenuItem>
          <MenuItem value={'bugbear'}>Bugbear</MenuItem>
        </Select>
      </FormControl>
      </div>
      {wealthyMonster}
      <Button variant="contained" onClick={() => generateWealthyMonster(selectRace)}>Generate Monster by Wealth</Button>
    </Container>)
}
