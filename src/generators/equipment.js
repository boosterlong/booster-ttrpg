import { getScoreBonus } from "../assets/js/global";

export function getAC(armor, dexterity, maxDex) {
  let dexBonus = getScoreBonus(dexterity)
  if (dexBonus >= maxDex) {
    dexBonus = maxDex}
  let armorClass = armor + dexBonus
  return armorClass
}

/* export function equipWeapon(weapon, dexterity, strength, damage) {
  let dexBonus = getScoreBonus(dexterity)
  let strBonus = getScoreBonus(strength)
  return ()
}
*/
