export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getScoreBonus(score) {
  return Math.floor((score - 10) / 2)
}

export function getScoreBonusString(bonus) {
  let bonusString = getScoreBonus(bonus)
  return (bonusString > 0 ? `+${bonusString}` : bonusString)
}
