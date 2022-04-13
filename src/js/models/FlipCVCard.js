import $ from "jquery";
export class FlipCVCard {
  flipCVCard = $("<div/>")
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
  get getFlipCVCard() {
    return this.flipCVCard;
  }
}