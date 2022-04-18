import $ from "jquery";

/**
 * Describes a CV with jQuery elements
 * @class
 * @property  {JQuery<HTMLElement>} company
 * @property  {JQuery<HTMLElement>} role
 * @property  {JQuery<HTMLElement>} start
 * @property  {JQuery<HTMLElement>} end
 * @property  {JQuery<HTMLElement>} technologies
 * @property  {JQuery<HTMLElement>} project1
 * @property  {JQuery<HTMLElement>} project2
*/
export class CV {
  company = $("<h1/>")
  role = $("<h2/>")
  start = $('<span/>').css('border-bottom', '0.1em solid #27a594')
  end = $('<span/>')
  technologies = $("<p/>")
  project1 = $("<p/>")
  project2 = $("<p/>")
  /**
   * @constructs CV
   * @param  {string} company
   * @param  {string} role
   * @param  {string} start
   * @param  {string} end
   * @param  {string} technologies
   * @param  {string} project1
   * @param  {string} project2
   * @description By building a CV the raw string data from the files will be added to the jQuery elements
   */
  constructor(
    company,
    role,
    start,
    end,
    technologies,
    project1,
    project2
  ) {
    this.company.text(company)
    this.role.text(role)
    this.start.text(start)
    this.end.text(end)
    this.technologies.text(technologies)
    this.project1.text(project1)
    this.project2.text(project2)
  }
}