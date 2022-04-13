import $ from "jquery";
export class Project {
  imageName = ''
  link = null
  title = $("<h3/>")
  constructor(imageName, title, link) {
    this.imageName = imageName
    this.title = this.title.text(title)
    this.link = $("<a/>").addClass('project-grid-item-link').attr(link ? {
      'target': '_blank',
      'href': link
    } : {})
  }

  get getImagePath() {
    const image = this.importBackgroundImage(this.imageName)
    return image
  }
  get getProjectTitle() {
    return this.title;
  }
  get getProjectLink() {
    return this.link;
  }

  /**
 * Imports an image on-the-fly
 * @param  {string} imageName - Filename of image
 * @return {Promise<string>} - Promise of string  
 */
  importBackgroundImage = async (imageName) => {
    if(imageName.length) {
      const { default: imagePath } = await import(`../../../images/${imageName}`);
      return imagePath
    }
  }
}