import $ from "jquery";
import Papa from "papaparse"

import skills from '../../csv/skills.csv'

const skillGridItemCounter = 2
const maxRating = 5
const ratings = {
  5: 'fill-up-five-circles',
  4: 'fill-up-four-circles',
  3: 'fill-up-three-circles',
  2: 'fill-up-two-circles',
  1: 'fill-up-one-circle'
}

const buildSkills = async () => {
  Papa.parse(skills, {
    download: true,
    complete: ({ data }) => {
      let skillMap = {}
      let section = ''
      data.forEach(async (row) => {
        // If there is no value on second index it is a new section
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
        const rows = []
        const rowSplit = Math.ceil(Object.keys(skillMap[section]).length / skillGridItemCounter)
        Object.entries(skillMap[section])
          .sort((row1, row2) => row2[1] - row1[1]).forEach(async (technologies) => {
            const [technologie, rating] = technologies
            rows.push(
              $("<li/>").addClass('skill-row')
                .append($("<div/>").addClass('skill-text').text(technologie))
                .append(() => {
                  const fillUp = $("<div/>").addClass(ratings[rating])
                  for (let i = 0; i < maxRating; i++) {
                    fillUp.append($("<div/>").addClass('circle-container'))
                  }
                  return fillUp
                }))
          })

        $('#it-skills').append(() => {
          const skillCardGrid = $("<div/>").addClass('skill-card-grid')
            .append($("<h2/>").addClass('skill-grid-header').text(section))
          for (let itemCounter = 0; itemCounter < skillGridItemCounter; itemCounter++) {
            const rowChunk = rows.slice(rowSplit)
            skillCardGrid
              .append($("<div/>").addClass('skill-grid-item')
                .append($('<ul/>').addClass('skill-list')
                  .append(itemCounter ? rowChunk : rows)))
          }
          return skillCardGrid
        })
      })
    }
  });
}


export default buildSkills;