import '../../css/style.css'
import '../../css/desktop_styles.css'
import '../../site.webmanifest.json'
import '../../images/personal-website.jpg'
import "../../icons/apple-touch-icon.jpg"
import "../../icons/favicon-32x32.jpg"
import "../../icons/favicon-16x16.jpg"
import "../../icons/favicon.ico"

// CSV Files
import cv from '../../csv/cv.csv'
import projects from '../../csv/projects.csv'
import skills from '../../csv/skills.csv'

import { CSVBuilder } from "./csvBuilders";
import { Typewriter } from "./Typewriter";
import { skillCirclesCSSClasses } from "./models/SkillCardGrid";

// Navigation Links Key Map
const navigationLinks = {
  "#welcome": $("#welcomeLink"),
  "#profile": $("#profileLink"),
  "#skill": $("#skillLink"),
  "#projects": $("#projectsLink"),
};

/**
 * Triggers on each onload of the website
 * @function init
 */
function init() {
  const projectBuilder = new CSVBuilder.ProjectBuilder()
  const cvBuilder = new CSVBuilder.CVBuilder()
  const skillBuilder = new CSVBuilder.SkillBuilder()
  new CSVBuilder(projects, projectBuilder.build).build()
  new CSVBuilder(cv, cvBuilder.build).build()
  new CSVBuilder(skills, skillBuilder.build).build()
  locationHashChanged()
}

/**
 * Triggers on every location changed and also called here {@link init}.
 * @function locationHashChanged
 */
export function locationHashChanged() {
  const currentLocation = navigationLinks[
    Object.keys(navigationLinks).find(
      (linkElement) => linkElement === location.hash
    )
  ]

  if (currentLocation) {
    removeStartAnimation()
    scrollAfterReload(currentLocation)
    toggleCircleAnimation(currentLocation)
    toggleNavigationLink(currentLocation)
  } else {
    const typewriter = new Typewriter(["Hello, I am Robin", "I'm a software professional"], $("#welcome-headline"))
    typewriter.writing()
  }
}

/**
 * Scrolls to the position especially in the case the site
 * gets reloaded with a specific location
 * @function scrollAfterReload
 */
function scrollAfterReload(currentLocation) {
  if (currentLocation.attr('onclick') === undefined) {
    document.location = currentLocation.attr('href');
  } else {
    currentLocation.click();
  }
}

/**
 * Removes all the css classes which gets triggerd by the initial start animation
 * @function removeStartAnimation
 */
function removeStartAnimation() {
  $('#start-overlay').css("width", '0vw');
  $('#start-overlay').css("backgroundColor", 'rgba(63,63,67,1)');
  $('#welcome-headline').css("opacity", 0);
  $('#cursor').css("opacity", 0);
  $('#navbar').css("opacity", 1);
}

/**
 * Toggles the circle animation that on each time the skill screen is reached
 * the circle animation starts again
 * @function toggleCircleAnimation
 */
function toggleCircleAnimation(currentLocation) {
  skillCirclesCSSClasses.forEach((circleElement) => {
    for (var i = 0; i < circleElement.length; i++) {
      currentLocation.attr('id') === "skillLink" ? circleElement[i].classList.add("circle-animation") : circleElement[i].classList.remove("circle-animation");
    }
  });
}

/**
 * Toggles the navigation links on each location change and set the active css class for it
 * @function toggleNavigationLink
 */
function toggleNavigationLink(currentLocation) {
  Object.values(navigationLinks).forEach((linkElement) => {
    currentLocation === linkElement ? linkElement.addClass("nav-link-active") : linkElement.removeClass("nav-link-active");
  });
}


window.onhashchange = locationHashChanged
window.onload = init