import $ from "jquery";

import './css/style.css'
import './css/desktop_styles.css'

import './site.webmanifest.json'

import './images/personal-website.jpg'

import "./icons/apple-touch-icon.jpg"
import "./icons/favicon-32x32.jpg"
import "./icons/favicon-16x16.jpg"
import "./icons/favicon.ico"

import buildCV from "./src/js/cv-builder";
import buildProjects from "./src/js/projects-builder";
import buildSkills from "./src/js/skills-builder";
import writing from "./src/js/typewriter_effect";

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

function init() {
  buildProjects();
  buildSkills();
  buildCV();
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

function resetByLocationChanged() {
  // Remove class for active link on every link
  Object.values(navigationLinks).forEach((linkElement) => {
    linkElement.removeClass("nav-link-active");
  });
  // Remoce circle animation on all circleElements
  skillCirclesMap.forEach((circleElement) => {
    for (var i = 0; i < circleElement.length; i++) {
      circleElement[i].classList.remove("circle-animation");
    }
  });
}

function locationHashChanged() {
  resetByLocationChanged();
  // Adding the background color for the current selected nav link
  navigationLinks[
    Object.keys(navigationLinks).find(
      (linkElement) => linkElement === location.hash
    )
  ].addClass("nav-link-active");
  // Add the circle animation
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