/**
 * Describes a SkillCardGrid
 * @class
 * @property  {jQuery<div>} skillCardGrid
*/
export class SkillCardGrid {
  skillCardGrid = $("<div/>")

  /**
   * @constructs SkillCardGrid
   * @param  {string} category
   * @param  {string[][]} gridOnetechnologies
   * @param  {string[][]} gridTwotechnologies
   * @param  {Object} ratings
   * @param  {number} maxRating
   * @description By building the SkillCardGrid all the raw string data is added inside jQuery elements
   */
  constructor(
    category,
    gridOnetechnologies,
    gridTwotechnologies,
    ratings,
    maxRating
  ) {
    this.skillCardGrid.addClass('skill-card-grid')
      .append($("<h2/>").addClass('skill-grid-header').text(category))
      .append([gridOnetechnologies, gridTwotechnologies].map((technologies) => $("<div/>").addClass('skill-grid-item')
        .append($('<ul/>').addClass('skill-list')
          .append(technologies.map(([technologie, rating]) =>
            $("<li/>").addClass('skill-row')
              .append($("<div/>").addClass('skill-text').text(technologie))
              .append(() => {
                const fillUp = $("<div/>").addClass(ratings[rating])
                for (let i = 0; i < maxRating; i++) {
                  fillUp.append($("<div/>").addClass('circle-container'))
                }
                return fillUp
              })
          ))
        )
      ))

  }
  /**
   * @function getSkillCardGrid 
   * @memberof SkillCardGrid
   * @returns {JQuery<HTMLElement>} The skillCardGrid itself
   */
  get getSkillCardGrid() {
    return this.skillCardGrid;
  }
}

/**
 * @constant skillCirclesCSSClasses 
 * @memberof SkillCardGrid
 * The skillCirclesCSSClasses itself
 */
export const skillCirclesCSSClasses = [
  document.getElementsByClassName("fill-up-five-circles"),
  document.getElementsByClassName("fill-up-four-circles"),
  document.getElementsByClassName("fill-up-three-circles"),
  document.getElementsByClassName("fill-up-two-circles"),
  document.getElementsByClassName("fill-up-one-circle"),
];