import { Skill } from "../types/Skill";

export function skillDots(skill: Skill): boolean[] {
  return new Array(5).fill(1).map((size, i) => {
    const modifier = 5 - skill.strength - i;
    return modifier <= 0;
  });
}
