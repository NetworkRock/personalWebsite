import $ from "jquery";
/**
 * Describes a ProjectGridItem
 * @class
 * @property  {jQuery<div>} projectGridItem
*/
export class ProjectGridItem {
  projectGridItem = $("<div/>")
  /**
   * @constructs ProjectGridItem
   * @param  {string} backgroundImagePath
   * @param  {string} title
   * @param  {string} link
   * @description By building the ProjectGridItem all the raw string data is added inside jQuery elements
   */
  constructor(backgroundImagePath, title, link) {
    this.projectGridItem
      .addClass('project-grid-item')
      .css('background-image', `url(${backgroundImagePath})`)
      .append($("<div/>").addClass('project-overlay')
        .append($("<div/>").addClass('project-text')
          .append(title)))
      .append(link)
  }
  /**
   * @function getProjectItem 
   * @memberof ProjectGridItem
   * @returns {JQuery<HTMLElement>} The flipCVCard itself
   */
  get getProjectItem() {
    return this.projectGridItem;
  }
}