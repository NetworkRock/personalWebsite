import $ from "jquery";
export class SkillCardGrid {
  skillCardGrid = $("<div/>")
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
  get getSkillCardGrid() {
    return this.skillCardGrid;
  }
}