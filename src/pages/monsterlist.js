import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MonsterList() {

  const [ monsters, setMonsters ] = useState('Pizza')

  async function getMonsterList() {
    const response = await fetch('https://blakechartrand.com/5e-SRD-Monsters.json');
    const monsterList = await response.json();
    const filteredNames = await monsterList.map(item => {
      return <Link className="monster-list-item" to={item.index}>{item.name}</Link>
    })
    setMonsters(filteredNames)
  }

  getMonsterList()

  return (<div className='monster-list-container'>
      {monsters}
    </div>)
}
