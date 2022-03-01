import $ from "jquery";
import Papa from "papaparse"

import projects from '../../csv/projects.csv'

const buildProjects = async () => {

  const importBackgroundImage = async (image) => {
    const { default: imagePath } = await import(`../../images/${image}`);
    return imagePath
  }

  Papa.parse(projects, {
    download: true,
    complete: async ({ data }) => {
      for (const project of data) {
        const [description, imageName, websiteLink] = project
        const projectImage = imageName.length ? await importBackgroundImage(imageName) : null
        $('#project-grid').append(
          $("<div/>")
            .addClass('project-grid-item')
            .css('background-image', `url(${projectImage})`)
            .append($("<div/>").addClass('project-overlay')
              .append($("<div/>").addClass('project-text')
                .append($("<h3/>").text(description))))
            .append($("<a/>").addClass('project-grid-item-link').attr(websiteLink ? {
              'target': '_blank',
              'href': websiteLink
            } : {})))
      }
    }
  });
}

export default buildProjects