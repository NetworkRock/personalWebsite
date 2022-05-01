import { CSVBuilder } from "../../csvBuilders"
import {CV} from "../CV"

// Mocks
import {
  cv_correct,
  cv_incorrect,
  cv_to_much
} from "../../../../__mocks__/cvMock"
import { empty_data } from "../../../../__mocks__/emptyDataMock"


const expectedHTMLOutput = '<div id=\"interactive-cv\"><div class=\"flip-card flip-card-show\" id=\"card-0\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><h1>YOURCE</h1><h2>FRONTEND ENGINEER</h2></div><div class=\"flip-card-back\"><h2>Projects</h2><p>Currently im responsible for two frontend projects in parallel. I implemented complete user stories up to whole projects. I also refactored code to typescript and I changed core configurations and environment setups. On top of that I really enjoy writing tests for my own code to deliver quality software.</p><br><p></p><h2>Technologies</h2><p>React,Typescript,Redux,Fromik,React Testing Library,Jest</p></div></div></div><div class=\"flip-card\" id=\"card-1\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><h1>FINANZ INFORMATIK</h1><h2>CONSULTANT AS FULLSTACK ENGINEER</h2></div><div class=\"flip-card-back\"><h2>Projects</h2><p>I worked with focus on the frontend side and implemented a new icon system. I have improved the backend code quality by refactoring code and fixing bugs.</p><br><p></p><h2>Technologies</h2><p>Java,Google Guice,XML,JavaScript,Eclipse</p></div></div></div><div class=\"flip-card\" id=\"card-2\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><h1>MHP - A PORSCHE COMPANY</h1><h2>CONSULTANT AS FULLSTACK ENGINEER</h2></div><div class=\"flip-card-back\"><h2>Projects</h2><p>I was the main person responsible for a subproject in the frontend. We worked according to SCRUM framework in the team. I programmed also backend REST endpoints. I wrote tests to improve the code quality.</p><br><p></p><h2>Technologies</h2><p>Angular,Redux,JEE,Mockito,Redux,Hibernate</p></div></div></div><div class=\"flip-card\" id=\"card-3\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><h1>BCM SOLUTIONS</h1><h2>FULLSTACK ENGINEER</h2></div><div class=\"flip-card-back\"><h2>Projects</h2><p>I programmed a complete web application with frontend and backend technologies for a resource management application.</p><br><p></p><h2>Technologies</h2><p>Java, Spring,JEE,JSF,Hibernate,JavaScript</p></div></div></div><div class=\"flip-card\" id=\"card-4\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><h1>GROZ-BECKERT</h1><h2>FULLSTACK ENGINEER</h2></div><div class=\"flip-card-back\"><h2>Projects</h2><p>I did an implementation of a Continuous Integration Environment with Jenkins. For that i configured everything for Jenkins and the entire pipeline. I also wrote tests in Eclipse with JavasScript and Java code.</p><br><p>I developed scribbles, designs and an hybrid app prototype, which should scan a barcode and use this information to make a request to the servers to get product information.</p><h2>Technologies</h2><p>Java,JavaScript,Jenking,Maven,Continues Integration,Maven</p></div></div></div></div><div id=\"clickable-timeline-container\"><ul id=\"clickable-timeline\"><li class=\"timeline-item\" id=\"timeline-item-0\"><span style=\"border-bottom: 0.1em solid #27a594;\">2021-05-01</span><span>2022-02-28</span></li><li class=\"timeline-item\" id=\"timeline-item-1\"><span style=\"border-bottom: 0.1em solid #27a594;\">2020-10-01</span><span>2021-02-01</span></li><li class=\"timeline-item\" id=\"timeline-item-2\"><span style=\"border-bottom: 0.1em solid #27a594;\">2018-12-01</span><span>2020-10-01</span></li><li class=\"timeline-item\" id=\"timeline-item-3\"><span style=\"border-bottom: 0.1em solid #27a594;\">2018-09-01</span><span>2018-12-01</span></li><li class=\"timeline-item\" id=\"timeline-item-4\"><span style=\"border-bottom: 0.1em solid #27a594;\">2016-10-01</span><span>2017-03-01</span></li></ul></div>'
const expectedHTMLOutputForIncorrectData = '<div id="interactive-cv"></div><div id="clickable-timeline-container"><ul id="clickable-timeline"></ul></div>'

const expectedHTMLOutputAfterHoverOverTimelineIcon = '<div id="interactive-cv"><div class="flip-card" id="card-0"><div class="flip-card-inner"><div class="flip-card-front"><h1>YOURCE</h1><h2>FRONTEND ENGINEER</h2></div><div class="flip-card-back"><h2>Projects</h2><p>Currently im responsible for two frontend projects in parallel. I implemented complete user stories up to whole projects. I also refactored code to typescript and I changed core configurations and environment setups. On top of that I really enjoy writing tests for my own code to deliver quality software.</p><br><p></p><h2>Technologies</h2><p>React,Typescript,Redux,Fromik,React Testing Library,Jest</p></div></div></div><div class="flip-card flip-card-show slide-in-fwd-center" id="card-1"><div class="flip-card-inner"><div class="flip-card-front"><h1>FINANZ INFORMATIK</h1><h2>CONSULTANT AS FULLSTACK ENGINEER</h2></div><div class="flip-card-back"><h2>Projects</h2><p>I worked with focus on the frontend side and implemented a new icon system. I have improved the backend code quality by refactoring code and fixing bugs.</p><br><p></p><h2>Technologies</h2><p>Java,Google Guice,XML,JavaScript,Eclipse</p></div></div></div><div class="flip-card" id="card-2"><div class="flip-card-inner"><div class="flip-card-front"><h1>MHP - A PORSCHE COMPANY</h1><h2>CONSULTANT AS FULLSTACK ENGINEER</h2></div><div class="flip-card-back"><h2>Projects</h2><p>I was the main person responsible for a subproject in the frontend. We worked according to SCRUM framework in the team. I programmed also backend REST endpoints. I wrote tests to improve the code quality.</p><br><p></p><h2>Technologies</h2><p>Angular,Redux,JEE,Mockito,Redux,Hibernate</p></div></div></div><div class="flip-card" id="card-3"><div class="flip-card-inner"><div class="flip-card-front"><h1>BCM SOLUTIONS</h1><h2>FULLSTACK ENGINEER</h2></div><div class="flip-card-back"><h2>Projects</h2><p>I programmed a complete web application with frontend and backend technologies for a resource management application.</p><br><p></p><h2>Technologies</h2><p>Java, Spring,JEE,JSF,Hibernate,JavaScript</p></div></div></div><div class="flip-card" id="card-4"><div class="flip-card-inner"><div class="flip-card-front"><h1>GROZ-BECKERT</h1><h2>FULLSTACK ENGINEER</h2></div><div class="flip-card-back"><h2>Projects</h2><p>I did an implementation of a Continuous Integration Environment with Jenkins. For that i configured everything for Jenkins and the entire pipeline. I also wrote tests in Eclipse with JavasScript and Java code.</p><br><p>I developed scribbles, designs and an hybrid app prototype, which should scan a barcode and use this information to make a request to the servers to get product information.</p><h2>Technologies</h2><p>Java,JavaScript,Jenking,Maven,Continues Integration,Maven</p></div></div></div></div><div id=\"clickable-timeline-container\"><ul id=\"clickable-timeline\"><li class=\"timeline-item\" id=\"timeline-item-0\"><span style=\"border-bottom: 0.1em solid #27a594;\">2021-05-01</span><span>2022-02-28</span></li><li class=\"timeline-item timeline-item-hover\" id=\"timeline-item-1\"><span style=\"border-bottom: 0.1em solid #27a594;\">2020-10-01</span><span>2021-02-01</span></li><li class=\"timeline-item\" id=\"timeline-item-2\"><span style=\"border-bottom: 0.1em solid #27a594;\">2018-12-01</span><span>2020-10-01</span></li><li class=\"timeline-item\" id=\"timeline-item-3\"><span style=\"border-bottom: 0.1em solid #27a594;\">2018-09-01</span><span>2018-12-01</span></li><li class=\"timeline-item\" id=\"timeline-item-4\"><span style=\"border-bottom: 0.1em solid #27a594;\">2016-10-01</span><span>2017-03-01</span></li></ul></div>'

let cvBuilder = undefined

describe('Flip cv card', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="interactive-cv"></div><div id="clickable-timeline-container"><ul id="clickable-timeline"></ul></div>';
    cvBuilder = new CSVBuilder.CVBuilder()
  })

  test('buildCV with correct raw data', async () => {
    await cvBuilder.build(cv_correct)
    expect(expectedHTMLOutput).toEqual(document.body.innerHTML)
  });

  test('buildCV with incorrect raw data', async () => {
    await cvBuilder.build(cv_incorrect)
    expect(expectedHTMLOutputForIncorrectData).toEqual(document.body.innerHTML)
  });
  test('buildCV with to much data', async () => {
    await cvBuilder.build(cv_to_much)
    expect(expectedHTMLOutputForIncorrectData).toEqual(document.body.innerHTML)
  });
  test('build with empty data', async () => {
    await cvBuilder.build(empty_data)
    expect(expectedHTMLOutputForIncorrectData).toEqual(document.body.innerHTML)
  });
  test('TimelineItem mouseenter', async () => {
    await cvBuilder.build(cv_correct)
    $('#timeline-item-1').mouseenter()
    expect(expectedHTMLOutputAfterHoverOverTimelineIcon).toEqual(document.body.innerHTML)
  });
  test('TimelineItem mouseenter bug check for not apply the hover classes on the span elements - that could happend by a very fast mouseenter', async () => {
    await cvBuilder.build(cv_correct)
    const spanElement = $('#timeline-item-1').children('span').first()
    spanElement.mouseenter()
    expect(expectedHTMLOutputAfterHoverOverTimelineIcon).toEqual(document.body.innerHTML)
  });
})
