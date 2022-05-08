import { parse } from "papaparse"

// Models
import { CV } from "./models/CV";
import { Project } from "./models/Project";
import { Skill } from "./models/Skill";

// Models
import { ProjectGridItem } from "./models/ProjectGridItem";
import { FlipCVCard } from "./models/FlipCVCard";
import { TimelineItem } from "./models/TimelineItem";
import { SkillMap } from "./models/SkillMap";
import { SkillCardGrid } from "./models/SkillCardGrid";

/**
 * Describes the CSVBuilder
 * @class
 * @property  {string} fileURL
 * @property  {function} builder
 * @classdesc 
 * This class contains the different builder classes for different
 * builder methodes and different fileURLs
 */
export class CSVBuilder {
  fileURL = null
  builder = null
  /**
   * @constructs CSVBuilder
   * @param  {string} fileURL
   * @param  {function} builder
   * @description By building a specific section in the website the raw string data from the files are used to be added to the jQuery elements
   */
  constructor(fileURL, builder) {
    this.fileURL = fileURL
    this.builder = builder
  }
  /**
   * @class Describes the ProjectBuilder
   * @memberof CSVBuilder
   * @static
   */
  static ProjectBuilder = class {
    /**
     * The specific build function which build the project-grid
     * on the website.
     * @function build 
     * @memberof CSVBuilder.ProjectBuilder
     * @param  {Object[]} projects
     */
    async build(projects) {
      if (Project.validateProjects(projects)) {
        Object.values(projects).forEach(async (projectData) => {
          const project = new Project(
            projectData.imageName,
            projectData.title,
            projectData.link)
          const projectGridItem = new ProjectGridItem(
            await project.getImagePath,
            project.title,
            project.link
          )
          $('#project-grid').append(projectGridItem.getProjectItem)
        })
      }
    }
  }
  /**
   * @class Describes the CVBuilder
   * @memberof CSVBuilder
   * @static
   */
  static CVBuilder = class {
    /**
     * The specific build function which build the interactive-cv and the clickable-timline
     * on the website.
     * @function build
     * @memberof CSVBuilder.CVBuilder
     * @param  {Object[]} cvCards
     */
    build(cvCards) {
      if (CV.validateCV(cvCards)) {
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
  }
  /**
   * @class Describes the SkillBuilder
   * @memberof CSVBuilder
   * @static
   */
  static SkillBuilder = class {
    /**
     * The specific build function which build the skill section
     * on the website.
     * @function build
     * @memberof CSVBuilder.SkillBuilder
     * @param  {Skill[]} skills
     */
    build(skills) {
      if (Skill.validateSkills(skills)) {
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
  }
  /**
   * Describes the build function which calls the parse function
   * from the papa parse package which then parses the file content to 
   * an javascript object.
   * @function
   */
  build() {
    parse(this.fileURL, {
      header: true,
      download: true,
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