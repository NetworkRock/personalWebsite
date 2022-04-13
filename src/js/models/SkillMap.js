import $ from "jquery";
import { Skill } from "./Skill";
export class SkillMap {
  skillMap = {}
  constructor(skills) {
    Object.values(skills).forEach((skillData) => {
      const skill = new Skill(
        skillData.technologie,
        skillData.rating,
        skillData.category
      )
      this.skillMap = {
        ...this.skillMap,
        [skill.category]: {
          [skill.technologie]: skill.rating,
          ...this.skillMap[skill.category]
        },
      }
    })
  }
}