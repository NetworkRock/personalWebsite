import $ from "jquery";
export class CV {
  company = $("<h1/>")
  role = $("<h2/>")
  start = $('<span/>').css('border-bottom', '0.1em solid #27a594')
  end = $('<span/>')
  technologies = $("<p/>")
  project1 = $("<p/>")
  project2 = $("<p/>")
  constructor(
    company,
    role,
    start,
    end,
    technologies,
    project1,
    project2
  ) {
    this.company = this.company.text(company)
    this.role = this.role.text(role)
    this.start = this.start.text(start)
    this.end = this.end.text(end)
    this.technologies = this.technologies.text(technologies)
    this.project1 = this.project1.text(project1)
    this.project2 = this.project2.text(project2)
  }
}