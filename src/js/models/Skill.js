/**
 * Describes a Skill
 * @class
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
}