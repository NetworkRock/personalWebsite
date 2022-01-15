// Detect Desktop devices
const isDesktop = window.matchMedia("screen and (min-width: 900px)").matches;

// Navigation Links Key Map
const navigationLinks = {
  "#welcome": document.getElementById("welcomeLink"),
  "#profile": document.getElementById("profileLink"),
  "#skill": document.getElementById("skillLink"),
  "#projects": document.getElementById("projectsLink"),
};

// Skill circle map
const skillCirclesMap = [
  document.querySelectorAll(".fill-up-five-circles"),
  document.querySelectorAll(".fill-up-four-circles"),
  document.querySelectorAll(".fill-up-three-circles"),
  document.querySelectorAll(".fill-up-two-circles"),
  document.querySelectorAll(".fill-up-one-circle"),
];

function init() {
  // Disallow landscape mode
  screen.orientation.lock('portrait');
  if (location.hash.length === 0) {
    writing();
    welcomeLink.classList.add("nav-link-active");
  } else {
    navBar.style.opacity = 1;
    startOverlay.style.width = "0vw";
    startOverlay.style.backgroundColor = "rgba(63,63,67,1)";
    welcomeHeadline.style.opacity = 0;
    cursor.style.opacity = 0;
  }
}

function resetByLocationChanged() {
  // Remove class for active link on every link
  Object.values(navigationLinks).forEach((linkElement) => {
    linkElement.classList.remove("nav-link-active");
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
  ].classList.add("nav-link-active");
  // Add the circle animation
  if (location.hash === "#skill") {
    skillCirclesMap.forEach((circleElement) => {
      for (var i = 0; i < circleElement.length; i++) {
        circleElement[i].classList.add("circle-animation");
      }
    });
  }
}

window.onhashchange = locationHashChanged;
window.onload = init;




/* Methode for open and close the navigation */
function triggerNavigation() {
  var x = document.getElementById("nav-list");
  if (!isDesktop) {
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
}