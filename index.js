import $ from "jquery";
import './css/style.css'
import './css/desktop_styles.css'
import './site.webmanifest.json'
import './images/personal-website.jpg'
import "./icons/apple-touch-icon.jpg"
import "./icons/favicon-32x32.jpg"
import "./icons/favicon-16x16.jpg"
import "./icons/favicon.ico"

// CSV Files
import cv from './csv/cv.csv'
import projects from './csv/projects.csv'
import skills from './csv/skills.csv'

import writing from "./src/js/typewriter_effect";
import { CSVBuilder } from "./src/js/csvBuilders";

// Navigation Links Key Map
const navigationLinks = {
  "#welcome": $("#welcomeLink"),
  "#profile": $("#profileLink"),
  "#skill": $("#skillLink"),
  "#projects": $("#projectsLink"),
};

// Skill circle map
const skillCirclesMap = [
  document.getElementsByClassName("fill-up-five-circles"),
  document.getElementsByClassName("fill-up-four-circles"),
  document.getElementsByClassName("fill-up-three-circles"),
  document.getElementsByClassName("fill-up-two-circles"),
  document.getElementsByClassName("fill-up-one-circle"),
];

/**
 * This function triggers on each onload of the website
 * @function init
 */
function init() {
  const projectBuilder = new CSVBuilder.ProjectBuilder()
  const cvBuilder = new CSVBuilder.CVBuilder()
  const skillBuilder = new CSVBuilder.SkillBuilder()
  new CSVBuilder(projects, projectBuilder.build).build()
  new CSVBuilder(cv, cvBuilder.build).build()
  new CSVBuilder(skills, skillBuilder.build).build()
  if (location.hash.length === 0) {
    writing();
    $('welcomeLink').addClass("nav-link-active");
  } else {
    $('#navBar').css("opacity", 1);
    $('#start-overlay').css("width", '0vw');
    $('#start-overlay').css("backgroundColor", 'rgba(63,63,67,1)');
    $('#welcome-headline').css("opacity", 0);
    $('#cursor').css("opacity", 0);
  }
}

/**
 * Remove class for active link on every link. 
 * Remove circle animation on all circleElements
 * @function resetCSSClasses
 */
function resetCSSClasses() {
  Object.values(navigationLinks).forEach((linkElement) => {
    linkElement.removeClass("nav-link-active");
  });
  skillCirclesMap.forEach((circleElement) => {
    for (var i = 0; i < circleElement.length; i++) {
      circleElement[i].classList.remove("circle-animation");
    }
  });
}

/**
 * This function triggers on every location changed
 * Adding the background color for the current selected nav link
 * Add the circle animation
 * @function locationHashChanged
 */
function locationHashChanged() {
  resetCSSClasses();
  navigationLinks[
    Object.keys(navigationLinks).find(
      (linkElement) => linkElement === location.hash
    )
  ].addClass("nav-link-active");
  if (location.hash === "#skill") {
    skillCirclesMap.forEach((circleElement) => {
      for (var i = 0; i < circleElement.length; i++) {
        circleElement[i].classList.add("circle-animation");
      }
    });
  }
}

onhashchange = locationHashChanged
onload = init