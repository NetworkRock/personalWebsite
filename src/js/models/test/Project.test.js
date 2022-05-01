import { CSVBuilder } from "../../csvBuilders"

// Mocks
import {
  projects_correct,
  projects_incorrect,
  projects_to_much
} from "../../../../__mocks__/projectsMock.js"
import {empty_data} from "../../../../__mocks__/emptyDataMock"

const expectedHTMLOutput = '<div id="project-grid"><div class="project-grid-item" style="background-image: url(undefined);"><div class="project-overlay"><div class="project-text"><h3>Other projects will follow…</h3></div></div><a class="project-grid-item-link"></a></div></div>'
const expectedHTMLOutputForIncorrectData = '<div id="project-grid"></div>'

let projectBuilder = undefined

describe('Project', () => {

  beforeEach(() => {
    document.body.innerHTML = '<div id="project-grid"></div>';
    projectBuilder = new CSVBuilder.ProjectBuilder()
  })
  test('buildProject with correct raw data', async () => {
    await projectBuilder.build(projects_correct)
    expect(expectedHTMLOutput).toEqual(document.body.innerHTML)
  });

  test('buildProject with incorrect raw data', async () => {
    await projectBuilder.build(projects_incorrect)
    expect(expectedHTMLOutputForIncorrectData).toEqual(document.body.innerHTML)
  });
  test('buildProject with correct to much data', async () => {
    await projectBuilder.build(projects_to_much)
    expect(expectedHTMLOutputForIncorrectData).toEqual(document.body.innerHTML)
  });
  test('buildProject with empty data', async () => {
    await projectBuilder.build(empty_data)
    expect(expectedHTMLOutputForIncorrectData).toEqual(document.body.innerHTML)
  });
})
