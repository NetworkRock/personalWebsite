import { Skill } from "./Skill";

/**
 * Describes a SkillMap
 * @class
 * @property  {Object} skillMap
*/
export class SkillMap {
  skillMap = {}
  /**
   * @constructs SkillMap
   * @param  {Skill[]} skills
   * @description By building the SkillMap we create from the skills itself a better data structure for iterating later
   * over this map. See {@link CSVBuilder.SkillBuilder}
   */
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