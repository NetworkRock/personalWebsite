/**
 * Describes a Skill
 * @class
 * @property  {string} technologie
 * @property  {string} rating
 * @property  {string} category
 */
export class Skill {
  technologie = null
  rating = null
  category = null
  /**
   * @constructs Skill
   * @param  {string} technologie
   * @param  {string} rating
   * @param  {string} category
   */
  constructor(technologie, rating, category) {
    this.technologie = technologie
    this.rating = rating
    this.category = category
  }


  /**
 * This validateSkills function is checking if the file input is valid for a skill card object which gets later build by the constructor.
 * @function validateSkills 
 * @memberof Skill
 * @param  {Object[]} skills
 * @returns {Boolean}
 */
  static validateSkills(skills) {
    const isSkill = skills.filter((skill) => ('category' in skill && 'rating' in skill && 'technologie' in skill)
      && Object.keys(skill).length === 3)
    return isSkill.length > 0
  }
}