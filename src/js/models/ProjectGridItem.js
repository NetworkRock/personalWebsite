import $ from "jquery";
export class ProjectGridItem {
  _projectGridItem = $("<div/>")
  constructor(backgroundImagePath, title, link) {
    this._projectGridItem
      .addClass('project-grid-item')
      .css('background-image', `url(${backgroundImagePath})`)
      .append($("<div/>").addClass('project-overlay')
        .append($("<div/>").addClass('project-text')
          .append(title)))
      .append(link)
  }
  get getProjectItem() {
    return this._projectGridItem;
  }
}