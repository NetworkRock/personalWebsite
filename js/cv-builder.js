const interactiveCV = document.getElementById('interactive-cv')
const timelineCV = document.getElementById('clickable-timeline')
let headlines = []

async function buildCV() {
  let index = 0
  Papa.parse("../cv.csv", {
    download: true,
    step: function ({ data }) {
      const row = data
      if(index !== 0) {
        const flipCard = document.createElement('div')
        flipCard.classList.add('flip-card')
        flipCard.setAttribute("id", index)
        if (index === 1) {
          flipCard.setAttribute("style", "display:inline")
        }
        const flipCardInner = document.createElement('div')
        flipCardInner.classList.add('flip-card-inner')
        const flipCardFront = document.createElement('div')
        flipCardFront.classList.add('flip-card-front')
        const flipCardBack = document.createElement('div')
        flipCardBack.classList.add('flip-card-back')
  
        const companyText = document.createTextNode(row[2])
        const roleText = document.createTextNode(row[3])
        const company = document.createElement('h1')
        const role = document.createElement('h2')

        const technologiesHeadline = document.createElement('h2')
        const technologiesHeadlineText = document.createTextNode(headlines[4] ? headlines[4] : '')
        const descriptionHeadline = document.createElement('h2')
        const descriptionHeadlineText = document.createTextNode(row[10] || row[11] ? headlines[10] : '')
  
  
        const technologiesText = document.createTextNode(row[4] + ', ' + row[5] + ', ' + row[6] + ', ' + row[7] + ', ' + row[8] + ', ' + row[9])
        const descriptionText = document.createTextNode(row[10] + '\n\n' + row[11])
        const technologies = document.createElement('p')
        const description = document.createElement('p')
  
  
        company.appendChild(companyText)
        role.appendChild(roleText)
        technologies.appendChild(technologiesText)
        description.appendChild(descriptionText)
        technologiesHeadline.appendChild(technologiesHeadlineText)
        descriptionHeadline.appendChild(descriptionHeadlineText)
  
        flipCardFront.appendChild(company)
        flipCardFront.appendChild(role)
        flipCardBack.appendChild(technologiesHeadline)
        flipCardBack.appendChild(technologies)
        flipCardBack.appendChild(descriptionHeadline)
        flipCardBack.appendChild(description)
        flipCardInner.appendChild(flipCardFront)
        flipCardInner.appendChild(flipCardBack)
        flipCard.appendChild(flipCardInner)
        interactiveCV.appendChild(flipCard)
  
  
        const timelineYear = document.createTextNode(row[0] + '\n' + row[1])
        const timelineItem = document.createElement('li')
        timelineItem.classList.add('timeline-item')
        const timelineButton = document.createElement('button')
        timelineButton.classList.add('timeline-link-item')
        timelineButton.setAttribute("id", index)
        timelineButton.appendChild(timelineYear)
        timelineItem.appendChild(timelineButton)
        timelineCV.appendChild(timelineItem)
      } else {
        headlines = row
      }
      index++
    },
    complete: function () {
      const Cards = document.getElementsByClassName("flip-card");
      const timelineItems = document.getElementsByClassName("timeline-link-item");
      for (let i = 0; i < Cards.length; i++) {
        timelineItems[i].addEventListener('click', (click) => {
          for (let card of Cards) {
            if (card.getAttribute("id") === click.target.getAttribute("id")) {
              card.setAttribute("style", "display:inline");
              card.classList.add("slide-in-fwd-center");
            } else {
              card.setAttribute("style", "display:none");
            }
          }
        });
      }
    }
  });
}


buildCV();