
const itSkills = document.getElementById('it-skills')
const skillGridItemCounter = 2
const ratings = {
  5: 'fill-up-five-circles',
  4: 'fill-up-four-circles',
  3: 'fill-up-three-circles',
  2: 'fill-up-fwo-circles',
  1: 'fill-up-one-circles'
}

async function buildSkills() {
  Papa.parse("../csv/skills.csv", {
    download: true,
    complete: ({ data }) => {
      let skillMap = {}
      let section = ''
      data.forEach(async (row) => {
        if (!row[1]) {
          section = row[0]
        } else {
          skillMap[section] = {
            [row[0]]: row[1],
            ...skillMap[section]
          }
        }
      })
      Object.keys(skillMap).forEach(async (section) => {
        const rowSplit = Math.ceil(Object.keys(skillMap[section]).length / skillGridItemCounter)
        const rows = []
        Object.entries(skillMap[section]).sort((row1 , row2) => row2[1] - row1[1]).forEach(async (technologies) => {
          const [technologie, rating] = technologies
          const skillRow = document.createElement('li')
          skillRow.classList.add('skill-row')
          const skillText = document.createElement('div')
          skillText.classList.add('skill-text')
          const skillTextInner = document.createTextNode(technologie)
          skillText.appendChild(skillTextInner)
          const fillUpCircles = document.createElement('div')
          fillUpCircles.classList.add(ratings[rating])
          for (let i = 0; i < rating; i++) {
            const circle = document.createElement('div')
            circle.classList.add('circle-conatainer')
            fillUpCircles.appendChild(circle)
          }
          skillRow.appendChild(skillText)
          skillRow.appendChild(fillUpCircles)
          rows.push(skillRow)
        })

        const skillCardGrid = document.createElement('div')
        skillCardGrid.classList.add('skill-card-grid')
        const skillCardHeader = document.createElement('h2')
        skillCardHeader.classList.add('skill-grid-header')
        const skillCardHeaderText = document.createTextNode(section)
        skillCardHeader.appendChild(skillCardHeaderText)
        skillCardGrid.appendChild(skillCardHeader)
        for (let itemCounter = 0; itemCounter < skillGridItemCounter; itemCounter++) {
          const rowChunk = rows.slice(rowSplit)
          const skillSectionGridItem = document.createElement('div')
          skillSectionGridItem.classList.add('skill-grid-item')
          const skillList = document.createElement('ul')
          skillList.classList.add('skill-list')
          if(itemCounter) {
            skillList.append(...rowChunk)
          } else {
            skillList.append(...rows)
          }
          skillSectionGridItem.appendChild(skillList)
          skillCardGrid.appendChild(skillSectionGridItem)
        }

        itSkills.appendChild(skillCardGrid)
      })
    }
  });
}


buildSkills();