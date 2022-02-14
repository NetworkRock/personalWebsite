async function buildProjects() {
  Papa.parse("../csv/projects.csv", {
    download: true,
    complete: ({ data }) => {
      for (const project of data) {
        const [description, imageName, websiteLink] = project
        console.log(description, imageName)
        const projectGridItem = document.createElement('div')
        projectGridItem.classList.add('project-grid-item')
        projectGridItem.style.backgroundImage = `url("../images/${imageName}")`
        const projectGridItemLink = document.createElement('a')
        projectGridItemLink.classList.add('project-grid-item-link')
        if(websiteLink) {
          projectGridItemLink.setAttribute('target', '_blank')
          projectGridItemLink.setAttribute('href', websiteLink)
        }

        const projectOverlay = document.createElement('div')
        projectOverlay.classList.add('project-overlay')

        const projectTextContainer = document.createElement('div')
        projectTextContainer.classList.add('project-text')

        const projectTextElement = document.createElement('h3')

        const projectDescriptionText = document.createTextNode(description)
        

        projectTextElement.appendChild(projectDescriptionText)
        projectTextContainer.appendChild(projectTextElement)
        projectOverlay.appendChild(projectTextContainer)

        projectGridItem.appendChild(projectOverlay)
        projectGridItem.appendChild(projectGridItemLink)

        const projectGrid = document.getElementById('project-grid')
        projectGrid.appendChild(projectGridItem)
      }

    }
  });
}


buildProjects();