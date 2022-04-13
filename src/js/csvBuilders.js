import { parse, ParseResult } from "papaparse"

// Models
import { CV } from "./models/CV";
import { Project } from "./models/Project";
import { Skill } from "./models/Skill";

import $ from "jquery";

// Models
import { ProjectGridItem } from "./models/ProjectGridItem";
import { FlipCVCard } from "./models/FlipCVCard";
import { TimelineItem } from "./models/TimelineItem";
import { SkillMap } from "./models/SkillMap";
import { SkillCardGrid } from "./models/SkillCardGrid";

export class CSVBuilder {
  file = null
  builder = null
  constructor(file, builder) {
    this.file = file
    this.builder = builder
  }

  static ProjectBuilder = class {
    async build(projects) {
      Object.values(projects).forEach(async (projectData) => {
        const project = new Project(
          projectData.imageName,
          projectData.title,
          projectData.link)
        const projectGridItem = new ProjectGridItem(
          await project.getImagePath,
          project.getProjectTitle,
          project.getProjectLink
        )
        $('#project-grid').append(projectGridItem.getProjectItem)
      })
    }

  }

  static CVBuilder = class {
    build(cvCards) {
      Object.values(cvCards).forEach((card, index) => {
        const cv = new CV(
          card.company,
          card.role,
          card.start,
          card.end,
          card.technologies,
          card.project1,
          card.project2,
        )
        const flipCVCard = new FlipCVCard(
          index,
          `card-${index}`,
          cv.company,
          cv.role,
          cv.technologies,
          cv.project1,
          cv.project2
        )
        const timelineItem = new TimelineItem(
          index,
          cv.start,
          cv.end
        )

        $('#interactive-cv').append(flipCVCard.getFlipCVCard)
        $('#clickable-timeline').append(timelineItem.getTimelineItem)
      })
    }
  }

  static SkillBuilder = class {
    build(skills) {
      const skillMap = new SkillMap(skills).skillMap

      Object.keys(skillMap).forEach((category => {
        /**
          * Maximal rating for the skills
          * @type {number}
          */
        const maxRating = 5
        /**
          * Possible rating css classes
          * @type {Object<number, string>}
          */
        const ratings = {
          5: 'fill-up-five-circles',
          4: 'fill-up-four-circles',
          3: 'fill-up-three-circles',
          2: 'fill-up-two-circles',
          1: 'fill-up-one-circle'
        }
        const technologiesAmount = Object.keys(skillMap[category]).length
        const spliceIndex = Math.ceil(technologiesAmount / 2)
        const gridOnetechnologies = Object.entries(skillMap[category])
        const gridTwotechnologies = gridOnetechnologies.splice(0, spliceIndex)

        const skillCardGrid = new SkillCardGrid(
          category,
          gridOnetechnologies,
          gridTwotechnologies,
          ratings,
          maxRating
        )
        $('#it-skills').append(skillCardGrid.getSkillCardGrid)
      }))
    }
  }

  build() {
    parse(this.file, {
      header: true,
      download: true,
      /**
       * @param {ParseResult<CV | Project | Skill>} parseResult
       */
      complete: (parseResult) => {
        /**
         * @param {CV | Project | Skill[]} data
         */
        const { data, errors, meta } = parseResult
        if (errors.length) {
          console.warn(meta)
          console.error(errors)
        }
        this.builder(data)
      }
    });
  }
}