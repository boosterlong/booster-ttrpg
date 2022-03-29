import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function MonsterList() {

  const [ monsters, setMonsters ] = useState('Loading, please wait.')

  async function getMonsterList() {
    const response = await fetch('https://blakechartrand.com/5e-SRD-Monsters.json');
    const monsterList = await response.json();
    const filteredNames = await monsterList.map(item => {
      return <Link className="monster-list-item" to={item.index}>
          <Typography variant="body1">
            {item.name}
          </Typography>
        </Link>
    })
    setMonsters(filteredNames)
  }

  getMonsterList()

  return (<div className='monster-list-container'>
      {monsters}
    </div>)
}
