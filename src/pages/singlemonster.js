import React from 'react';
import { useParams } from 'react-router-dom';
import { MonsterCard } from "../generators/monster";

export default function SingleMonster() {
  const page = useParams()

  return (
    <div>{MonsterCard(page.id)}</div>
  )
}
