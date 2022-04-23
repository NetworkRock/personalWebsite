import { CSVBuilder } from "../../csvBuilders"

const projects = [
  {
    "title": "This personal website",
    "imageName": "personal-website.jpg",
    "link": "#"
  },
  {
    "title": "Other projects will follow…",
    "imageName": "",
    "link": ""
  }
];

const shittyObject = [
  {
    "sd": "Thsdfe",
    "g": "",
    "uuu": undefined
  },
];

const expectedHTMLOutput = '<div id="project-grid"><div class="project-grid-item" style="background-image: url(undefined);"><div class="project-overlay"><div class="project-text"><h3>Other projects will follow…</h3></div></div><a class="project-grid-item-link"></a></div></div>'

describe('Project', () => {

  test('buildProject with correct raw data', async () => {

    document.body.innerHTML = '<div id="project-grid"></div>';

    const projectBuilder = new CSVBuilder.ProjectBuilder()
    await projectBuilder.build(projects)
    expect(expectedHTMLOutput).toEqual(document.body.innerHTML)
    // expect(shittyObject).toEqual(document.body.innerHTML)
  });
})
