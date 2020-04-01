import { Skill } from "../types/Skill";

export function skillDots(skill: Skill): number[] {
  return new Array(5).fill(1).map((size, i) => {
    const modifier = 5 - skill.strength - i;
    return 1 - (modifier > 0 ? modifier : 0) * 0.2;
  });
}
