import $ from "jquery";

/**
 * Describes a Projecct
 * @class
 * @property  {string} imageName
 * @property  {jQuery} link
 * @property  {JQuery<HTMLElement>} title
*/
export class Project {
  imageName = ''
  link = null
  title = $("<h3/>")
  /**
    * @constructs Project
    * @param  {string} imageName
    * @param  {string} title
    * @param  {string} link
    * @description By building a Project the raw string data from the file will be added to the jQuery elements
    */
  constructor(imageName, title, link) {
    this.imageName = imageName
    this.title = this.title.text(title)
    this.link = $("<a/>").addClass('project-grid-item-link').attr(link ? {
      'target': '_blank',
      'href': link
    } : {})
  }
  /**
   * @function getImagePath 
   * @memberof Project
   * @returns {Promise<string>}
   */
  get getImagePath() {
    const image = this.importBackgroundImage(this.imageName)
    return image
  }

  /**
 * Imports an image on-the-fly
 * @param  {string} imageName - Filename of image
 * @return {Promise<string>} - Promise of string  
 */
  importBackgroundImage = async (imageName) => {
    if (imageName.length) {
      const { default: imagePath } = await import(`../../../images/${imageName}`);
      return imagePath
    }
  }
}