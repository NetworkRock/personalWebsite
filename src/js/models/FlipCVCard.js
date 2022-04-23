/**
 * Describes a FlipCVCard
 * @class
 * @property  {jQuery<div>} flipCVCard
*/
export class FlipCVCard {
  flipCVCard = $("<div/>")
  /**
   * @constructs FlipCVCard
   * @param  {number} index
   * @param  {string} cardID
   * @param  {JQuery<HTMLElement>} company
   * @param  {JQuery<HTMLElement>} technologies
   * @param  {JQuery<HTMLElement>} project1
   * @param  {JQuery<HTMLElement>} project2
   * @description By building the FlipCVCard all the raw string data is added inside jQuery elements
   */
  constructor(
    index,
    cardID,
    company,
    role,
    technologies,
    project1,
    project2
  ) {
    this.flipCVCard
      .addClass('flip-card')
      .addClass(index === 0 ? 'flip-card-show' : '')
      .attr("id", cardID)
      .append(
        $("<div/>")
          .addClass('flip-card-inner')
          .append($("<div/>").addClass('flip-card-front')
            .append(company)
            .append(role)
          )
          .append($("<div/>").addClass('flip-card-back')
            .append($("<h2/>").text('Projects'))
            .append(project1)
            .append($("<br/>").append(technologies))
            .append(project2)
            .append($("<h2/>").text('Technologies'))
            .append(technologies)
          )
      )
  }
  /**
   * @function getFlipCVCard 
   * @memberof FlipCVCard
   * @returns {JQuery<HTMLElement>} The flipCVCard itself
   */
  get getFlipCVCard() {
    return this.flipCVCard;
  }
}